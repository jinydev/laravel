# 라라벨 서버 배포
라라벨 프레임워크로 개발된 어플리케이션을 git과 연동하여 서버에 배포하는 방법에 대해서 알아 봅니다.

> 개발 환경은 ubuntu를 기반으로 합니다.

## 컴포저
라라벨은 `composer` 패키지 메니져를 이용하여 설치 관리 됩니다. 이를 위하여 서버에 컴포저를 설치해 주어야만 합니다.

> ubuntu 서버에서 컴포저는 root 권환 및 user 권환 모두 실행이 가능합니다.
만일, 컴포저를 root용으로 설치한 경우 컴포저가 self-update를 할때 루트 권한이 필요하기 때문에 사용자 계정에도 실행이 가능하도록 해야 합니다.


1. 먼저 컴포저를 설치할 사용자 계정 밑에 폴더를 생성합니다.
```
$ mkdir ~/bin
```

2. bin 폴더를 PATH 경로에 추가해 주기 위해 ~/.profile 의 맨 아래에 다음 내용을 추가줍니다.
```
export PATH=$PATH:$HOME/bin
```

3. 설정을 현재 세션에 반영하도록 source 명령어를 사용합니다.
```
$ source ~/.profile
```

이제 컴포저를 설치합니다.
```
$ curl -sS https://getcomposer.org/installer | php -- --install-dir=$HOME/bin/
```

사용이 편리하도록 composer 라는 이름으로 심볼릭 링크를 겁니다.
```
$ ln -s $HOME/bin/composer.phar $HOME/bin/composer
```

이제 다음과 같이 버전을 출력하면 정상 설치된 것입니다.
```
$ composer --version
Composer version 1.0-dev 
```

## git으로 프로젝트 clone 하기

애플리케이션 설치

이제 작성한 애플리케이션을 설치할 순서로 서비스를 배포할 폴더로 이동합니다.

$ cd /var/www/laravel/
Plain text
CODE
 

애플리케이션 소스 저장소에서 소스를 복제합니다.

$ git clone https://github.com/lesstif/laravel-todolog.git todolog
Plain text
CODE
설정을 위해 복제된 소스 폴더로 이동합니다.

$ cd todolog
Plain text
CODE
 

제일 먼저 의존성 있는 라이브러리를 설치하기 위해 컴포저 인스톨을 실행합니다. 주의할 점은 이제 운영 환경이므로 개발과 다르게 접근해야 하며 개발시에만 사용되는 패키지를 설치하지 않고 오토로더를 최적화하도록 아래의 옵션을 사용합니다.

$ composer install --no-dev -o --prefer-dist


환경 구성

설치가 끝났으면 애플리케이션 환경을 구성할 순서이며 기본 탑재된 설정 파일을 복사합니다.

$ cp .env.example .env
Plain text
CODE
세션과 데이타 암호화에 사용하는 대칭키를 생성합니다. 

$ php artisan key:gen
Plain text
CODE
 

에디터로 .env 를 열어서 APP_DEBUG 와 APP_ENV 를 설정하며 그외 DB 연결 정보와 mailgun, github 인증 정보등을 사용자의 인증 정보에 맞게 수정합니다.

APP_ENV=production
APP_DEBUG=false
 
SESSION_DRIVER=redis
 
MAIL_DRIVER=mailgun
MAILGUN_DOMAIN=todolog.mailgun.org
MAILGUN_SECRET=key-mailgun-secret
 
GITHUB_ID=github-app-id
GITHUB_SECRET=github-secret
GITHUB_URL=http://todolog.myhost.com/auth/github/callback
Plain text
CODE
 

이제 데이타베이스 마이그레이션을 실행합니다. APP_ENv=production 이므로 진짜로 실행할지를 물어보는 프롬프트가 뜨는데 yes 를 입력합니다.

$ php artisan migrate
Plain text
CODE
 

이제 초기 데이타를 시딩합니다. --class 옵션으로 시딩 클래스를 명시한 이유는 프로덕션 환경이라 개발 패키지를 설치하지 않아서(컴포저의 --no-dev) faker 패키지가 없으므로 TaskTableSeeder 는 작동하지 않기 때문입니다.

$ php artisan db:seed --class=UserTableSeeder
Plain text
CODE
스케줄러가 구동되도록 crontab -e 로 작업 등록 기능을 실행한 후에 다음 내용을 등록합니다.

* * * * * php /var/www/laravel/todolog/artisan schedule:run 1>> /dev/null 2> &1
Plain text
CODE
 
php-fpm 디렉터리 권한 설정

php-fpm 은 www-data 라는 계정으로 구동되지만 우리는 todolog 라는 계정으로 애플리케이션을 만들었기때문에 php-fpm 이 애플리케이션 폴더에 파일 쓰기가 안 됩니다. storage 폴더와 bootstrap/cache 폴더는 php-fpm 가 쓰기 권한이 있어야 제대로 동작하므로 소유자의 그룹을 www-data 로 변경해 줍니다.

$ sudo chown -R www-data:www-data storage/ bootstrap/cache/
Plain text
CODE
소유자와 그룹은 읽고 쓰기가 가능하도록 other 는 안 되도록 모드를 수정합니다.

$ sudo chmod -R 775 storage/* bootstrap/cache/
Plain text
CODE
$ sudo usermod -a -G www-data todolog
Plain text
CODE

모두가 읽고 쓰기가 되도록 777 로 설정하는 것은 보안에 취약하므로 권장하지 않습니다.

 

애플리케이션 구동을 위한 모든 준비가 완료되었고 브라우저로 연결하여 정상 동작하는지 확인해 봅시다.
