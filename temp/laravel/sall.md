

# Laravel Sail에 대한 완벽한 가이드

[2021 년 1 월 10 일](https://hackernoon.com/archives/2021/01/09) 3,639 회 읽기

1

![img](https://hackernoon.com/emojis/heart.png)![img](https://hackernoon.com/emojis/heart.png)![img](https://hackernoon.com/emojis/heart.png)![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)![img](https://hackernoon.com/emojis/light.png)![img](https://hackernoon.com/emojis/light.png)![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/boat.png)![img](https://hackernoon.com/emojis/boat.png)![img](https://hackernoon.com/emojis/boat.png)![img](https://hackernoon.com/emojis/boat.png)

![img](https://hackernoon.com/emojis/money.png)![img](https://hackernoon.com/emojis/money.png)![img](https://hackernoon.com/emojis/money.png)![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/images/wpMgmYEsvHPWleC9kTVpIRfgvEO2-byk2b0g.jpeg)

[![Yannick Chenot Hacker Noon 프로필 사진](https://firebasestorage.googleapis.com/v0/b/hackernoon-app.appspot.com/o/images%2FwpMgmYEsvHPWleC9kTVpIRfgvEO2-ri02bfn.jpeg?alt=media&token=0b9ec954-31a1-40f7-8af3-ba6833a6d899)](https://hackernoon.com/u/osteel)

### [@ osteel](https://hackernoon.com/u/osteel)야닉 체노

수석 백엔드 개발자

[![LinkedIn 소셜 아이콘](https://hackernoon.com/social-icons/linkedin-new.png)](https://www.linkedin.com/in/yannickchenot)[![트위터 소셜 아이콘](https://hackernoon.com/social-icons/twitter-new.png)](https://twitter.com/osteel)[![github 소셜 아이콘](https://hackernoon.com/social-icons/github-new.png)](https://github.com/osteel)

> 트루먼은 계속해서 난파 된 범선을 무한히 물러가는 수평선으로 향합니다. 배의 뱃머리가 갑자기 거대한 파란색 벽에 부딪 히고 트루먼이 발을 떨어 뜨리는 것을 볼 때까지 모든 것이 평온합니다. 트루먼은 회복하고 갑판을 가로 질러 보트의 뱃머리까지 기어 오릅니다. 그 위에 바다에서 나오는 거대한 차원의 원형 극이 펼쳐진다. 그가 항해하고있는 하늘은 단지 칠해진 배경 일 뿐이다. (앤드류 M. 니콜, [트루먼 쇼](http://www.dailyscript.com/scripts/the-truman-show_shooting.html?ref=hackernoon.com) )

2020 년 12 월 8 일 Taylor Otwell은 Docker를 기반으로 한 개발 환경 인 [Laravel Sail](https://laravel.com/docs/sail?ref=hackernoon.com) 의 출시 와 함께 Laravel 문서의 대대적 인 점검을 발표했습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

<iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="" title="트위터 트윗" src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1336357588791947264&amp;lang=en&amp;origin=https%3A%2F%2Fhackernoon.com%2Fwhat-is-wrong-with-laravel-sail-78s314m&amp;siteScreenName=hackernoon&amp;theme=light&amp;widgetsVersion=e1ffbdb%3A1614796141937&amp;width=550px" data-tweet-id="1336357588791947264" style="box-sizing: inherit; position: static; visibility: visible; width: 550px; height: 393px; display: block; flex-grow: 1; user-select: auto;"></iframe>

이 발표는 많은 사람들이 새로운 환경을 마침내 Docker에 진입하는 방법으로 인식함에 따라 커뮤니티 전체에 흥분을 불러 일으켰습니다. 하지만 Sail이 이전 제품과는 상당히 다르고 Docker 전문가가되기위한 가이드가 아닌 개발 접근 방식을 도입했기 때문에 혼란이 발생했습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

이 게시물은 Laravel Sail에서 기대할 수있는 사항, 작동 방식 및이를 최대한 활용하는 방법에 관한 것입니다. 또한 개발자에게 자신의 맞춤형 솔루션을 선호하여 이탈 해 달라는 요청이기도합니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

하지만 도착하기 전에 Sail이 무엇인지에 대한 높은 수준의 설명부터 시작하여 갑판 아래를 살펴 봐야합니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

## Laravel Sail은 무엇입니까?

Sail은 Laravel의 최신 개발 환경입니다. 그것은 긴 같은 공식 솔루션 특징 목록에 가장 최근에 추가 [농가](https://laravel.com/docs/homestead?ref=hackernoon.com) 및 [주차 대행을](https://laravel.com/docs/valet?ref=hackernoon.com) 한편으로하고, 같은 지역 사회의 노력 [Laragon](https://laragon.org/?ref=hackernoon.com) , [Laradock](http://laradock.io/?ref=hackernoon.com) , [테이크 아웃](https://github.com/tighten/takeout?ref=hackernoon.com) 및 [선박](https://vessel.shippingdocker.com/?ref=hackernoon.com) 에 대한합니다 (에 따라 다른 [GitHub의 저장소](https://github.com/laravel/sail?ref=hackernoon.com#inspiration) , 항해은 주로 후자에 의해 영감을 ).

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

Laravel Sail은 [컨테이너](https://www.docker.com/resources/what-container?ref=hackernoon.com) 를 활용하여 애플리케이션을 기본적으로 패키징하여 모든 운영 체제에서 빠르고 쉽게 실행할 수 있는 기술인 [Docker를](https://www.docker.com/?ref=hackernoon.com) 기반으로 합니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

Laravel 문서는 이미 Laravel 프로젝트를 로컬에 설치하고 실행 하는 데 [선호되는 방법](https://laravel.com/docs/installation?ref=hackernoon.com#your-first-laravel-project) 으로 Sail의 미래가 밝아 보입니다. Homestead와 Valet가 수년간 점령 한 곳입니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

## 이전 제품과 비교하면 어떻습니까?

다시 말해서 Homestead는 PHP, MySQL 및 웹 서버 (Nginx)와 같은 필수 구성 요소뿐만 아니라 PostgreSQL, Redis와 같은 덜 자주 사용되는 기술을 포함하여 대부분의 Laravel 애플리케이션에 필요한 모든 것이 미리 패키지 된 [Vagrant](https://www.vagrantup.com/?ref=hackernoon.com) box (가상 머신)입니다. 또는 Memcached.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

반면 Valet은 성능에 중점을 둔 macOS 용 경량 환경으로 가상 머신 대신 PHP의 로컬 설치에 의존하며 [DBngin](https://dbngin.com/?ref=hackernoon.com) 또는 [Takeout](https://dbngin.com/?ref=hackernoon.com) 과 같은 다른 서비스와 함께 사용하여 데이터베이스와 같은 다른 종속성을 관리 하도록 설계되었습니다 .

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

Homestead와 Valet은 문서상 상당히 다르게 보이지만 지역 개발에 대한 동일한 일반적인 접근 방식을 장려하며, 이는 앞서 언급 한 대부분의 솔루션에서도 공유됩니다. 그들은 Laravel 프로젝트를위한 모든 환경에 적합한 환경이되도록 노력하고 관리합니다. 모두 한 지붕 아래.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

Sail의 접근 방식은 개발 환경의 설명이 나머지 코드베이스에 포함되어 있다는 점에서 다릅니다. 개발자 컴퓨터에있는 타사 솔루션에 의존하는 대신 프로젝트에는 Docker가 해당 환경을 선택하고 빌드하는 일련의 지침이 함께 제공됩니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

애플리케이션에는 배터리가 포함되어 있으며 Docker가 설치되어있는 한 개발자의 운영 체제에 관계없이 개발 환경을 가동하기 위해 단일 명령 만 필요합니다. 또한 애플리케이션을위한 맞춤형 개발 환경의 개념을 소개합니다. 제 생각에는 Laravel Sail의 진정한 키커입니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

이 접근 방식은 기존 솔루션에서 크게 벗어 났지만 Sail은 함께 제공되는 도구와 관련하여 여전히 일부 유사점을 가지고 있으며 일부는 필수이고 다른 일부는 그렇지 않습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

가장 중요한 사항과 구현 방식을 살펴 보겠습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

## 어떻게 작동합니까?

이제부터는 Laravel을 새로 설치하는 것이 더 쉬울 것입니다. 비록 제가 참조하는 파일에는 [공식 GitHub 저장소](https://github.com/laravel/sail?ref=hackernoon.com) 에 대한 링크가 함께 제공됩니다 . 약간의 시간이 있다면 지금 [운영 체제 지침을](https://laravel.com/docs/installation?ref=hackernoon.com#your-first-laravel-project) 따르고 완료되면 여기로 돌아 오십시오.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

Sail을 사용하면 새로운 Laravel 애플리케이션을 만들 때 관심 [있는 서비스](https://laravel.com/docs/?ref=hackernoon.com#choosing-your-sail-services) 를 [선택할](https://laravel.com/docs/?ref=hackernoon.com#choosing-your-sail-services) 수 있지만 기본적으로 PHP, MySQL 및 Redis의 세 가지 주요 구성 요소로 구성됩니다. 당으로 [문서](https://laravel.com/docs/sail?ref=hackernoon.com#introduction) 전체 설정은 두 개의 파일 주위에 끌어 내리는 :

```
docker-compose.yml
```

 (새로 설치 한 후 프로젝트의 루트에서 찾을 수 있음) 및 [`sail`](https://github.com/laravel/sail/blob/1.x/bin/sail?ref=hackernoon.com) 스크립트 (아래에 있음 

```
vendor/bin
```

).



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

## docker-compose.yml 파일

앞서 언급했듯이 Laravel Sail은 컨테이너를 활용하는 기술인 Docker를 기반으로합니다. 경험상 각 컨테이너는 하나의 프로세스 만 실행해야합니다. 즉, 각 컨테이너는 하나의 소프트웨어 만 실행해야합니다. 이 규칙을 위의 설정에 적용하면 PHP 용 컨테이너 하나, MySQL 용 컨테이너 하나, Redis 용 컨테이너 하나가 필요합니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

이러한 컨테이너는 애플리케이션을 구성하며 제대로 작동하려면 *오케스트레이션* 되어야합니다. 이를 수행하는 방법에는 여러 가지가 있지만 Laravel Sail은 [Docker Compose](https://docs.docker.com/compose/?ref=hackernoon.com) 를 사용하여 작업을 수행하는데, 이는 로컬 설정에 가장 쉽고 가장 많이 사용되는 솔루션입니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

Docker Compose는 애플리케이션의 다양한 구성 요소를 

```
docker-compose.yml
```

YAML 형식의 파일. 프로젝트의 루트에있는 파일을 열면

```
version
```

 상단에 매개 변수가 있습니다. 

```
services
```

 방금 언급 한 구성 요소 목록을 포함하는 섹션 : 

```
laravel.test
```

, 

```
mysql
```

 과 

```
redis
```

.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

나는 설명 할 것이다 

```
mysql
```

 과 

```
redis
```

 서비스를 먼저 제공합니다. 

```
laravel.test
```

; 그런 다음 기본적으로 새 설치와 함께 제공되는 다른 작은 항목에 대해 간략하게 설명하겠습니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

**mysql 서비스**

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

이름에서 알 수 있듯이 

```
mysql
```

 서비스는 MySQL 데이터베이스를 처리합니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
mysql:
    image: 'mysql:8.0'
    ports:
        - '${FORWARD_DB_PORT:-3306}:3306'
    environment:
        MYSQL_ROOT_PASSWORD: '${DB_PASSWORD}'
        MYSQL_DATABASE: '${DB_DATABASE}'
        MYSQL_USER: '${DB_USERNAME}'
        MYSQL_PASSWORD: '${DB_PASSWORD}'
        MYSQL_ALLOW_EMPTY_PASSWORD: 'yes'
    volumes:
        - 'sailmysql:/var/lib/mysql'
    networks:
        - sail
    healthcheck:
        test: ["CMD", "mysqladmin", "ping"]
```

그만큼 

```
image
```

매개 변수는 이 컨테이너에 사용할 *이미지를* 나타냅니다 . 이미지와 컨테이너의 차이점을 이해하는 쉬운 방법은 객체 지향 프로그래밍 개념에서 차용하는 것입니다. 이미지는 클래스와 유사하고 컨테이너는 해당 클래스의 인스턴스와 유사합니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

여기에서 태그를 사용하도록 지정합니다. 

```
8.0
```

 의 

```
mysql
```

MySQL 버전 8.0에 해당하는 이미지. 기본적으로 이미지는 가장 큰 이미지 레지스트리 인 [Docker Hub](https://hub.docker.com/?ref=hackernoon.com) 에서 다운로드됩니다 . [MySQL](https://hub.docker.com/_/mysql?ref=hackernoon.com) 에 [대한 페이지를](https://hub.docker.com/_/mysql?ref=hackernoon.com) 살펴보십시오. 대부분의 이미지에는 사용 방법을 설명하는 간단한 문서가 함께 제공됩니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

그만큼 

```
ports
```

 키를 사용하면 로컬 포트를 컨테이너 포트에 매핑 할 수 있습니다. 

```
local:container
```

체재. 위의 코드 스 니펫에서

```
FORWARD_DB_PORT
```

 환경 변수 (또는 

```
3306
```

 해당 값이 비어있는 경우)는 컨테이너의 

```
3306
```

포트. 이것은 [MySQL Workbench](https://www.mysql.com/products/workbench/?ref=hackernoon.com) 또는 [Sequel Ace](https://sequel-ace.com/?ref=hackernoon.com) 와 같은 타사 소프트웨어를 데이터베이스에 연결하는 데 주로 유용합니다 . 설정은 그것 없이도 작동합니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)



```
environments
```

컨테이너의 환경 변수를 정의하기위한 것입니다. 여기에서 대부분은 기존 환경 변수의 값을받습니다.

```
.env
```

 프로젝트의 루트에있는 파일 – 

```
docker-compose.yml
```

이 파일의 내용을 자동으로 감지하고 가져옵니다. 예를 들어,

```
MYSQL_ROOT_PASSWORD: '${DB_PASSWORD}'
```

 라인, 컨테이너의 

```
MYSQL_ROOT_PASSWORD
```

 환경 변수는 다음 값을받습니다. 

```
DB_PASSWORD
```

 ~로부터 

```
.env
```

 파일.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)



```
volumes
```

특정 로컬 파일 또는 폴더를 매핑하거나 Docker가 처리하도록 하여 컨테이너의 파일 또는 폴더 중 일부를 *볼륨* 으로 선언 하는 것입니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

여기에서 단일 Docker 관리 볼륨이 정의됩니다. 

```
sailmysql
```

. 이 유형의 볼륨은 별도의

```
volumes
```

 섹션, 같은 수준 

```
services
```

. 하단에서 찾을 수 있습니다.

```
docker-compose.yml
```

 파일:



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
    volumes:
        sailmysql:
            driver: local
        sailredis:
            driver: local
        sailmeilisearch:
            driver: local
```

그만큼 

```
sailmysql
```

 볼륨은 컨테이너의 

```
/var/lib/mysql
```

MySQL 데이터가 저장되는 폴더입니다. 이 볼륨은 컨테이너가 파괴 된 경우에도 데이터가 유지되도록합니다.

```
sail down
```

 명령.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

그만큼 

```
networks
```

섹션에서는 컨테이너를 사용할 수있는 내부 네트워크를 지정할 수 있습니다. 여기에서 모든 서비스는 동일하게 연결됩니다.

```
sail
```

 네트워크의 하단에도 정의되어 있습니다. 

```
docker-compose.yml
```

에서 

```
networks
```

 위 섹션 

```
volumes
```

 하나:



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
    networks:
        sail:
            driver: bridge
```

드디어, 

```
healthcheck
```

서비스가 될 수 있도록 진실해야하는 조건을 표시하는 방법입니다 *준비* 만 할 수는 대조적으로, *시작은* . 곧 이것으로 돌아갈 것입니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

**Redis 서비스**

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

그만큼 

```
redis
```

 서비스는 

```
mysql
```

 하나:



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
    redis:
        image: 'redis:alpine'
        ports:
            - '${FORWARD_REDIS_PORT:-6379}:6379'
        volumes:
            - 'sailredis:/data'
        networks:
            - sail
        healthcheck:
          test: ["CMD", "redis-cli", "ping"]
```



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

우리는 

```
alpine
```

Redis 의 [공식 이미지](https://hub.docker.com/_/redis?ref=hackernoon.com) 태그 ( [Alpine은 경량 Linux 배포판입니다](https://alpinelinux.org/?ref=hackernoon.com) ) 및 전달할 포트를 정의합니다. 그런 다음 데이터를 영구적으로 만들기 위해 볼륨을 선언하고 컨테이너를

```
sail
```

 서비스 준비를 고려하기 위해 수행 할 검사를 정의합니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

**laravel.test 서비스**

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

그만큼 

```
laravel.test
```

 서비스는 더 복잡합니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
    laravel.test:
        build:
            context: ./vendor/laravel/sail/runtimes/8.0
            dockerfile: Dockerfile
            args:
                WWWGROUP: '${WWWGROUP}'
        image: sail-8.0/app
        ports:
            - '${APP_PORT:-80}:80'
        environment:
            WWWUSER: '${WWWUSER}'
            LARAVEL_SAIL: 1
        volumes:
            - '.:/var/www/html'
        networks:
            - sail
        depends_on:
            - mysql
            - redis
            - selenium
```

처음에는 이름이 약간 헷갈 리지만이 서비스는 PHP를 처리하는 서비스입니다 (예 : Laravel 애플리케이션을 제공하는 서비스).

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

다음으로 

```
build
```

 이전에 본 적이없는 키입니다. [`Dockerfile`](https://github.com/laravel/sail/blob/1.x/runtimes/8.0/Dockerfile?ref=hackernoon.com) 그것은 아래에 존재 

```
vendor/laravel/sail/runtimes/8.0
```

 폴더.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

[Dockerfile](https://docs.docker.com/engine/reference/builder/?ref=hackernoon.com) 은 이미지 빌드 지침이 포함 된 텍스트 문서입니다. Docker Hub에서 기존 이미지를 그대로 가져와 사용하는 대신 Laravel 팀은 Dockerfile에서 자체 이미지를 설명하기로 선택했습니다. 우리가 처음 실행했을 때

```
sail up
```

 명령을 내리고 이미지를 빌드하고이를 기반으로 컨테이너를 만들었습니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

Dockerfile을 열고 첫 번째 줄을 살펴보십시오.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
FROM ubuntu:20.04
```

이것은 태그가 

```
20.04
```

 의 

```
ubuntu
```

 [이미지](https://hub.docker.com/_/ubuntu?ref=hackernoon.com) 는 사용자 지정 이미지의 시작점으로 사용됩니다. 파일의 나머지 부분은 기본적으로 표준 라 라벨 애플리케이션에 필요한 모든 것을 설치하여 빌드하는 지침 목록입니다. 여기에는 PHP, 다양한 확장 및 Git 또는 Supervisor와 같은 기타 패키지, Composer가 포함됩니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

파일의 끝 부분에도 빠른 설명이 필요합니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
COPY start-container /usr/local/bin/start-container
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
COPY php.ini /etc/php/8.0/cli/conf.d/99-sail.ini
RUN chmod +x /usr/local/bin/start-container
    
EXPOSE 8000
    
ENTRYPOINT ["start-container"]
```

여러 로컬 파일이 컨테이너로 복사되는 것을 볼 수 있습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

- 그만큼 [`php.ini`](https://github.com/laravel/sail/blob/1.x/runtimes/8.0/php.ini?ref=hackernoon.com) 파일은 PHP에 대한 일부 사용자 정의 구성입니다.

- 그만큼 [`supervisord.conf`](https://github.com/laravel/sail/blob/1.x/runtimes/8.0/supervisord.conf?ref=hackernoon.com)file은 여기에서 PHP 프로세스를 시작하는 프로세스 관리자 인 [Supervisor](http://supervisord.org/?ref=hackernoon.com) 의 구성 파일입니다 .

- 그만큼 

  `start-container`

   파일은 컨테이너가 시작될 때마다 몇 가지 작업을 수행하는 Bash 스크립트입니다. 

  `ENTRYPOINT`

  . 우리는 그것이

  ```
  RUN chmod +x
  ```

   교수;

- 드디어, 

  ```
  EXPOSE 8000
  ```

   이 컨테이너가 런타임에 지정된 포트에서 수신 대기한다는 사실을 독자에게 알리는 것 외에는 아무것도하지 않습니다 (애플리케이션이 8000이 아닌 포트 80에서 제공되기 때문에 여기에서는 실제로 잘못된 것처럼 보입니다).

이 Dockerfile에서 다른 일들이 일어나고 있지만 위의 내용이 그 요점입니다. 이것은 PHP 8.0과 관련이 있지만 Laravel Sail에는 [7.4 버전](https://github.com/laravel/sail/blob/1.x/runtimes/7.4/Dockerfile?ref=hackernoon.com) 도 함께 제공됩니다 .

```
laravel.test
```

 서비스 

```
docker-compose.yml
```

 대신.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

이 서비스에는 또한 

```
depends_on
```

Laravel 애플리케이션 이전에 컨테이너가 준비되어야하는 서비스 목록이 포함 된 섹션. 후자는 MySQL, Redis 및 Selenium을 모두 참조하므로 연결 오류를 피하기 위해 먼저 시작하고 준비해야합니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

여기에서 앞서 설명한 상태 확인이 유용합니다. 기본적으로 

```
depends_on
```

지정된 서비스가 *시작될* 때까지 기다립니다 . 이것이 반드시 *준비* 가 *되었음을* 의미하지는 않습니다 . 이러한 서비스가 준비된 것으로 간주되는 조건을 지정하여 Laravel 애플리케이션을 시작하기 전에 올바른 상태에 있는지 확인합니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

나머지 설정은 이제 익숙 할 것이므로 건너 뛰겠습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

**meilisearch, mailhog 및 셀레늄 서비스**

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

이전에 언급 한 소규모 서비스입니다. 이미 [여기](https://laravel.com/docs/sail?ref=hackernoon.com#meilisearch) , [여기](https://laravel.com/docs/sail?ref=hackernoon.com#previewing-emails) , [여기에](https://laravel.com/docs/sail?ref=hackernoon.com#previewing-emails) 문서화 되어 [있습니다](https://laravel.com/docs/sail?ref=hackernoon.com#laravel-dusk) . 요점은 다른 이미지와 동일한 방식으로 작동한다는 것입니다. Docker Hub에서 기존 이미지를 가져와 최소한의 구성으로 그대로 사용합니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

## 항해 스크립트

운영 체제에 대한 [Laravel의 설치 지침](https://laravel.com/docs/installation?ref=hackernoon.com#your-first-laravel-project) 을 따랐다 [면](https://laravel.com/docs/installation?ref=hackernoon.com#your-first-laravel-project) 어느 시점에서 다음 명령을 실행해야합니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ ./vendor/bin/sail up
```

그만큼 

```
sail
```

 여기서 우리가 부르는 파일은 Bash 스크립트로, 때때로 장황한 Docker 명령 위에 더 사용자 친화적 인 레이어를 추가합니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

자세히 살펴보기 위해 지금 열어 보겠습니다 (Bash에 익숙하지 않더라도 걱정하지 마십시오. 매우 간단합니다).

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

파일의 첫 부분 전체를 무시하고 큰 부분에 집중할 수 있습니다. 

```
if
```

 다음과 같이 시작하는 진술 :



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
if [ $# -gt 0 ]; then
    # Source the ".env" file so Laravel's environment variables are available...
    if [ -f ./.env ]; then
        source ./.env
    fi
    # ...
```

평이한 영어로 

```
$# -gt 0
```

 비트는 "인수가 0보다 큰 경우"로 변환됩니다. 즉, 

```
sail
```

 인수가있는 스크립트를 실행하면 

```
if
```

 성명서.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

즉, 우리가 실행할 때 

```
./vendor/bin/sail up
```

 명령, 우리는 

```
sail
```

 스크립트 

```
up
```

 논쟁, 그리고 실행은 큰 

```
if
```

 일치하는 조건을 찾는 문 

```
up
```

논의. 아무것도 없기 때문에 스크립트는 큰 끝까지 내려갑니다.

```
if
```

, 일종의 포괄 

```
else
```

 우리는 거기에서 찾을 수 있습니다 :



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
# Pass unknown commands to the "docker-compose" binary...
else
    docker-compose "$@"
fi
```

주석은 이미 무슨 일이 일어나고 있는지 설명합니다. 스크립트는 

```
up
```

 에 대한 인수 

```
docker-compose
```

바이너리. 즉, 우리가 달리면

```
./vendor/bin/sail up
```

 우리는 실제로 달려 

```
docker-compose up
```

에 나열된 서비스에 대한 컨테이너를 시작 하는 [표준 Docker Compose 명령](https://docs.docker.com/compose/reference/up/?ref=hackernoon.com) 입니다.

```
docker-compose.yml
```

.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

이 명령은 필요한 경우 해당 이미지를 먼저 다운로드하고 앞서 언급 한대로 Dockerfile을 기반으로 Laravel 이미지를 빌드합니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

시도 해봐! 운영

```
./vendor/bin/sail up
```

 그때 

```
docker-compose up
```

 – 그들은 같은 일을합니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

이제 애플리케이션의 Dockerfile에 의해 설치된 패키지 중 하나 인 Composer와 관련된 더 복잡한 예제를 살펴 보겠습니다. 하지만 그 전에 백그라운드에서 컨테이너를 실행하기 위해 [분리 모드](https://laravel.com/docs/sail?ref=hackernoon.com#starting-and-stopping-sail) 에서 Sail을 시작하겠습니다 .

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ ./vendor/bin/sail up -d
```

그만큼 

```
sail
```

 스크립트를 사용하면 Composer 명령을 실행할 수 있습니다. 예 :



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ ./vendor/bin/sail composer --version
```

위의 호출 

```
sail
```

 스크립트 

```
composer
```

 과 

```
--version
```

 인수로 실행하면 

```
if
```

 다시 성명.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

Composer를 다루는 조건을 검색해 보겠습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
# ...
# Proxy Composer commands to the "composer" binary on the application container...
elif [ "$1" == "composer" ]; then
    shift 1

    if [ "$EXEC" == "yes" ]; then
        docker-compose exec \
            -u sail \
            "$APP_SERVICE" \
            composer "$@"
    else
        sail_is_not_running
    fi
    # ...
```

조건의 첫 번째 줄은 다음으로 시작합니다. 

```
shift
```

이것은 뒤에 오는 숫자만큼 많은 인수를 건너 뛰는 Bash *내장* 입니다. 이 경우

```
shift 1
```

 건너 뜁니다 

```
composer
```

 논쟁, 만들기 

```
--version
```

새로운 첫 번째 인수. 그런 다음 프로그램은 Sail이 실행 중인지 확인한 다음, 아래에서 설명하는 네 줄로 나누어 진 이상한 명령을 실행합니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
docker-compose exec \
    -u sail \
    "$APP_SERVICE" \
    composer "$@"
```



```
exec
```

 Docker Compose를 사용하면 이미 실행중인 컨테이너에서 명령을 실행할 수 있습니다. 

```
-u
```

 명령을 실행할 사용자를 나타내는 옵션입니다. 

```
$APP_SERVICE
```

모든 것을 실행하려는 컨테이너입니다. 여기에서 그 가치는

```
laravel.test
```

, 이는 서비스의 이름입니다. 

```
docker-compose.yml
```

이전 섹션에서 설명한대로. 컨테이너에 들어가면 실행하려는 명령, 즉

```
composer
```

모든 스크립트의 인수가 뒤 따릅니다. 이것들은 이제

```
--version
```

, 첫 번째 인수를 건너 뛰었으므로



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

즉, 우리가 실행할 때 :

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ ./vendor/bin/sail composer --version
```

뒤에서 실행되는 명령은 다음과 같습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ docker-compose exec -u sail "laravel.test" composer "--version"
```

매번 이런 종류의 명령을 입력하는 것은 매우 번거 롭습니다. 그래서

```
sail
```

 스크립트는 단축키를 제공하여 사용자 경험을 훨씬 더 부드럽게 만듭니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

나머지 작은 것 좀 봐 

```
if
```

 그 밖의 내용을 확인하기 위해 큰 내용 안에있는 진술 – 거의 동일한 원칙이 모든 곳에 적용된다는 것을 알 수 있습니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

즉시 사용할 수있는 몇 가지 다른 기능 (예 : [로컬 컨테이너 공개](https://laravel.com/docs/sail?ref=hackernoon.com#sharing-your-site) )이 있지만 이제 Laravel Sail이 현재 제공하는 내용에 대해 살펴 보았습니다. 이것은 이미 꽤 좋은 시작이지만 기본 응용 프로그램의 경우에도 다소 제한적입니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

좋은 소식은 Laravel 팀이이를 인식하고 확장을 염두에두고 환경을 구축했다는 것입니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

> Sail은 Docker 일 뿐이므로 거의 모든 것을 자유롭게 사용자 지정할 수 있습니다. (라 [라벨 문서](https://laravel.com/docs/sail?ref=hackernoon.com#sail-customization) )

그것이 실제로 무엇을 의미하는지 봅시다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

## 라 라벨 돛 확장

이 섹션에서 다루는 코드 는 언제든지 참조 할 수 있는 [GitHub 저장소](https://github.com/osteel/laravel-sail-extended?ref=hackernoon.com) 로도 제공됩니다 .

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

[MongoDB](https://www.mongodb.com/?ref=hackernoon.com) 를 구실로 사용하여 Laravel Sail을 확장하는 세 가지 방법을 살펴 보겠습니다 . 하지만 진행하기 전에 가능한 한 많은 파일을 가져와야합니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

우리가 처음에 접근 할 수있는 유일한 것은 

```
docker-compose.yml
```

 파일을 만들 수 있지만 다음 명령을 사용하여 더 많은 자산을 게시 할 수 있습니다. 

```
docker
```

 프로젝트 루트의 폴더 :



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ ./vendor/bin/sail artisan sail:publish
```

잠시 후에 다시 살펴 보겠습니다. 당분간은 [Laravel MongoDB](https://github.com/jenssegers/laravel-mongodb?ref=hackernoon.com) 패키지를 [설치해 보겠습니다. 그러면](https://github.com/jenssegers/laravel-mongodb?ref=hackernoon.com) 우리가 가장 좋아하는 프레임 워크와 함께 MongoDB를 쉽게 사용할 수 있습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ ./vendor/bin/sail composer require jenssegers/mongodb
```

불행히도 Composer는 일부 누락 된 확장에 대해 불평하고 있습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
mongodb/mongodb[dev-master, 1.8.0-RC1, ..., v1.8.x-dev] require ext-mongodb ^1.8.1 -> it is missing from your system. Install or enable PHP's mongodb extension
```

이 문제를 해결합시다!

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

## 추가 확장 설치

이 게시물의 앞부분에서 Sail이 Dockerfiles를 사용하여 PHP 7.4 및 PHP 8.0에 대한 Laravel의 요구 사항과 일치하는 이미지를 빌드하는 방법에 대해 이야기했습니다. 이 파일은이 섹션의 시작 부분에서 실행 한 명령으로 게시되었습니다. 확장을 추가하기 위해해야 할 일은 파일을 편집하고 해당 이미지를 다시 빌드하는 것뿐입니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

많은 확장을 즉시 사용할 수 있으며 다음 명령을 사용하여 나열 할 수 있습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ ./vendor/bin/sail php -m
```

MongoDB는 이들의 일부가 아닙니다. 추가하려면

```
docker/8.0/Dockerfile
```

 파일 및 스팟 

```
RUN
```

 다양한 패키지 설치 지침 :



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
RUN apt-get update \
    && apt-get install -y gnupg gosu curl ca-certificates zip unzip git supervisor sqlite3 libcap2-bin \
    && mkdir -p ~/.gnupg \
    && echo "disable-ipv6" >> ~/.gnupg/dirmngr.conf \
    && apt-key adv --homedir ~/.gnupg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys E5267A6C \
    && apt-key adv --homedir ~/.gnupg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C300EE8C \
    && echo "deb http://ppa.launchpad.net/ondrej/php/ubuntu focal main" > /etc/apt/sources.list.d/ppa_ondrej_php.list \
    && apt-get update \
    && apt-get install -y php8.0-cli php8.0-dev \
       php8.0-pgsql php8.0-sqlite3 php8.0-gd \
       php8.0-curl php8.0-memcached \
       php8.0-imap php8.0-mysql php8.0-mbstring \
       php8.0-xml php8.0-zip php8.0-bcmath php8.0-soap \
       php8.0-intl php8.0-readline \
       php8.0-msgpack php8.0-igbinary php8.0-ldap \
       php8.0-redis \
    && php -r "readfile('http://getcomposer.org/installer');" | php -- --install-dir=/usr/bin/ --filename=composer \
    && curl -sL https://deb.nodesource.com/setup_15.x | bash - \
    && apt-get install -y nodejs \
    && apt-get -y autoremove \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/
```

PHP 확장과 관련된 블록은 모두 다음으로 시작하기 때문에 식별하기 쉽습니다. 

```
php8.0
```

. 목록의 끝을 다음과 같이 수정하십시오.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
php8.0-redis php8.0-mongodb \
```

[여기서](https://packages.ubuntu.com/focal/php/?ref=hackernoon.com) Ubuntu 20.04 용으로 사용 가능한 PHP 확장에 대한 세부 정보를 볼 수 있습니다 .

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

파일을 저장하고 다음 명령을 실행하십시오.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ ./vendor/bin/sail build
```

이것은에 나열된 모든 서비스를 거칩니다. 

```
docker-compose.yml
```

 파일을 작성하고 변경된 경우 해당 이미지를 빌드하십시오. 

```
laravel.test
```

 우리가 방금 업데이트 한 Dockerfile의 서비스입니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

완료되면 컨테이너를 다시 시작합니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ ./vendor/bin/sail up -d
```

이 명령은 해당 이미지가 

```
laravel.test
```

 서비스가 변경되었으며 컨테이너를 다시 만듭니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

![img](https://hackernoon.com/images/wpMgmYEsvHPWleC9kTVpIRfgvEO2-paqf2bar.jpeg)

그게 다야! 이제 PHP 용 MongoDB 확장이 설치되고 활성화되었습니다. PHP 8.0 이미지에 대해서만 수행했지만 다음을 업데이트하여 PHP 7.4에 동일한 프로세스를 적용 할 수 있습니다.

```
docker/7.4/Dockerfile
```

 대신 파일 

```
php7.4-mongodb
```

 확장자 이름으로.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

이제 Laravel 패키지를 안전하게 가져올 수 있습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ ./vendor/bin/sail composer require jenssegers/mongodb
```

다음 단계 : MongoDB 용 Docker 서비스 추가.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

## 새로운 서비스 추가

MongoDB는 본질적으로 또 다른 데이터베이스입니다. 결과적으로 해당 서비스는 MySQL 및 Redis의 서비스와 매우 유사합니다. [Docker Hub](https://hub.docker.com/?ref=hackernoon.com) 에 대한 빠른 검색 은 우리가 사용할 [공식 이미지](https://hub.docker.com/_/mongo?ref=hackernoon.com) 가 있음을 보여줍니다 .

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

문서에는 Docker Compose에 대한 예제 구성이 포함되어 있으며 필요에 따라 복사하고 조정할 수 있습니다. 열다

```
docker-compose.yml
```

 다른 서비스 뒤에 다음 서비스를 하단에 추가하십시오.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
    mongo:
        image: 'mongo:4.4'
        restart: always
        environment:
            MONGO_INITDB_ROOT_USERNAME: '${DB_USERNAME}'
            MONGO_INITDB_ROOT_PASSWORD: '${DB_PASSWORD}'
            MONGO_INITDB_DATABASE: '${DB_DATABASE}'
        volumes:
            - 'sailmongo:/data/db'
        networks:
            - sail
```

내가 변경 한 내용은 다음과 같습니다. 먼저 태그를 지정했습니다. 

```
4.4
```

 의 

```
mongo
```

영상. 지정하지 않으면 Docker Compose는

```
latest
```

태그는 기본적으로 새 릴리스를 사용할 수 있으므로 시간이 지남에 따라 다른 버전의 MongoDB를 참조하므로 좋지 않습니다. 주요 변경 사항이 도입되면 Docker 설정이 불안정해질 수 있으므로 가능할 때마다 프로덕션 버전과 일치하는 특정 버전을 대상으로 지정하는 것이 좋습니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

그런 다음 나는 

```
MONGO_INITDB_DATABASE
```

 컨테이너가 시작할 때 해당 이름으로 데이터베이스를 생성하기위한 환경 변수를 사용하고 각 환경 변수의 값을 

```
.env
```

 파일 (1 분 후에 다시 설명하겠습니다).



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

나는 또한 

```
volumes
```

 섹션, Docker 관리 볼륨을 컨테이너의 

```
/data/db
```

폴더. 여기에 MySQL 및 Redis와 동일한 원칙이 적용됩니다. 로컬 머신에 데이터를 유지하지 않으면 MongoDB 컨테이너가 파괴 될 때마다 데이터가 손실됩니다. 즉, MongoDB 데이터가 컨테이너의

```
/data/db
```

 볼륨을 사용하여 해당 폴더를 로컬로 유지합니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

이 볼륨은 아직 존재하지 않으므로 하단에 선언해야합니다. 

```
docker-compose.yml
```

, 다른 것 이후 :



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

마지막으로 

```
networks
```

 섹션은 서비스가 다른 서비스와 동일한 네트워크에 있는지 확인합니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

이제 패키지의 [지침에](https://github.com/jenssegers/laravel-mongodb?ref=hackernoon.com#configuration) 따라 Laravel MongoDB를 구성 할 수 있습니다 . 열다

```
config/database.php
```

 다음 데이터베이스 연결을 추가하십시오.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
    'mongodb' => [
        'driver' => 'mongodb',
        'host' => env('DB_HOST'),
        'port' => env('DB_PORT'),
        'database' => env('DB_DATABASE'),
        'username' => env('DB_USERNAME'),
        'password' => env('DB_PASSWORD'),
        'options' => [
            'database' => env('DB_AUTHENTICATION_DATABASE', 'admin'),
        ],
    ],
```

열기 

```
.env
```

 프로젝트의 루트에서 파일을 열고 다음과 같이 데이터베이스 값을 변경하십시오.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
DB_CONNECTION=mongodb
DB_HOST=mongo
DB_PORT=27017
DB_DATABASE=laravel_sail
DB_USERNAME=root
DB_PASSWORD=root
```

위의 내용은 MongoDB를 기본 데이터베이스 연결로 만듭니다. 실제 사례 시나리오에서는 Redis와 같은 보조 데이터베이스로 만들고 싶을 수 있지만 데모 목적으로는 그렇게 할 것입니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)



```
DB_HOST
```

 MongoDB 서비스의 이름입니다. 

```
docker-compose.yml
```

; 배후에서 Docker Compose는 서비스 이름을 관리하는 네트워크의 컨테이너 IP로 확인합니다 (이 경우에는 단일

```
sail
```

 끝에 정의 된 네트워크 

```
docker-compose.yml
```

).



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)



```
DB_PORT
```

 MongoDB를 사용할 수있는 포트입니다. 

```
27017
```

기본적으로 [이미지의 설명에 따라](https://hub.docker.com/_/mongo?ref=hackernoon.com) .



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

테스트 할 준비가되었습니다! 다음 명령을 다시 실행하십시오.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ ./vendor/bin/sail up -d
```

MongoDB의 이미지를 다운로드하고 새 볼륨을 만들고 새 컨테이너를 시작합니다. 

```
laravel_sail
```

 데이터 베이스:



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

![img](https://hackernoon.com/images/wpMgmYEsvHPWleC9kTVpIRfgvEO2-rotv2bzf.jpeg)

Laravel의 기본 마이그레이션을 실행하여 확인하겠습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ ./vendor/bin/sail artisan migrate
```

업데이트하여 테스트를 더 진행할 수 있습니다. 

```
User
```

모델이 너무 [확장](https://github.com/jenssegers/laravel-mongodb?ref=hackernoon.com#extending-the-authenticable-base-model) Laravel MongoDB를의

```
Authenticable
```

 모델:



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Jenssegers\Mongodb\Auth\User as Authenticatable;

class User extends Authenticatable
{
    // ...
```

Tinker를 사용하여 모델을 만들어보십시오.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ ./vendor/bin/sail tinker

Psy Shell v0.10.5 (PHP 8.0.0 — cli) by Justin Hileman
>>> \App\Models\User::factory()->create();
```

큰! MongoDB 통합이 작동합니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

Tinker 및 Eloquent를 사용하여 계속 상호 작용할 수 있지만 타사 소프트웨어 또는 [Mongo 셸](https://docs.mongodb.com/manual/mongo/?ref=hackernoon.com) 과 같은 명령 줄 인터페이스를 통해 데이터베이스에 직접 액세스하는 것이 유용한 경우가 [많습니다](https://docs.mongodb.com/manual/mongo/?ref=hackernoon.com) .

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

후자를 설정에 추가하겠습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

## 커스텀 항해 명령

좋은 소식은 Mongo 쉘을 소환하는 데 적합한 공식을 알고있는 한 이미 사용할 수 있다는 것입니다. 다음은 데이터베이스에 로그인하고 사용자를 나열하는 몇 가지 추가 명령과 함께 다음과 같습니다 (프로젝트의 루트에서 첫 번째 명령 실행).

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ docker-compose exec mongo mongo

MongoDB shell version v4.4.2
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("919072cf-817d-43a6-9ffb-c5e721eeefbc") }
MongoDB server version: 4.4.2
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
	https://docs.mongodb.com/
Questions? Try the MongoDB Developer Community Forums
	https://community.mongodb.com
> use admin
switched to db admin
> db.auth("root", "root")
1
> use laravel_sail
switched to db laravel_sail
> db.users.find()
```

그만큼 

```
docker-compose exec mongo mongo
```

명령이 익숙해 보일 것입니다. 이 기사의 앞부분에서 우리는

```
sail
```

 스크립트는 대부분 간단한 번역으로 구성되어 있습니다. 

```
sail
```

 더 복잡한 명령 

```
docker-compose
```

하나. 여기에서 우리는

```
docker-compose
```

 바이너리를 실행하려면 

```
mongo
```

 명령에 

```
mongo
```

 컨테이너.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

공정하게 말하면이 명령은 그리 나쁘지 않으며 쉽게 기억할 수 있습니다. 하지만 일관성을 위해 더 간단한

```
sail
```

 다음과 같이 동등합니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ ./vendor/bin/sail mongo
```

이를 달성하기 위해 우리는 

```
sail
```

 어떻게 든 스크립트이지만 내부에 있기 때문에 

```
vendor
```

Composer에서 생성 한 폴더는 직접 업데이트 할 수 없습니다. 수정하지 않고이를 기반으로 구축 할 수있는 방법이 필요합니다. 아래에 요약했습니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

1. 의 사본을 만드십시오 

   ```
   sail
   ```

    프로젝트의 루트에있는 스크립트;

2. 그것의 큰 내용을 대체하십시오 

   ```
   if
   ```

    사용자 지정 조건이있는 문;

3. 현재 인수와 일치하는 사용자 지정 조건이 없으면 원본에 전달합니다. 

   ```
   sail
   ```

    스크립트.

자세히 살펴보면 

```
sail
```

 파일 

```
ls -al
```

, 우리는 그것이 심볼릭 링크임을 알 수 있습니다. 

```
vendor/laravel/sail/bin/sail
```

 파일:



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

![img](https://hackernoon.com/images/wpMgmYEsvHPWleC9kTVpIRfgvEO2-anwj2b0i.jpeg)

이제 해당 파일을 프로젝트의 루트에 복사 해 보겠습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ cp vendor/laravel/sail/bin/sail .
```

새 사본을 열고 큰 내용을 바꿉니다. 

```
if
```

 다음과 같이 나머지는 그대로 둡니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
if [ $# -gt 0 ]; then
    # Source the ".env" file so Laravel's environment variables are available...
    if [ -f ./.env ]; then
        source ./.env
    fi

    # Initiate a Mongo shell terminal session within the "mongo" container...
    if [ "$1" == "mongo" ]; then

        if [ "$EXEC" == "yes" ]; then
            docker-compose exec mongo mongo
        else
            sail_is_not_running
        fi

    # Pass unknown commands to the original "sail" script..
    else
        ./vendor/bin/sail "$@"
    fi
fi
```

위의 코드에서 우리는 모든 

```
if...else
```

 큰 내부 조건 

```
if
```

 스크립트의 첫 번째 인수 값이 다음과 같으면 이전에 Mongo 셸에 액세스하기 위해 사용한 명령을 실행하는 자체 명령을 추가했습니다. 

```
mongo
```

. 그렇지 않은 경우 실행은 마지막

```
else
```

 진술하고 원래 전화 

```
sail
```

 모든 인수가있는 스크립트.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

지금 시도해 볼 수 있습니다. 파일을 저장하고 다음 명령을 실행하십시오.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ ./sail mongo
```

터미널에서 Mongo 셸 세션이 열립니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

다른 명령을 시도하여 원본이 

```
sail
```

 다음과 같은 경우 스크립트가 인계됩니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
$ ./sail artisan
```

Artisan 메뉴가 표시되어야합니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

그게 다야! 더 많은 명령이 필요한 경우 새 명령으로 추가 할 수 있습니다.

```
if...else
```

 큰 내부 조건 

```
if
```

 사본의 

```
sail
```

 프로젝트의 루트에있는 스크립트.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

이제 실행해야한다는 점을 제외하면 정확히 동일한 방식으로 작동합니다. 

```
./sail
```

 대신에 

```
./vendor/bin/sail
```

(또는 [문서에](https://laravel.com/docs/sail?ref=hackernoon.com#configuring-a-bash-alias) 제안 된대로 만든 경우 Bash 별칭을 업데이트합니다 ).



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

우리는 이제 Laravel Sail과 잘 통합 된 Docker 설정의 일부로 MongoDB의 완전한 기능 인스턴스를 실행하고 있습니다. 하지만 MongoDB는 여기에있는 단순한 예입니다. 사용하려는 거의 모든 기술로 동일한 작업을 수행 할 수 있습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

지금 가서 [보세요](https://hub.docker.com/?ref=hackernoon.com) ! 대부분의 주요 행위자는 따라하기 쉬운 지침과 함께 공식 또는 커뮤니티에서 유지되는 Docker 이미지를 가지고 있습니다. 대부분의 경우 몇 분 안에 소프트웨어의 로컬 인스턴스가 실행됩니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

Laravel Sail을 커스터마이즈하기 위해 할 수있는 일이 더 많을 것입니다.하지만 위에서 설명한 세 가지 방법은 이미 먼 길을 갈 것입니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

이 단계에서는 Laravel의 새로운 환경이 처음에 생각했던 것보다 훨씬 더 많은 일을 할 수 있다고 생각할 수 있습니다. 그러나이 기사의 요점은 사용을 피하는 것입니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

그래서 나는 이것으로 어디로 가고 있습니까?

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

## 어쨌든 Laravel Sail에 무슨 문제가 있습니까?

여기까지왔다면 Laravel Sail의 문제점이 무엇인지 궁금 할 것입니다. 이제 우리가 얼마나 멀리 밀어 낼 수 있는지 명확 해졌습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

지금 당장 말씀 드리겠습니다. 이전 섹션에서 설명한 모든 내용을 알고 이해하면 더 이상 Laravel Sail이 필요하지 않습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

맞습니다 – 당신은 그 지식을 가져 가서 떠날 수 있습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

그러나 이것에 대해 자세히 설명하기 전에 Laravel 팀이 대부분의 문제를 조만간 해결하기를 기대하지만 Sail의 실제 문제점을 검토해 보겠습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

첫 번째는 관습에 관한 것입니다 

```
sail
```

 명령 : 확장이 가능하지만 

```
sail
```

앞에서 설명한대로 스크립트는 프로세스가 약간 추하고 다소 엉망입니다. Sail의 관리자는 사용자가 자신의 바로 가기를 추가 할 수있는 명시적인 Bash 확장 점을 사용하거나

```
sail
```

 다른 파일과 함께 스크립트.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

둘째, Laravel 애플리케이션은 PHP의 개발 서버에서 제공됩니다. 여기서는 너무 자세히 설명하지 않겠습니다. 앞서 언급했듯이 [Supervisor](http://supervisord.org/?ref=hackernoon.com) 가 PHP 프로세스를

```
laravel.test
```

컨테이너; [이 라인](https://github.com/laravel/sail/blob/1.x/runtimes/8.0/supervisord.conf?ref=hackernoon.com#L5) 은 Supervisor가

```
php artisan serve
```

 명령은 내부에서 PHP의 개발 서버를 시작합니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

여기서 요점은 환경이 적절한 웹 서버 (예 : Nginx)를 사용하지 않는다는 것입니다. 즉, 로컬 도메인 이름을 쉽게 가질 수 없으며 설정에 HTTPS를 가져올 수도 없습니다. 이것은 빠른 프로토 타이핑에는 괜찮을 수 있지만 더 정교한 개발에는 아마도 그것들이 필요할 것입니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

세 번째 문제는 테스트 를 위해이 기사 [저장소](https://github.com/osteel/laravel-sail-extended?ref=hackernoon.com) 의 새 인스턴스를 복제하고 실행하는 동안 발견 한 문제입니다 . Sail을 기반으로 새로운 Laravel 프로젝트를 생성하는 프로세스는 잘 작동하지만 기존 프로젝트를 설치하고 실행하기위한 적절한 지침을 찾을 수 없었습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

당신은 실행할 수 없습니다 

```
./vendor/bin/sail up
```

 때문에 

```
vendor
```

폴더가 아직 존재하지 않습니다. 이 폴더를 만들려면 다음을 실행해야합니다.

```
composer install
```

; 하지만 프로젝트가 Docker 이미지에있는 종속성에 의존하지만 로컬 머신에는없는 경우

```
composer install
```

작동하지 않습니다. 당신은 실행할 수 있습니다

```
composer install --ignore-platform-reqs
```

대신, 그러나 그것은 옳지 않다고 생각합니다. 로컬 Composer 인스턴스와 투박한 명령에 의존하지 않고 기존 프로젝트를 설치하고 실행할 수있는 방법이 있어야합니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

마지막 문제는 Laravel Sail이 아닌 Docker 전체와 관련이 있으므로 별도의 범주에 속합니다. Docker 도로를 따라 가기 전에 신중하게 고려해야하며 자체 섹션이 필요합니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

## 오두막의 고래

지금까지 대화에서 빠진 것으로 보이는 한 가지 주요 경고는 성능과 관련이 있습니다. 이것이 Linux 사용자에게는 영향을 미치지 않지만 시스템에서 Docker Desktop을 실행하면 특히 macOS에서로드 시간이 길어질 가능성이 높습니다 ( Windows에서 [WSL 2](https://docs.docker.com/docker-for-windows/wsl/?ref=hackernoon.com) 를 사용 하면 속도 저하를 완화 할 수 있음).

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

바로 지금 직접 확인할 수 있습니다. Docker Desktop을 사용 중이고 Sail이 실행 중이면 [Laravel 환영 페이지를](http://localhost/?ref=hackernoon.com) 로드 해보십시오 . 지연이있을 수 있습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

여기서 너무 자세히 설명하지는 않겠지 만, 그 이유는 기본적으로 마운트 된 로컬 디렉토리에서 잘 수행되지 않는 호스트의 기본 파일 시스템에서 비롯됩니다. 우리가 본 것처럼 이것이 Laravel Sail이 Laravel 애플리케이션의 컨테이너에서 애플리케이션의 소스 코드를 가져 오는 방법이므로 속도가 느립니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

Docker 컨테이너에서 PHP를 실행하는 대신 개발자가 로컬 머신 (예 : [Valet을](https://laravel.com/docs/valet?ref=hackernoon.com) 통해 )에서 실행하는 동시에 MySQL 또는 MongoDB와 같은 서비스 인스턴스를 제공하므로 Takeout과 같은 접근 방식이 의미 가 있습니다. 성능 저하없이 편리합니다. 하지만 Sail처럼 Docker 컨테이너를 통해 PHP를 실행하기로 선택한 순간부터 Takeout의 부가가치는 감소한다고 생각합니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

이러한 성능 문제를 완화하는 전략이 있지만 Laravel 문서에는 성능이 전혀 문제가 될 수 있다는 사실은 말할 것도없고 놀라운 사실을 발견했습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

즉, 성능이있는 그대로 충분히 편안 할 수 있습니다. 저는 macOS에서 Docker Desktop을 사용하지만 몇 년 동안 괜찮 았습니다. 결론은 Laravel Sail 또는 다른 어떤 것이 든 컨테이너에서 PHP를 실행하는 솔루션으로 전체 설정을 이동하기 전에이 측면을 신중하게 고려해야한다는 것입니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

그러나 일단 그 결정을 내리고 다른 문제가 결국 해결되는지 여부에 따라이 기사의 주요 아이디어는 동일하게 유지됩니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

## Laravel Sail은 필요하지 않습니다.

Laravel Sail을 개발 환경으로 사용하여 실질적인 구축을 고려하고 있다면 조만간 확장해야합니다. Dockerfiles를 뒤지고 결국에는 직접 작성하게 될 것입니다. 일부 서비스를 추가해야

```
docker-compose.yml
```

; 몇 가지 사용자 지정 Bash 명령을 던질 수도 있습니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

일단 거기에 도착하면 스스로에게 물어봐야 할 한 가지 질문이 있습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

> 나만의 설정을 구축하지 못하게하는 이유는 무엇입니까?

대답은 *아무것도 아닙니다* . Laravel Sail을 확장하는 것이 편안하다고 느끼면 이미 자신의 환경을 구축하는 데 필요한 지식을 가지고있는 것입니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

생각해보십시오. 

```
docker-compose.yml
```

파일은 Laravel Sail에만 국한되지 않으며 Docker Compose가 작동하는 방식입니다. Dockerfile도 마찬가지입니다. 표준 Docker 항목입니다. Bash 레이어? 그게 전부입니다. 일부 Bash 코드는 보시다시피 그렇게 복잡하지 않습니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

그렇다면 왜 인위적으로 Sail의 제약 내에서 자신을 제지할까요?

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

그리고 더 중요한 것은 왜 Laravel의 맥락에서 Docker를 사용하는 데 자신을 제한 하는가?

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

애플리케이션이 모 놀리 식으로 시작될 수 있지만 항상 그렇지는 않습니다. 아마도 별도의 프런트 엔드가 있고 Laravel을 API 레이어로 사용합니다. 이 경우 개발 환경에서 둘 다 관리하기를 원할 수 있습니다. 동시에 실행하여 스테이징 환경이나 프로덕션에서하는 것처럼 서로 상호 작용합니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

전체 애플리케이션이 [monorepo 인](https://en.wikipedia.org/wiki/Monorepo?ref=hackernoon.com) 경우 Docker 구성 및 Bash 스크립트가 프로젝트의 루트에있을 수 있으며 프런트 엔드 및 백엔드 애플리케이션을 별도의 하위 폴더 (예 :

```
src
```

 폴더.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

해당 트리보기는 다음과 같습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

```
my-app/
├── bash-script
├── docker-compose.yml
└── src/
    ├── backend/
    │   └── Dockerfile
    └── frontend/
        └── Dockerfile
```

그만큼 

```
docker-compose.yml
```

 file은 두 개의 서비스를 선언합니다. 하나는 백엔드 용이고 다른 하나는 프런트 엔드 용입니다. 둘 다 각각의 Dockerfile을 가리 킵니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

백엔드와 프런트 엔드가 다른 저장소에있는 경우 Docker 개발 환경을 독점적으로 포함하는 세 번째 저장소를 만들 수 있습니다. 그냥 *자식-무시* 을

```
src
```

 폴더를 열고 Bash 스크립트를 완성하여 일반적으로 수동으로 실행하는 것과 동일한 명령을 사용하여 두 애플리케이션 저장소를 모두 가져 오도록합니다.



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

프로젝트가 라 라벨 모노리스 인 경우에도 이러한 종류의 구조는 개발 관련 파일을 나머지 소스 코드와 혼합하는 것보다 이미 깨끗합니다. 또한 애플리케이션이 커지고 Laravel 외에 다른 구성 요소가 필요한 경우 이미이를 지원할 수있는 좋은 위치에 있습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

확장을 위해 Laravel Sail을 이해하려는 노력을 *기울인 후에는 Laravel이 방정식의 일부인지 여부에 관계없이* 자체 개발 환경을 구축하는 데 *방해가되지 않습니다* . 맞습니다. 모든 것을위한 맞춤형 Docker 기반 환경을 구축 할 수 있습니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

Laravel이 스택의 일부인 경우 아직 직접 작성하는 데 익숙하지 않은 경우 Sail의 Dockerfile을 재사용하는 데 방해가되는 것은 없습니다. 결국 그들은 이미 Laravel에 최적화되어 있습니다. 마찬가지로 Sail에서 영감을 얻을 수 있습니다.

```
docker-compose.yml
```

 도움이된다면 파일을 제출하십시오



![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

## 결론

오해하지 마세요 : Laravel Sail은 많은 일을하고 있으며, 그러한 확고한 배우가 로컬 개발을 위해 Docker를 채택하는 것을 보니 기쁩니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

우리는 우리의 프레임 워크가 효율적이고 검증 된 방식으로 원하는 결과를 달성하기위한 지침을 제공하기 때문에 우리의 프레임 워크를 좋아하며, 사용자가이를 기반으로 구축 할 수있는 환경을 제공하려는 것은 자연스러운 일입니다. 그러나 Sail이 우연히 우리에게 보여준 한 가지는 이것이 더 이상 프레임 워크의 명령의 일부가 될 필요가 없다는 것입니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

Truman의 범선이 바다에 대한 두려움을 극복하고 그가 살고있는 인공 세계의 가장자리로 데려가는 데 도움이되는 것처럼 Sail은 Laravel의 경계와 그로부터 탈출 할 수있는 방법을 모두 보여줍니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

Sail이 오늘 귀하의 필요에 충분하거나 아직 자신의 길을 갈 준비가되지 않았다고 느낄 수 있습니다. 괜찮아. 그러나 Laravel은 항상 모 놀리 식 특성에 의해 제한 될 것이며 개발자로서 성장함에 따라 Laravel 애플리케이션이 더 큰 시스템의 단일 구성 요소가 될 날이 올 것이며 Sail은 더 이상 충분하지 않을 것입니다. 결국, 당신의 작은 범선은 칠해진 배경에 부딪 힐 것입니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

더 자세히 알아보고 싶지만 더 많은 지침이 필요하다고 생각되면 계속 진행해야 할 [주제에 대한 시리즈를](https://tech.osteel.me/posts/docker-for-local-web-development-introduction-why-should-you-care?ref=hackernoon.com) 게시 [했습니다](https://tech.osteel.me/posts/docker-for-local-web-development-introduction-why-should-you-care?ref=hackernoon.com) . Docker에 대한 사전 지식이 필요하지 않으며 웹 서버, HTTPS, 도메인 이름 및 기타 많은 사항을 다룹니다. 모든 답이있는 것은 아니지만 자신 만의 답을 찾을 수있는 곳으로 안내 할 것입니다.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

다음에 수행 할 작업은 전적으로 귀하에게 달려 있습니다. 당신을 기다리는 온 세상이 있다는 것을 알아 두세요.

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

> 트루먼은 주저합니다. 결국 그는 그것을 견딜 수 없을 것입니다. 카메라가 천천히 트루먼의 얼굴을 확대합니다.

> _TRUMAN : _ "당신이 보이지 않을 경우-좋은 오후, 좋은 저녁, 좋은 밤."

> 그는 문을 열고 사라졌습니다.

*이 이야기는 원래* [*tech.osteel.me에*](https://tech.osteel.me/posts/you-dont-need-laravel-sail?ref=hackernoon.com) *게시되었습니다* *.*

![img](https://hackernoon.com/emojis/heart.png)

![img](https://hackernoon.com/emojis/light.png)

![img](https://hackernoon.com/emojis/money.png)

![img](https://hackernoon.com/emojis/thumbs-down.png)

## 자원

- [Laravel Sail 문서](https://laravel.com/docs/sail?ref=hackernoon.com)
- [Laravel Sail 저장소](https://github.com/laravel/sail?ref=hackernoon.com)
- [이 기사의 저장소](https://github.com/osteel/laravel-sail-extended?ref=hackernoon.com)
- [Docker 허브](https://hub.docker.com/?ref=hackernoon.com)
- [Docker 문서](https://docs.docker.com/?ref=hackernoon.com)
- [Docker Compose 개요](https://docs.docker.com/compose/?ref=hackernoon.com)
- [Dockerfile 참조](https://docs.docker.com/engine/reference/builder/?ref=hackernoon.com)
- [컨테이너 란?](https://www.docker.com/resources/what-container?ref=hackernoon.com)
- [로컬 웹 개발 시리즈 용 Docker](https://tech.osteel.me/posts/docker-for-local-web-development-introduction-why-should-you-care?ref=hackernoon.com)