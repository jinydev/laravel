# 설치



## [첫 번째 Laravel 프로젝트](https://laravel.com/docs/8.x/installation#your-first-laravel-project)

우리는 Laravel을 최대한 쉽게 시작할 수 있기를 바랍니다. 자신의 컴퓨터에서 라 라벨 프로젝트를 개발하고 실행하기위한 다양한 옵션이 있습니다. 나중에 이러한 옵션을 탐색하고 싶을 수 있지만 Laravel은 [Docker를](https://www.docker.com/) 사용하여 Laravel 프로젝트를 실행하기위한 내장 솔루션 인 [Sail을](https://laravel.com/docs/8.x/sail) 제공합니다 .

Docker는 로컬 컴퓨터에 설치된 소프트웨어 또는 구성을 방해하지 않는 작고 가벼운 "컨테이너"에서 애플리케이션과 서비스를 실행하기위한 도구입니다. 즉, 개인용 컴퓨터에서 웹 서버 및 데이터베이스와 같은 복잡한 개발 도구를 구성하거나 설정하는 것에 대해 걱정할 필요가 없습니다. 시작하려면 [Docker Desktop](https://www.docker.com/products/docker-desktop) 만 설치하면됩니다 .

Laravel Sail은 Laravel의 기본 Docker 구성과 상호 작용하기위한 경량 명령 줄 인터페이스입니다. Sail은 사전 Docker 경험 없이도 PHP, MySQL 및 Redis를 사용하여 Laravel 애플리케이션을 구축 할 수있는 훌륭한 출발점을 제공합니다.



> 이미 Docker 전문가입니까? 걱정하지 마세요! Sail에 관한 모든 것은 `docker-compose.yml`Laravel에 포함 된 파일을 사용하여 사용자 정의 할 수 있습니다 .



<br>



### Windows에서 시작하기



#### 1.WSL2 구성
다음으로 Linux 2 (WSL2) 용 Windows 하위 시스템이 설치되고 활성화되어 있는지 확인해야합니다. WSL을 사용하면 Windows 10에서 기본적으로 Linux 바이너리 실행 파일을 실행할 수 있습니다. 



> WSL2를 설치하고 활성화하는 방법에 대한 정보는 Microsoft의 [개발자 환경 설명서](https://docs.microsoft.com/en-us/windows/wsl/install-win10) 에서 찾을 수 있습니다 .



<br>



#### 2.도커설치

Windows 시스템에 새 Laravel 애플리케이션을 만들기 전에 [Docker Desktop](https://www.docker.com/products/docker-desktop) 을 설치해야합니다 . 



> WSL2를 설치하고 활성화 한 후 Docker Desktop이 [WSL2 백엔드를 사용하도록 구성되어](https://docs.docker.com/docker-for-windows/wsl/) 있는지 확인해야합니다 .



<br>



#### 3.프로젝트 시작

다음으로 첫 번째 Laravel 프로젝트를 만들 준비가되었습니다.  

시작 [Windows 터미널](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?rtc=1&activetab=pivot:overviewtab) 과는 WSL2 Linux 운영 체제에 대한 새로운 터미널 세션을 시작합니다. 다음으로 간단한 터미널 명령을 사용하여 새 Laravel 프로젝트를 생성 할 수 있습니다. 예를 들어 "example-app"이라는 디렉토리에 새 Laravel 애플리케이션을 생성하려면 터미널에서 다음 명령을 실행할 수 있습니다.

```nothing
curl -s https://laravel.build/example-app | bash
```

물론이 URL의 "example-app"을 원하는대로 변경할 수 있습니다. 



```
hojin@hojin1:~$ curl -s https://laravel.build/example-app | bash
Unable to find image 'laravelsail/php80-composer:latest' locally
latest: Pulling from laravelsail/php80-composer
852e50cd189d: Pull complete
...중간생략...
3043238335fb: Pull complete
Digest: sha256:b387b05f2d55d32d9ab1b861b4bc8347f75b36ca2b259231a3359118682dabad
Status: Downloaded newer image for laravelsail/php80-composer:latest

 _                               _
| |                             | |
| |     __ _ _ __ __ ___   _____| |
| |    / _` | '__/ _` \ \ / / _ \ |
| |___| (_| | | | (_| |\ V /  __/ |
|______\__,_|_|  \__,_| \_/ \___|_|

Warning: TTY mode requires /dev/tty to be read/writable.
    Creating a "laravel/laravel" project at "./example-app"
    Installing laravel/laravel (v8.5.14)
      - Downloading laravel/laravel (v8.5.14)
      - Installing laravel/laravel (v8.5.14): Extracting archive
    Created project in /opt/example-app
    > @php -r "file_exists('.env') || copy('.env.example', '.env');"
    Loading composer repositories with package information
    Updating dependencies
    Lock file operations: 105 installs, 0 updates, 0 removals
      - Locking asm89/stack-cors (v2.0.3)
 ...중간생략...
 95/95 [============================] 100%    74 package suggestions were added by new dependencies, use `composer suggest` to see details.
    Generating optimized autoload files
    > Illuminate\Foundation\ComposerScripts::postAutoloadDump
    > @php artisan package:discover --ansi
    Discovered Package: facade/ignition
Discovered Package: fideloper/proxy
Discovered Package: fruitcake/laravel-cors
Discovered Package: laravel/sail
Discovered Package: laravel/tinker
Discovered Package: nesbot/carbon
    Discovered Package: nunomaduro/collision
Package manifest generated successfully.
    74 packages you are using are looking for funding.
Use the `composer fund` command to find out more!
    > @php artisan key:generate --ansi
    Application key set successfully.

Application ready! Build something amazing.
Sail scaffolding installed successfully.

Please provide your password so we can make some final adjustments to your application's permissions.

[sudo] password for hojin:

Thank you! We hope you build something incredible. Dive in with: cd example-app && ./vendor/bin/sail up
```



Laravel 애플리케이션의 디렉토리는 명령을 실행 한 디렉토리 내에 생성됩니다.





프로젝트가 생성 된 후 애플리케이션 디렉토리로 이동하여 Laravel Sail을 시작할 수 있습니다. Laravel Sail은 Laravel의 기본 Docker 구성과 상호 작용하기위한 간단한 명령 줄 인터페이스를 제공합니다.

```nothing
cd example-app

./vendor/bin/sail up
```

Sail `up`명령을 처음 실행하면 Sail 의 애플리케이션 컨테이너가 컴퓨터에 빌드됩니다. 몇 분 정도 걸릴 수 있습니다.



```

```



 **걱정하지 마십시오. 이후 Sail을 시작하려는 시도가 훨씬 빨라질 것입니다.**

애플리케이션의 Docker 컨테이너가 시작되면 [http : // localhost](http://localhost/) 의 웹 브라우저에서 애플리케이션에 액세스 할 수 있습니다 .

> Laravel Sail에 대해 더 자세히 알아 보려면 [전체 문서를](https://laravel.com/docs/8.x/sail) 검토하십시오 .



>  종료: ctrl+z

<br>



#### 5.WSL2 내에서 개발

물론 WSL2 설치 내에서 생성 된 Laravel 애플리케이션 파일을 수정할 수 있어야합니다. 이를 위해서는 Microsoft의 [Visual Studio Code](https://code.visualstudio.com/) 편집기와 [원격 개발](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) 용 자사 확장을 사용하는 것이 좋습니다 .

이러한 도구가 설치되면 `code .`Windows 터미널을 사용하여 애플리케이션의 루트 디렉토리에서 명령을 실행하여 Laravel 프로젝트를 열 수 있습니다 .

