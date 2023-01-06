# Starter Kits

- [Introduction](https://laravel.com/docs/8.x/starter-kits#introduction)
- Laravel Breeze
  - [Installation](https://laravel.com/docs/8.x/starter-kits#laravel-breeze-installation)
- [Laravel Jetstream](https://laravel.com/docs/8.x/starter-kits#laravel-jetstream)



## [Introduction](https://laravel.com/docs/8.x/starter-kits#introduction)

To give you a head start building your new Laravel application, we are happy to offer authentication and application starter kits. These kits automatically scaffold your application with the routes, controllers, and views you need to register and authenticate your application's users.

새로운 Laravel 애플리케이션을보다 빠르게 구축 할 수 있도록 인증 및 애플리케이션 스타터 키트를 제공하게되어 기쁘게 생각합니다. 이 키트는 애플리케이션의 사용자를 등록하고 인증하는 데 필요한 경로, 컨트롤러 및보기로 애플리케이션을 자동으로 스캐 폴드합니다.



While you are welcome to use these starter kits, they are not required.

You are free to build your own application from the ground up by simply installing a fresh copy of Laravel. 

Either way, we know you will build something great!

이 스타터 킷 사용을 환영하지만 필수는 아닙니다.

 Laravel의 새로운 사본을 설치하기 만하면 처음부터 자신 만의 애플리케이션을 구축 할 수 있습니다. 

어느 쪽이든, 우리는 당신이 훌륭한 것을 만들 것임을 압니다!



## [Laravel Breeze](https://laravel.com/docs/8.x/starter-kits#laravel-breeze)

Laravel Breeze is a minimal, simple implementation of all of Laravel's [authentication features](https://laravel.com/docs/8.x/authentication), including login, registration, password reset, email verification, and password confirmation.

 Laravel Breeze's default view layer is made up of simple [Blade templates](https://laravel.com/docs/8.x/blade) styled with [Tailwind CSS](https://tailwindcss.com/). 

Breeze provides a wonderful starting point for beginning a fresh Laravel application.



Laravel Breeze는 로그인, 등록, 비밀번호 재설정, 이메일 확인 및 비밀번호 확인을 포함하여 Laravel의 모든 [인증 기능을](https://laravel.com/docs/8.x/authentication) 최소한으로 간단하게 구현 합니다. 

Laravel Breeze의 기본 뷰 레이어는 [Tailwind CSS](https://tailwindcss.com/) 스타일 의 간단한 [블레이드 템플릿](https://laravel.com/docs/8.x/blade) 으로 구성 됩니다. 

Breeze는 새로운 Laravel 애플리케이션을 시작하기위한 훌륭한 시작점을 제공합니다.



### [Installation](https://laravel.com/docs/8.x/starter-kits#laravel-breeze-installation)

First, you should [create a new Laravel application](https://laravel.com/docs/8.x/installation), configure your database, and run your [database migrations](https://laravel.com/docs/8.x/migrations):

먼저 [새로운 Laravel 애플리케이션을 만들고](https://laravel.com/docs/8.x/installation) 데이터베이스를 구성하고 [데이터베이스 마이그레이션을](https://laravel.com/docs/8.x/migrations) 실행해야 [합니다](https://laravel.com/docs/8.x/migrations) .



```bash
curl -s https://laravel.build/example-app | bash

cd example-app

php artisan migrate
```



Once you have created a new Laravel application, you may install Laravel Breeze using Composer:

새로운 Laravel 애플리케이션을 만든 후에는 Composer를 사용하여 Laravel Breeze를 설치할 수 있습니다.

```bash
composer require laravel/breeze --dev
```



After Composer has installed the Laravel Breeze package, you may run the `breeze:install` Artisan command. This command publishes the authentication views, routes, controllers, and other resources to your application. Laravel Breeze publishes all of its code to your application so that you have full control and visibility over its features and implementation. After Breeze is installed, you should also compile your assets so that your application's CSS file is available:

Composer가 Laravel Breeze 패키지를 설치 한 후 `breeze:install`Artisan 명령을 실행할 수 있습니다 . 

이 명령은 인증보기, 경로, 컨트롤러 및 기타 리소스를 애플리케이션에 게시합니다. 

Laravel Breeze는 모든 코드를 애플리케이션에 게시하므로 해당 기능과 구현을 완벽하게 제어하고 볼 수 있습니다. 

Breeze를 설치 한 후에는 애플리케이션의 CSS 파일을 사용할 수 있도록 자산(asset)도 컴파일해야합니다.

```bash
php artisan breeze:install

npm install

npm run dev

php artisan migrate
```

Next, you may navigate to your application's `/login` or `/register` URLs in your web browser. All of Breeze's routes are defined within the `routes/auth.php` file.

다음으로 웹 브라우저에서 애플리케이션 `/login`또는 `/register`URL로 이동할 수 있습니다 . 

Breeze의 모든 경로는 `routes/auth.php`파일 내에 정의 됩니다.

> ![img](https://laravel.com/img/callouts/lightbulb.min.svg)
>
> 
>
> To learn more about compiling your application's CSS and JavaScript, check out the [Laravel Mix documentation](https://laravel.com/docs/8.x/mix#running-mix).



#### [Breeze & Inertia](https://laravel.com/docs/8.x/starter-kits#breeze-and-inertia)

Laravel Breeze also offers an [Inertia.js](https://inertiajs.com/) frontend implementation powered by Vue. 

To use the Inertia stack, pass the `--inertia` option when executing the `breeze:install` Artisan command:

Laravel Breeze는 Vue로 구동되는 [Inertia.js](https://inertiajs.com/) 프런트 엔드 구현 도 제공합니다 .

 Inertia 스택을 사용하려면 Artisan 명령을 `--inertia`실행할 때 옵션을 전달하십시오 `breeze:install`

```bash
php artisan breeze:install --inertia

npm install

npm run dev

php artisan migrate
```



## [Laravel Jetstream](https://laravel.com/docs/8.x/starter-kits#laravel-jetstream)

While Laravel Breeze provides a simple and minimal starting point for building a Laravel application, Jetstream augments that functionality with more robust features and additional frontend technology stacks. **For those brand new to Laravel, we recommend learning the ropes with Laravel Breeze before graduating to Laravel Jetstream.**

Laravel Breeze는 Laravel 애플리케이션을 구축하기위한 간단하고 최소한의 시작점을 제공하지만 Jetstream은 보다 강력한 기능과 추가 프런트 엔드 기술 스택으로 해당 기능을 강화합니다.  

**Laravel을 처음 접하는 분들은 Laravel Jetstream으로 졸업하기 전에 Laravel Breeze로 로프를 배우는 것이 좋습니다.**



Jetstream provides a beautifully designed application scaffolding for Laravel and includes login, registration, email verification, two-factor authentication, session management, API support via Laravel Sanctum, and optional team management. Jetstream is designed using [Tailwind CSS](https://tailwindcss.com/) and offers your choice of [Livewire](https://laravel-livewire.com/) or [Inertia.js](https://inertiajs.com/) driven frontend scaffolding.

Complete documentation for installing Laravel Jetstream can be found within the [official Jetstream documentation](https://jetstream.laravel.com/2.x/introduction.html).



Jetstream은 Laravel 용으로 아름답게 설계된 애플리케이션 스캐 폴딩을 제공하며 로그인, 등록, 이메일 확인, 2 단계 인증, 세션 관리, Laravel Sanctum을 통한 API 지원 및 선택적 팀 관리를 포함합니다. 

Jetstream은 [Tailwind CSS를](https://tailwindcss.com/) 사용하여 설계되었으며 [Livewire](https://laravel-livewire.com/) 또는 [Inertia.js](https://inertiajs.com/) 기반 프런트 엔드 스캐 폴딩을 선택할 수 있습니다.

Laravel Jetstream 설치에 대한 전체 문서는 [공식 Jetstream 문서](https://jetstream.laravel.com/2.x/introduction.html) 에서 찾을 수 있습니다