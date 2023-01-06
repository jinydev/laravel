# Views

- [Introduction](https://laravel.com/docs/8.x/views#introduction)
- Creating & Rendering Views
  - [Nested View Directories](https://laravel.com/docs/8.x/views#nested-view-directories)
  - [Creating The First Available View](https://laravel.com/docs/8.x/views#creating-the-first-available-view)
  - [Determining If A View Exists](https://laravel.com/docs/8.x/views#determining-if-a-view-exists)
- Passing Data To Views
  - [Sharing Data With All Views](https://laravel.com/docs/8.x/views#sharing-data-with-all-views)
- View Composers
  - [View Creators](https://laravel.com/docs/8.x/views#view-creators)
- [Optimizing Views](https://laravel.com/docs/8.x/views#optimizing-views)



## 1. [Introduction](https://laravel.com/docs/8.x/views#introduction)

Of course, it's not practical to return entire HTML documents strings directly from your routes and controllers. 

Thankfully, views provide a convenient way to place all of our HTML in separate files. Views separate your controller / application logic from your presentation logic and are stored in the `resources/views` directory. A simple view might look something like this:

물론 라우트와 컨트롤러에서 직접 전체 HTML 문서 문자열을 반환하는 것은 실용적이지 않습니다. 

고맙게도 뷰는 모든 HTML을 별도의 파일에 배치하는 편리한 방법을 제공합니다. 

뷰는 컨트롤러 / 애플리케이션 로직을 프리젠 테이션 로직과 분리하며 **`resources/views`디렉토리에 저장**됩니다 . 

간단한보기는 다음과 같습니다.

```html
<!-- View stored in resources/views/greeting.blade.php -->

<html>
    <body>
        <h1>Hello, {{ $name }}</h1>
    </body>
</html>
```

Since this view is stored at `resources/views/greeting.blade.php`, we may return it using the global `view` helper like so:

이 뷰는에 저장 되므로 다음과 같이 `resources/views/greeting.blade.php`전역 `view`도우미를 사용하여 반환 할 수 있습니다 .

```php
Route::get('/', function () {
    return view('greeting', ['name' => 'James']);
});
```

> Looking for more information on how to write Blade templates? Check out the full [Blade documentation](https://laravel.com/docs/8.x/blade) to get started.
>
> 블레이드 템플릿 작성 방법에 대한 자세한 정보를 찾고 계십니까? 시작 하려면 전체 [블레이드 문서](https://laravel.com/docs/8.x/blade) 를 확인하십시오 .



## 2.[Creating & Rendering Views](https://laravel.com/docs/8.x/views#creating-and-rendering-views)

You may create a view by placing a file with the `.blade.php` extension in your application's `resources/views` directory. 

The `.blade.php` extension informs the framework that the file contains a [Blade template](https://laravel.com/docs/8.x/blade). 

Blade templates contain HTML as well as Blade directives that allow you to easily echo values, create "if" statements, iterate over data, and more.

Once you have created a view, you may return it from one of your application's routes or controllers using the global `view` helper:

`.blade.php`애플리케이션 `resources/views`디렉토리에 확장자가 있는 파일을 배치하여 보기를 작성할 수 있습니다 . 

`.blade.php`확장 파일이 포함 된 프레임 워크 알려 [블레이드 템플릿을](https://laravel.com/docs/8.x/blade) . 

블레이드 템플릿에는 값을 쉽게 에코하고, "if"문을 만들고, 데이터를 반복하는 등의 작업을 수행 할 수있는 **블레이드 지시문**과 HTML이 포함되어 있습니다.

뷰를 생성 한 후에는 전역 `view`도우미를 사용하여 애플리케이션의 경로 또는 컨트롤러 중 하나에서 뷰를 반환 할 수 있습니다 .



```php
Route::get('/', function () {
    return view('greeting', ['name' => 'James']);
});
```

Views may also be returned using the `View` facade:

`View`파사드를 사용하여 뷰를 반환 할 수도 있습니다 .

```php
use Illuminate\Support\Facades\View;

return View::make('greeting', ['name' => 'James']);
```

As you can see, the first argument passed to the `view` helper corresponds to the name of the view file in the `resources/views` directory. The second argument is an array of data that should be made available to the view. In this case, we are passing the `name` variable, which is displayed in the view using [Blade syntax](https://laravel.com/docs/8.x/blade).

보시다시피 `view`도우미에 전달 된 첫 번째 인수 는 `resources/views`디렉터리의 보기 파일 이름에 해당합니다 . 

두 번째 인수는 뷰에서 사용할 수 있어야하는 데이터 배열입니다. 

이 경우 [Blade 구문을](https://laravel.com/docs/8.x/blade)`name` 사용하여 뷰에 표시되는 변수를 전달 [합니다](https://laravel.com/docs/8.x/blade) .



### 2.1 [Nested View Directories](https://laravel.com/docs/8.x/views#nested-view-directories)

Views may also be nested within subdirectories of the `resources/views` directory. "Dot" notation may be used to reference nested views. 

뷰는 디렉토리의 하위 디렉토리 내에 중첩 될 수도 있습니다 `resources/views`.

 "점"표기법을 사용하여 중첩 된 뷰를 참조 할 수 있습니다. 



For example, if your view is stored at `resources/views/admin/profile.blade.php`, you may return it from one of your application's routes / controllers like so:

예를 들어 뷰가에 저장된 경우 다음 `resources/views/admin/profile.blade.php`과 같이 애플리케이션의 **경로 /** 컨트롤러 중 하나에서 반환 할 수 있습니다.

```php
return view('admin.profile', $data);
```

> View directory names should not contain the `.` character.
>
> 보기 디렉토리 이름에는 `.`문자가 포함되지 않아야합니다 .





### 2.2 [Creating The First Available View](https://laravel.com/docs/8.x/views#creating-the-first-available-view)

Using the `View` facade's `first` method, you may create the **first view** that exists in a given array of views. 

This may be useful if your application or package allows views to be customized or overwritten:

`View`파사드의 `first`방법을 사용하여 주어진 뷰 배열에 존재하는 **첫 번째 뷰**를 생성 할 수 있습니다. 

이는 애플리케이션 또는 패키지에서 보기를 사용자 정의하거나 덮어 쓸 수있는 경우 유용 할 수 있습니다.



```php
use Illuminate\Support\Facades\View;

return View::first(['custom.admin', 'admin'], $data);
```



### 2.3 [Determining If A View Exists](https://laravel.com/docs/8.x/views#determining-if-a-view-exists)

If you need to determine if a view exists, you may use the `View` facade. The `exists` method will return `true` if the view exists:

뷰가 존재하는지 확인해야하는 경우 `View`파사드를 사용할 수 있습니다 .

 `exists`방법은 반환 `true`뷰가있는 경우 :

```php
use Illuminate\Support\Facades\View;

if (View::exists('emails.customer')) {
    //
}
```





## 3.[Passing Data To Views](https://laravel.com/docs/8.x/views#passing-data-to-views)

As you saw in the previous examples, you may pass an array of data to views to make that data available to the view:

이전 예에서 보았 듯이 뷰에 **데이터 배열**을 전달하여 해당 데이터를 뷰에서 사용할 수 있도록 할 수 있습니다.

```php
return view('greetings', ['name' => 'Victoria']);
```

When passing information in this manner, the data should be an array with key / value pairs. 

After providing data to a view, you can then access each value within your view using the data's keys, such as `<?php echo $name; ?>`.

As an alternative to passing a complete array of data to the `view` helper function, you may use the `with` method to add individual pieces of data to the view. The `with` method returns an instance of the view object so that you can continue chaining methods before returning the view:

이러한 방식으로 정보를 전달할 때 데이터는 키 / 값 쌍이있는 배열이어야합니다. 

뷰에 데이터를 제공 한 후 .NET과 같은 데이터의 키를 사용하여 뷰 내의 각 값에 액세스 할 수 있습니다 `<?php echo $name; ?>`.

전체 데이터 배열을 `view`도우미 함수 에 전달하는 대신 `with`메서드를 사용하여 개별 **데이터 조각**을 뷰에 추가 할 수 있습니다. 

이 `with`메서드는 뷰 개체의 인스턴스를 반환하므로 뷰를 반환하기 전에 메서드 연결을 계속할 수 있습니다.

```php
return view('greeting')
            ->with('name', 'Victoria')
            ->with('occupation', 'Astronaut');
```





### 3.1 [Sharing Data With All Views](https://laravel.com/docs/8.x/views#sharing-data-with-all-views)

Occasionally, you may need to share data with all views that are rendered by your application. 

You may do so using the `View` facade's `share` method. 

Typically, you should place calls to the `share` method within a service provider's `boot` method. You are free to add them to the `App\Providers\AppServiceProvider` class or generate a separate service provider to house them:

경우에 따라 애플리케이션에서 렌더링하는 모든보기와 데이터를 공유해야 할 수 있습니다. 

`View`파사드의 `share`방법을 사용하여 그렇게 할 수 있습니다 . 

일반적으로 `share`서비스 공급자의 `boot`메서드 내 에서 메서드를 호출해야합니다 . 

`App\Providers\AppServiceProvider`클래스 에 추가 하거나 별도의 서비스 제공 업체를 생성하여이를 수용 할 수 있습니다.

```php
<?php

namespace App\Providers;

use Illuminate\Support\Facades\View;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        View::share('key', 'value');
    }
}
```



## 4.[View Composers](https://laravel.com/docs/8.x/views#view-composers)

View composers are callbacks or class methods that are called when a view is rendered. 

뷰 컴포저는 뷰가 렌더링 될 때 호출되는 콜백 또는 클래스 메서드입니다.





If you have data that you want to be bound to a view each time that view is rendered, a view composer can help you organize that logic into a single location. 

뷰가 렌더링 될 때마다 뷰에 바인딩하려는 데이터가있는 경우 뷰 작성기가 해당 논리를 단일 위치로 구성하는 데 도움을 줄 수 있습니다. 

View composers may prove particularly useful if the same view is returned by multiple routes or controllers within your application and always needs a particular piece of data. 

뷰 작성기는 애플리케이션 내의 여러 경로 또는 컨트롤러에서 동일한 뷰가 반환되고 항상 특정 데이터가 필요한 경우 특히 유용 할 수 있습니다.



Typically, view composers will be registered within one of your application's [service providers](https://laravel.com/docs/8.x/providers). 

In this example, we'll assume that we have created a new `App\Providers\ViewServiceProvider` to house this logic.

일반적으로보기 작성기는 애플리케이션의 [서비스 제공 업체](https://laravel.com/docs/8.x/providers) 중 하나에 등록됩니다 . 

이 예에서는이 `App\Providers\ViewServiceProvider`논리를 수용 할 새 항목 을 만들었다 고 가정합니다 .



We'll use the `View` facade's `composer` method to register the view composer. 

뷰 컴포저를 등록 하기 위해 `View`파사드의 `composer`메소드를 사용할 것 입니다. 

Laravel does not include a default directory for class based view composers, so you are free to organize them however you wish. 

For example, you could create an `app/Http/View/Composers` directory to house all of your application's view composers:

라라벨은 클래스 기반 뷰 컴포저를위한 기본 디렉토리를 포함하지 않으므로 원하는대로 구성 할 수 있습니다. 

예를 들어, `app/Http/View/Composers`애플리케이션의 모든 뷰 컴포저를 보관할 디렉토리를 만들 수 있습니다 .



```php
<?php

namespace App\Providers;

use App\Http\View\Composers\ProfileComposer;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Using class based composers...
        View::composer('profile', ProfileComposer::class);

        // Using closure based composers...
        View::composer('dashboard', function ($view) {
            //
        });
    }
}
```

> Remember, if you create a new service provider to contain your view composer registrations, you will need to add the service provider to the `providers` array in the `config/app.php` configuration file.
>
> View Composer 등록을 포함 할 새 서비스 공급자를 만드는 경우 구성 파일 의 `providers`배열에 서비스 공급자를 추가해야 `config/app.php`합니다.

Now that we have registered the composer, the `compose` method of the `App\Http\View\Composers\ProfileComposer` class will be executed each time the `profile` view is being rendered. Let's take a look at an example of the composer class:

이제 composer를 등록 했으므로 뷰가 렌더링 될 때마다 클래스 의 `compose`메서드 `App\Http\View\Composers\ProfileComposer`가 실행 `profile`됩니다. composer 클래스의 예를 살펴 보겠습니다.

```php
<?php

namespace App\Http\View\Composers;

use App\Repositories\UserRepository;
use Illuminate\View\View;

class ProfileComposer
{
    /**
     * The user repository implementation.
     *
     * @var \App\Repositories\UserRepository
     */
    protected $users;

    /**
     * Create a new profile composer.
     *
     * @param  \App\Repositories\UserRepository  $users
     * @return void
     */
    public function __construct(UserRepository $users)
    {
        // Dependencies are automatically resolved by the service container...
        $this->users = $users;
    }

    /**
     * Bind data to the view.
     *
     * @param  \Illuminate\View\View  $view
     * @return void
     */
    public function compose(View $view)
    {
        $view->with('count', $this->users->count());
    }
}
```

As you can see, all view composers are resolved via the [service container](https://laravel.com/docs/8.x/container), so you may type-hint any dependencies you need within a composer's constructor.

보시다시피 모든 뷰 컴포저는 [서비스 컨테이너](https://laravel.com/docs/8.x/container) 를 통해 해결 되므로 컴포저의 생성자 내에서 필요한 모든 종속성을 유형 힌트 할 수 있습니다.



#### [Attaching A Composer To Multiple Views](https://laravel.com/docs/8.x/views#attaching-a-composer-to-multiple-views)

You may attach a view composer to multiple views at once by passing an array of views as the first argument to the `composer` method:

`composer`메소드 의 첫 번째 인수로 뷰 배열을 전달하여 뷰 작성기를 한 번에 여러 뷰에 연결할 수 있습니다 .

```php
use App\Http\Views\Composers\MultiComposer;

View::composer(
    ['profile', 'dashboard'],
    MultiComposer::class
);
```

The `composer` method also accepts the `*` character as a wildcard, allowing you to attach a composer to all views:

이 `composer`메서드는 또한 `*`문자를 와일드 카드로 허용하므로 작성기를 모든 뷰에 연결할 수 있습니다.

```php
View::composer('*', function ($view) {
    //
});
```



### 4.1 [View Creators](https://laravel.com/docs/8.x/views#view-creators)

View "creators" are very similar to view composers; 

뷰 "제작자"는 뷰 작곡가와 매우 유사합니다. 





however, they are executed immediately after the view is instantiated instead of waiting until the view is about to render. 

그러나 뷰가 렌더링 될 때까지 기다리는 대신 뷰가 인스턴스화 된 직후에 실행됩니다.

To register a view creator, use the `creator` method: 

보기 작성자를 등록하려면 다음 `creator`방법을 사용하십시오 .

```php
use App\Http\View\Creators\ProfileCreator;
use Illuminate\Support\Facades\View;

View::creator('profile', ProfileCreator::class);
```



