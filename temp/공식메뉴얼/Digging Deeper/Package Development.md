# Package Development

- Introduction
  - [A Note On Facades](https://laravel.com/docs/8.x/packages#a-note-on-facades)
- [Package Discovery](https://laravel.com/docs/8.x/packages#package-discovery)
- [Service Providers](https://laravel.com/docs/8.x/packages#service-providers)
- Resources
  - [Configuration](https://laravel.com/docs/8.x/packages#configuration)
  - [Migrations](https://laravel.com/docs/8.x/packages#migrations)
  - [Routes](https://laravel.com/docs/8.x/packages#routes)
  - [Translations](https://laravel.com/docs/8.x/packages#translations)
  - [Views](https://laravel.com/docs/8.x/packages#views)
  - [View Components](https://laravel.com/docs/8.x/packages#view-components)
- [Commands](https://laravel.com/docs/8.x/packages#commands)
- [Public Assets](https://laravel.com/docs/8.x/packages#public-assets)
- [Publishing File Groups](https://laravel.com/docs/8.x/packages#publishing-file-groups)



## [Introduction](https://laravel.com/docs/8.x/packages#introduction)

Packages are the primary way of adding functionality to Laravel. Packages might be anything from a great way to work with dates like [Carbon](https://github.com/briannesbitt/Carbon) or a package that allows you to associate files with Eloquent models like Spatie's [Laravel Media Library](https://github.com/spatie/laravel-medialibrary).

There are different types of packages. Some packages are stand-alone, meaning they work with any PHP framework. Carbon and PHPUnit are examples of stand-alone packages. Any of these packages may be used with Laravel by requiring them in your `composer.json` file.

On the other hand, other packages are specifically intended for use with Laravel. These packages may have routes, controllers, views, and configuration specifically intended to enhance a Laravel application. This guide primarily covers the development of those packages that are Laravel specific.



패키지는 Laravel에 기능을 추가하는 기본 방법입니다. 패키지는 [Carbon](https://github.com/briannesbitt/Carbon) 과 같은 날짜로 작업하는 훌륭한 방법 이나 Spatie의 [Laravel Media Library](https://github.com/spatie/laravel-medialibrary) 와 같은 Eloquent 모델과 파일을 연결할 수있는 패키지 일 수 있습니다 .

다양한 유형의 패키지가 있습니다. 일부 패키지는 독립형이므로 모든 PHP 프레임 워크에서 작동합니다. Carbon과 PHPUnit은 독립형 패키지의 예입니다. 이러한 패키지는 `composer.json`파일 에서 요구하여 라 라벨과 함께 사용할 수 있습니다 .

반면에 다른 패키지는 Laravel과 함께 사용하도록 특별히 고안되었습니다. 이러한 패키지에는 Laravel 애플리케이션을 향상시키기 위해 특별히 고안된 경로, 컨트롤러,보기 및 구성이있을 수 있습니다. 이 가이드는 주로 라 라벨 전용 패키지의 개발을 다룹니다.



### [A Note On Facades](https://laravel.com/docs/8.x/packages#a-note-on-facades)

When writing a Laravel application, it generally does not matter if you use contracts or facades since both provide essentially equal levels of testability. However, when writing packages, your package will not typically have access to all of Laravel's testing helpers. If you would like to be able to write your package tests as if the package were installed inside a typical Laravel application, you may use the [Orchestral Testbench](https://github.com/orchestral/testbench) package.



Laravel 애플리케이션을 작성할 때 계약이나 파사드를 사용하는 것은 본질적으로 동일한 수준의 테스트 가능성을 제공하므로 일반적으로 중요하지 않습니다. 

그러나 패키지를 작성할 때 패키지는 일반적으로 Laravel의 모든 테스트 helpers에 액세스 할 수 없습니다. 

패키지가 일반적인 Laravel 애플리케이션에 설치된 것처럼 패키지 테스트를 작성하고 싶다면 [Orchestral Testbench](https://github.com/orchestral/testbench) 패키지를 사용할 수 있습니다 .



## [Package Discovery](https://laravel.com/docs/8.x/packages#package-discovery)

In a Laravel application's `config/app.php` configuration file, the `providers` option defines a list of service providers that should be loaded by Laravel. When someone installs your package, you will typically want your service provider to be included in this list. Instead of requiring users to manually add your service provider to the list, you may define the provider in the `extra` section of your package's `composer.json` file. In addition to service providers, you may also list any [facades](https://laravel.com/docs/8.x/facades) you would like to be registered:

Laravel 애플리케이션의 `config/app.php`구성 파일 에서이 `providers`옵션은 Laravel이 로드해야하는 서비스 공급자 목록을 정의합니다. 

누군가 패키지를 설치할 때 일반적으로 서비스 제공 업체가이 목록에 포함되기를 원할 것입니다. 

사용자가 서비스 공급자를 목록에 수동으로 추가하도록 요구하는 대신 `extra`패키지 `composer.json`파일 섹션 에서 공급자를 정의 할 수 있습니다. 

서비스 제공 업체 외에도 등록하고 싶은 [파사드](https://laravel.com/docs/8.x/facades) 를 나열 할 수 있습니다 .

```php
"extra": {
    "laravel": {
        "providers": [
            "Barryvdh\\Debugbar\\ServiceProvider"
        ],
        "aliases": {
            "Debugbar": "Barryvdh\\Debugbar\\Facade"
        }
    }
},
```

Once your package has been configured for discovery, Laravel will automatically register its service providers and facades when it is installed, creating a convenient installation experience for your package's users.

패키지가 검색을 위해 구성되면 Laravel은 설치시 서비스 공급자와 파사드를 자동으로 등록하여 패키지 사용자에게 편리한 설치 경험을 제공합니다.



### [Opting Out Of Package Discovery](https://laravel.com/docs/8.x/packages#opting-out-of-package-discovery)

If you are the consumer of a package and would like to disable package discovery for a package, you may list the package name in the `extra` section of your application's `composer.json` file:

패키지 소비자이고 패키지에 대한 패키지 검색을 비활성화하려면 `extra`응용 프로그램 `composer.json`파일 섹션에 패키지 이름을 나열 할 수 있습니다.

```php
"extra": {
    "laravel": {
        "dont-discover": [
            "barryvdh/laravel-debugbar"
        ]
    }
},
```

You may disable package discovery for all packages using the `*` character inside of your application's `dont-discover` directive:

`*`애플리케이션 `dont-discover`지시문 내부의 문자를 사용하여 모든 패키지에 대한 패키지 검색을 비활성화 할 수 있습니다 .

```php
"extra": {
    "laravel": {
        "dont-discover": [
            "*"
        ]
    }
},
```



## [Service Providers](https://laravel.com/docs/8.x/packages#service-providers)

[Service providers](https://laravel.com/docs/8.x/providers) are the connection point between your package and Laravel. A service provider is responsible for binding things into Laravel's [service container](https://laravel.com/docs/8.x/container) and informing Laravel where to load package resources such as views, configuration, and localization files.

A service provider extends the `Illuminate\Support\ServiceProvider` class and contains two methods: `register` and `boot`. The base `ServiceProvider` class is located in the `illuminate/support` Composer package, which you should add to your own package's dependencies. To learn more about the structure and purpose of service providers, check out [their documentation](https://laravel.com/docs/8.x/providers).

[서비스 제공 업체](https://laravel.com/docs/8.x/providers) 는 패키지와 Laravel 간의 연결 지점입니다. 서비스 제공자는 사물을 Laravel의 [서비스 컨테이너](https://laravel.com/docs/8.x/container) 에 바인딩 하고보기, 구성 및 현지화 파일과 같은 패키지 리소스를로드 할 위치를 Laravel에 알릴 책임이 있습니다.

서비스 제공자는 `Illuminate\Support\ServiceProvider`클래스를 확장하고 두 개의 메소드를 포함합니다 : `register`및 `boot`. 기본 `ServiceProvider`클래스는 `illuminate/support`Composer 패키지에 있으며 패키지의 종속성에 추가해야합니다. 서비스 제공 업체의 구조와 목적에 대해 자세히 알아 보려면 [해당 문서를](https://laravel.com/docs/8.x/providers) 확인하세요 .



## [Resources](https://laravel.com/docs/8.x/packages#resources)



### [Configuration](https://laravel.com/docs/8.x/packages#configuration)

Typically, you will need to publish your package's configuration file to the application's `config` directory. This will allow users of your package to easily override your default configuration options. To allow your configuration files to be published, call the `publishes` method from the `boot` method of your service provider:

일반적으로 패키지의 구성 파일을 응용 프로그램의 `config`디렉터리 에 게시해야합니다 . 이렇게하면 패키지 사용자가 기본 구성 옵션을 쉽게 재정의 할 수 있습니다. 구성 파일을 게시하려면 서비스 제공 업체 의 `publishes`메소드에서 메소드를 호출하십시오 `boot`.

```php
/**
 * Bootstrap any package services.
 *
 * @return void
 */
public function boot()
{
    $this->publishes([
        __DIR__.'/../config/courier.php' => config_path('courier.php'),
    ]);
}
```

Now, when users of your package execute Laravel's `vendor:publish` command, your file will be copied to the specified publish location. Once your configuration has been published, its values may be accessed like any other configuration file:

이제 패키지 사용자가 Laravel의 `vendor:publish`명령을 실행하면 파일이 지정된 게시 위치로 복사됩니다. 구성이 게시되면 다른 구성 파일처럼 해당 값에 액세스 할 수 있습니다.

```php
$value = config('courier.option');
```

> You should not define closures in your configuration files. They can not be serialized correctly when users execute the `config:cache` Artisan command.
>
> 구성 파일에 클로저를 정의해서는 안됩니다. 사용자가 `config:cache`Artisan 명령을 실행할 때 올바르게 직렬화 될 수 없습니다 .



#### [Default Package Configuration](https://laravel.com/docs/8.x/packages#default-package-configuration)

You may also merge your own package configuration file with the application's published copy. This will allow your users to define only the options they actually want to override in the published copy of the configuration file. To merge the configuration file values, use the `mergeConfigFrom` method within your service provider's `register` method.

The `mergeConfigFrom` method accepts the path to your package's configuration file as its first argument and the name of the application's copy of the configuration file as its second argument:

자신의 패키지 구성 파일을 애플리케이션의 게시 된 사본과 병합 할 수도 있습니다. 이렇게하면 사용자가 게시 된 구성 파일 사본에서 실제로 재정의하려는 옵션 만 정의 할 수 있습니다. 구성 파일 값을 병합하려면 `mergeConfigFrom`서비스 제공 업체의 `register`메소드 내 에서 메소드를 사용하십시오 .

이 `mergeConfigFrom`메서드는 패키지의 구성 파일 경로를 첫 번째 인수로 받아들이고 응용 프로그램의 구성 파일 복사본 이름을 두 번째 인수로받습니다.

```php
/**
 * Register any application services.
 *
 * @return void
 */
public function register()
{
    $this->mergeConfigFrom(
        __DIR__.'/../config/courier.php', 'courier'
    );
}
```

> ![img](https://laravel.com/img/callouts/exclamation.min.svg)
>
> 
>
> This method only merges the first level of the configuration array. If your users partially define a multi-dimensional configuration array, the missing options will not be merged.
>
> 이 방법은 구성 배열의 첫 번째 수준 만 병합합니다. 사용자가 다차원 구성 배열을 부분적으로 정의하는 경우 누락 된 옵션이 병합되지 않습니다.



### [Routes](https://laravel.com/docs/8.x/packages#routes)

If your package contains routes, you may load them using the `loadRoutesFrom` method. This method will automatically determine if the application's routes are cached and will not load your routes file if the routes have already been cached:

패키지에 경로가 포함 된 경우 `loadRoutesFrom`메서드를 사용하여로드 할 수 있습니다 . 

이 메서드는 애플리케이션의 경로가 캐시되었는지 여부를 자동으로 확인하고 경로가 이미 캐시 된 경우 경로 파일을로드하지 않습니다.

```php
/**
 * Bootstrap any package services.
 *
 * @return void
 */
public function boot()
{
    $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
}
```



### [Migrations](https://laravel.com/docs/8.x/packages#migrations)

If your package contains [database migrations](https://laravel.com/docs/8.x/migrations), you may use the `loadMigrationsFrom` method to inform Laravel how to load them. The `loadMigrationsFrom` method accepts the path to your package's migrations as its only argument:

패키지에 [데이터베이스 마이그레이션이](https://laravel.com/docs/8.x/migrations) 포함되어있는 `loadMigrationsFrom`경우이 메서드를 사용하여 Laravel에로드 방법을 알릴 수 있습니다. 이 `loadMigrationsFrom`메서드는 패키지 마이그레이션 경로를 유일한 인수로 받아들입니다.

```php
/**
```

```php
/**
 * Bootstrap any package services.
 *
 * @return void
 */
public function boot()
{
    $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
}
```

Once your package's migrations have been registered, they will automatically be run when the `php artisan migrate` command is executed. You do not need to export them to the application's `database/migrations` directory.

패키지 마이그레이션이 등록되면 `php artisan migrate`명령이 실행될 때 자동으로 실행됩니다 . 응용 프로그램의 `database/migrations`디렉토리 로 내보낼 필요가 없습니다 .



### [Translations](https://laravel.com/docs/8.x/packages#translations)

If your package contains [translation files](https://laravel.com/docs/8.x/localization), you may use the `loadTranslationsFrom` method to inform Laravel how to load them. For example, if your package is named `courier`, you should add the following to your service provider's `boot` method:

패키지에 [번역 파일이](https://laravel.com/docs/8.x/localization) 포함되어있는 경우 `loadTranslationsFrom`메서드를 사용하여 [파일](https://laravel.com/docs/8.x/localization) 을로드하는 방법을 Laravel에 알릴 수 있습니다. 예를 들어 패키지 이름이 `courier`이면 서비스 제공 업체의 `boot`메서드에 다음을 추가해야합니다 .

```php
/**
 * Bootstrap any package services.
 *
 * @return void
 */
public function boot()
{
    $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'courier');
}
```

Package translations are referenced using the `package::file.line` syntax convention. So, you may load the `courier` package's `welcome` line from the `messages` file like so:

패키지 번역은 `package::file.line`구문 규칙을 사용하여 참조됩니다 . 따라서 다음 과 같이 파일 에서 `courier`패키지 `welcome`행을 로드 할 수 있습니다 `messages`.

```php
echo trans('courier::messages.welcome');
```



#### [Publishing Translations](https://laravel.com/docs/8.x/packages#publishing-translations)

If you would like to publish your package's translations to the application's `resources/lang/vendor` directory, you may use the service provider's `publishes` method. The `publishes` method accepts an array of package paths and their desired publish locations. For example, to publish the translation files for the `courier` package, you may do the following:

패키지의 번역을 응용 프로그램의 `resources/lang/vendor`디렉토리 에 게시 하려면 서비스 공급자의 `publishes`방법을 사용할 수 있습니다 . 이 `publishes`메서드는 패키지 경로 배열과 원하는 게시 위치를 허용합니다. 예를 들어 `courier`패키지 의 번역 파일을 게시 하려면 다음을 수행 할 수 있습니다.

```php
/**
 * Bootstrap any package services.
 *
 * @return void
 */
public function boot()
{
    $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'courier');

    $this->publishes([
        __DIR__.'/../resources/lang' => resource_path('lang/vendor/courier'),
    ]);
}
```

Now, when users of your package execute Laravel's `vendor:publish` Artisan command, your package's translations will be published to the specified publish location.

이제 패키지 사용자가 Laravel의 `vendor:publish`Artisan 명령을 실행하면 패키지의 번역이 지정된 게시 위치에 게시됩니다.



### [Views](https://laravel.com/docs/8.x/packages#views)

To register your package's [views](https://laravel.com/docs/8.x/views) with Laravel, you need to tell Laravel where the views are located. You may do this using the service provider's `loadViewsFrom` method. The `loadViewsFrom` method accepts two arguments: the path to your view templates and your package's name. For example, if your package's name is `courier`, you would add the following to your service provider's `boot` method:

패키지의 [뷰](https://laravel.com/docs/8.x/views) 를 Laravel에 등록하려면 뷰가 어디에 있는지 Laravel에 알려야합니다. 서비스 제공 업체의 `loadViewsFrom`방법을 사용하여이 작업을 수행 할 수 있습니다 . 이 `loadViewsFrom`메서드는 뷰 템플릿 경로와 패키지 이름의 두 가지 인수를받습니다. 예를 들어 패키지 이름이 `courier`이면 서비스 제공 업체의 `boot`메서드에 다음을 추가합니다 .

```php
/**
 * Bootstrap any package services.
 *
 * @return void
 */
public function boot()
{
    $this->loadViewsFrom(__DIR__.'/../resources/views', 'courier');
}
```

Package views are referenced using the `package::view` syntax convention. So, once your view path is registered in a service provider, you may load the `admin` view from the `courier` package like so:

패키지보기는 `package::view`구문 규칙을 사용하여 참조됩니다 . 따라서 뷰 경로가 서비스 공급자에 등록되면 다음 과 같이 패키지 에서 `admin`뷰를 로드 할 수 있습니다 `courier`.

```php
Route::get('/dashboard', function () {
    return view('courier::dashboard');
});
```



#### [Overriding Package Views](https://laravel.com/docs/8.x/packages#overriding-package-views)

When you use the `loadViewsFrom` method, Laravel actually registers two locations for your views: the application's `resources/views/vendor` directory and the directory you specify. So, using the `courier` package as an example, Laravel will first check if a custom version of the view has been placed in the `resources/views/vendor/courier` directory by the developer. Then, if the view has not been customized, Laravel will search the package view directory you specified in your call to `loadViewsFrom`. This makes it easy for package users to customize / override your package's views.

이 `loadViewsFrom`메서드 를 사용할 때 Laravel은 실제로 뷰에 대해 두 위치, 즉 애플리케이션의 `resources/views/vendor`디렉터리와 사용자가 지정한 디렉터리를 등록합니다. 따라서 `courier`패키지를 예로 들어 라 라벨은 먼저 개발자가 사용자 정의 버전의 뷰를 `resources/views/vendor/courier`디렉토리에 배치했는지 확인합니다 . 그런 다음 뷰가 사용자 정의되지 않은 경우 Laravel은 호출에서 지정한 패키지 뷰 디렉토리를 검색합니다 `loadViewsFrom`. 이렇게하면 패키지 사용자가 패키지보기를 쉽게 사용자 지정 / 무시할 수 있습니다.



#### [Publishing Views](https://laravel.com/docs/8.x/packages#publishing-views)

If you would like to make your views available for publishing to the application's `resources/views/vendor` directory, you may use the service provider's `publishes` method. The `publishes` method accepts an array of package view paths and their desired publish locations:

보기를 응용 프로그램의 `resources/views/vendor`디렉토리 에 게시 할 수 있도록하려면 서비스 공급자의 `publishes`방법을 사용할 수 있습니다 . 이 `publishes`메서드는 패키지보기 경로 배열과 원하는 게시 위치를 허용합니다.

```php
/**
 * Bootstrap the package services.
 *
 * @return void
 */
public function boot()
{
    $this->loadViewsFrom(__DIR__.'/../resources/views', 'courier');

    $this->publishes([
        __DIR__.'/../resources/views' => resource_path('views/vendor/courier'),
    ]);
}
```

Now, when users of your package execute Laravel's `vendor:publish` Artisan command, your package's views will be copied to the specified publish location.

이제 패키지 사용자가 Laravel의 `vendor:publish`Artisan 명령을 실행하면 패키지의 뷰가 지정된 게시 위치로 복사됩니다.



### [View Components](https://laravel.com/docs/8.x/packages#view-components)

If your package contains [view components](https://laravel.com/docs/8.x/blade#components), you may use the `loadViewComponentsAs` method to inform Laravel how to load them. The `loadViewComponentsAs` method accepts two arguments: the tag prefix for your view components and an array of your view component class names. For example, if your package's prefix is `courier` and you have `Alert` and `Button` view components, you would add the following to your service provider's `boot` method:

패키지에 [뷰 구성 요소](https://laravel.com/docs/8.x/blade#components) 가 포함되어있는 경우 `loadViewComponentsAs`메서드를 사용하여 Laravel에로드 방법을 알릴 수 있습니다. 

이 `loadViewComponentsAs`메서드는 뷰 구성 요소의 태그 접두사와 뷰 구성 요소 클래스 이름의 배열이라는 두 가지 인수를 허용합니다. 

예를 들어, 패키지의 접두사가 `courier`이고 구성 요소 가 `Alert`있고 `Button`구성 요소를 볼 경우 서비스 공급자의 `boot`메서드에 다음을 추가합니다 .

```php
use Courier\Components\Alert;
use Courier\Components\Button;

/**
 * Bootstrap any package services.
 *
 * @return void
 */
public function boot()
{
    $this->loadViewComponentsAs('courier', [
        Alert::class,
        Button::class,
    ]);
}
```

Once your view components are registered in a service provider, you may reference them in your view like so:

뷰 구성 요소가 서비스 공급자에 등록되면 다음과 같이 뷰에서 참조 할 수 있습니다.

```php
<x-courier-alert />

<x-courier-button />
```



#### [Anonymous Components](https://laravel.com/docs/8.x/packages#anonymous-components)

If your package contains anonymous components, they must be placed within a `components` directory of your package's "views" directory (as specified by `loadViewsFrom`). Then, you may render them by prefixing the component name with the package's view namespace:

패키지에 익명 구성 요소가 포함되어있는 경우 `components`패키지의 "views"디렉토리 (에서 지정한대로 `loadViewsFrom`)에 배치해야합니다 . 그런 다음 구성 요소 이름 앞에 패키지의 뷰 네임 스페이스를 추가하여 렌더링 할 수 있습니다.

```php
<x-courier::alert />
```



## [Commands](https://laravel.com/docs/8.x/packages#commands)

To register your package's Artisan commands with Laravel, you may use the `commands` method. This method expects an array of command class names. Once the commands have been registered, you may execute them using the [Artisan CLI](https://laravel.com/docs/8.x/artisan):

패키지의 Artisan 명령을 Laravel에 등록하려면 `commands`메서드를 사용할 수 있습니다 . 

이 메소드는 명령 클래스 이름의 배열을 예상합니다. 

명령이 등록되면 [Artisan CLI를](https://laravel.com/docs/8.x/artisan) 사용하여 실행할 수 있습니다 .

```php
use Courier\Console\Commands\InstallCommand;
use Courier\Console\Commands\NetworkCommand;

/**
 * Bootstrap any package services.
 *
 * @return void
 */
public function boot()
{
    if ($this->app->runningInConsole()) {
        $this->commands([
            InstallCommand::class,
            NetworkCommand::class,
        ]);
    }
}
```



## [Public Assets](https://laravel.com/docs/8.x/packages#public-assets)

Your package may have assets such as JavaScript, CSS, and images. To publish these assets to the application's `public` directory, use the service provider's `publishes` method. In this example, we will also add a `public` asset group tag, which may be used to easily publish groups of related assets:

패키지에는 JavaScript, CSS 및 이미지와 같은 자산이있을 수 있습니다. 이러한 자산을 애플리케이션의 `public`디렉토리에 게시하려면 서비스 공급자의 `publishes`방법을 사용하십시오 . 이 예에서는 `public`관련 자산 그룹을 쉽게 게시하는 데 사용할 수 있는 자산 그룹 태그 도 추가합니다 .



```php
/**
 * Bootstrap any package services.
 *
 * @return void
 */
public function boot()
{
    $this->publishes([
        __DIR__.'/../public' => public_path('vendor/courier'),
    ], 'public');
}
```

Now, when your package's users execute the `vendor:publish` command, your assets will be copied to the specified publish location. Since users will typically need to overwrite the assets every time the package is updated, you may use the `--force` flag:

이제 패키지의 사용자가 `vendor:publish`명령을 실행하면 자산이 지정된 게시 위치로 복사됩니다. 일반적으로 사용자는 패키지가 업데이트 될 때마다 자산을 덮어 써야하므로 다음 `--force`플래그를 사용할 수 있습니다 .

```php
php artisan vendor:publish --tag=public --force
```



## [Publishing File Groups](https://laravel.com/docs/8.x/packages#publishing-file-groups)

You may want to publish groups of package assets and resources separately. For instance, you might want to allow your users to publish your package's configuration files without being forced to publish your package's assets. You may do this by "tagging" them when calling the `publishes` method from a package's service provider. For example, let's use tags to define two publish groups (`config` and `migrations`) in the `boot` method of a package's service provider:

패키지 자산 및 리소스 그룹을 개별적으로 게시 할 수 있습니다. 예를 들어 사용자가 패키지의 자산을 게시하지 않고도 패키지의 구성 파일을 게시하도록 허용 할 수 있습니다. `publishes`패키지의 서비스 제공 업체에서 메소드를 호출 할 때 "태그"를 지정하여이를 수행 할 수 있습니다 . 예를 들어 태그를 사용 하여 패키지 서비스 제공 업체의 메소드 에서 두 개의 게시 그룹 ( `config`및 `migrations`) 을 정의 해 보겠습니다 `boot`.

```php
/**
 * Bootstrap any package services.
 *
 * @return void
 */
public function boot()
{
    $this->publishes([
        __DIR__.'/../config/package.php' => config_path('package.php')
    ], 'config');

    $this->publishes([
        __DIR__.'/../database/migrations/' => database_path('migrations')
    ], 'migrations');
}
```

Now your users may publish these groups separately by referencing their tag when executing the `vendor:publish` command:

이제 사용자는 `vendor:publish`명령을 실행할 때 태그를 참조하여 이러한 그룹을 별도로 게시 할 수 있습니다 .

```php
php artisan vendor:publish --tag=config
```