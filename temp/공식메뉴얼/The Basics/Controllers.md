# Controllers

- [Introduction](https://laravel.com/docs/8.x/controllers#introduction)
- Writing Controllers
  - [Basic Controllers](https://laravel.com/docs/8.x/controllers#basic-controllers)
  - [Single Action Controllers](https://laravel.com/docs/8.x/controllers#single-action-controllers)
- [Controller Middleware](https://laravel.com/docs/8.x/controllers#controller-middleware)
- Resource Controllers
  - [Partial Resource Routes](https://laravel.com/docs/8.x/controllers#restful-partial-resource-routes)
  - [Nested Resources](https://laravel.com/docs/8.x/controllers#restful-nested-resources)
  - [Naming Resource Routes](https://laravel.com/docs/8.x/controllers#restful-naming-resource-routes)
  - [Naming Resource Route Parameters](https://laravel.com/docs/8.x/controllers#restful-naming-resource-route-parameters)
  - [Scoping Resource Routes](https://laravel.com/docs/8.x/controllers#restful-scoping-resource-routes)
  - [Localizing Resource URIs](https://laravel.com/docs/8.x/controllers#restful-localizing-resource-uris)
  - [Supplementing Resource Controllers](https://laravel.com/docs/8.x/controllers#restful-supplementing-resource-controllers)
- [Dependency Injection & Controllers](https://laravel.com/docs/8.x/controllers#dependency-injection-and-controllers)



## 1.[Introduction](https://laravel.com/docs/8.x/controllers#introduction)

Instead of defining all of your request handling logic as closures in your route files, you may wish to organize this behavior using "controller" classes. 

라우트 파일에서 모든 요청 처리 로직을 클로저로 정의하는 대신 **"컨트롤러"클래스를 사용하여이 동작을 구성** 할 수 있습니다. 



Controllers can group related request handling logic into a single class. 

컨트롤러는 관련 요청 처리 논리를 단일 클래스로 그룹화 할 수 있습니다. 



For example, a `UserController` class might handle all incoming requests related to users, including showing, creating, updating, and deleting users. 

By default, controllers are stored in the `app/Http/Controllers` directory.

예를 들어 `UserController`클래스는 사용자 표시, 생성, 업데이트 및 삭제를 포함하여 사용자와 관련된 **모든 수신 요청**을 처리 할 수 있습니다. 

기본적으로 컨트롤러는 `app/Http/Controllers`디렉토리에 저장됩니다 .



## 2.[Writing Controllers](https://laravel.com/docs/8.x/controllers#writing-controllers)



### 2.1 [Basic Controllers](https://laravel.com/docs/8.x/controllers#basic-controllers)

Let's take a look at an example of a basic controller. 

Note that the controller extends the base controller class included with Laravel: `App\Http\Controllers\Controller`:

기본 컨트롤러의 예를 살펴 보겠습니다. 

컨트롤러는 Laravel에 포함 된 기본 컨트롤러 클래스를 확장합니다 `App\Http\Controllers\Controller`.

```php
<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Show the profile for a given user.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function show($id)
    {
        return view('user.profile', [
            'user' => User::findOrFail($id)
        ]);
    }
}
```

You can define a route to this controller method like so:

다음과 같이이 컨트롤러 메서드에 대한 경로를 정의 할 수 있습니다.

```php
use App\Http\Controllers\UserController;

Route::get('/user/{id}', [UserController::class, 'show']);
```

When an incoming request matches the specified route URI, the `show` method on the `App\Http\Controllers\UserController` class will be invoked and the route parameters will be passed to the method.

수신 요청이 지정된 경로 URI와 일치하면 클래스 의 `show`메소드 `App\Http\Controllers\UserController`가 호출되고 경로 매개 변수가 메소드에 전달됩니다.




> Controllers are not **required** to extend a base class. 
>
> However, you will not have access to convenient features such as the `middleware` and `authorize` methods.
>
> 컨트롤러는 기본 클래스를 확장하는 **데 필요** 하지 않습니다 . 
>
> 그러나 `middleware`및 `authorize`방법 과 같은 편리한 기능에 액세스 할 수 없습니다 .



### 2.2 [Single Action Controllers](https://laravel.com/docs/8.x/controllers#single-action-controllers)

If a controller action is particularly complex, you might find it convenient to dedicate an entire controller class to that single action. 

To accomplish this, you may define a single `__invoke` method within the controller:

컨트롤러 작업이 특히 복잡한 경우 전체 컨트롤러 클래스를 해당 단일 작업에 전용하는 것이 편리 할 수 있습니다. 

이를 `__invoke`위해 컨트롤러 내에 단일 메소드를 정의 할 수 있습니다

```php
<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;

class ProvisionServer extends Controller
{
    /**
     * Provision a new web server.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
        // ...
    }
}
```

When registering routes for single action controllers, you do not need to specify a controller method. Instead, you may simply pass the name of the controller to the router:

단일 작업 컨트롤러에 대한 경로를 등록 할 때 컨트롤러 메서드를 지정할 필요가 없습니다. 

대신 컨트롤러의 이름을 라우터에 간단히 전달할 수 있습니다.

```php
use App\Http\Controllers\ProvisionServer;

Route::post('/server', ProvisionServer::class);
```



You may generate an invokable controller by using the `--invokable` option of the `make:controller` Artisan command:

Artisan 명령 의 `--invokable`옵션을 사용하여 호출 가능한 컨트롤러를 생성 할 수 있습니다 `make:controller`.

```php
php artisan make:controller ProvisionServer --invokable
```


> Controller stubs may be customized using [stub publishing](https://laravel.com/docs/8.x/artisan#stub-customization).
>
> 컨트롤러 스텁은 [스텁 게시를](https://laravel.com/docs/8.x/artisan#stub-customization) 사용하여 사용자 지정할 수 있습니다 .







## 3.[Controller Middleware](https://laravel.com/docs/8.x/controllers#controller-middleware)

[Middleware](https://laravel.com/docs/8.x/middleware) may be assigned to the controller's routes in your route files:

[미들웨어](https://laravel.com/docs/8.x/middleware) 는 경로 파일의 **컨트롤러 경로에 할당** 될 수 있습니다.

```php
Route::get('profile', [UserController::class, 'show'])->middleware('auth');
```

Or, you may find it convenient to specify middleware within your controller's constructor. 

Using the `middleware` method within your controller's constructor, you can assign middleware to the controller's actions:

또는 컨트롤러의 생성자 내에 미들웨어를 지정하는 것이 편리 할 수 있습니다. 

`middleware`컨트롤러의 생성자 내의 메서드를 사용하여 컨트롤러의 작업에 미들웨어를 할당 할 수 있습니다.

```php
class UserController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('log')->only('index');
        $this->middleware('subscribed')->except('store');
    }
}
```

Controllers also allow you to register middleware using a closure. 

This provides a convenient way to define an inline middleware for a single controller without defining an entire middleware class:

컨트롤러는 클로저를 사용하여 미들웨어를 등록 할 수도 있습니다. 

이는 전체 미들웨어 클래스를 정의하지 않고 단일 컨트롤러에 대한 인라인 미들웨어를 정의하는 편리한 방법을 제공합니다.

```php
$this->middleware(function ($request, $next) {
    return $next($request);
});
```





## 4. [Resource Controllers](https://laravel.com/docs/8.x/controllers#resource-controllers)

If you think of each Eloquent model in your application as a "resource", it is typical to perform the same sets of actions against each resource in your application. 

For example, imagine your application contains a `Photo` model and a `Movie` model. 

It is likely that users can create, read, update, or delete these resources.

애플리케이션의 각 Eloquent 모델을 "리소스"로 생각하면 애플리케이션의 각 리소스에 대해 동일한 작업 세트를 수행하는 것이 일반적입니다. 

예를 들어 애플리케이션에 `Photo`모델과 모델이 포함되어 있다고 가정 해보십시오 `Movie`. 

사용자는 이러한 리소스를 생성, 읽기, 업데이트 또는 삭제할 수 있습니다.



Because of this common use case, Laravel resource routing assigns the typical create, read, update, and delete ("CRUD") routes to a controller with a single line of code. 

To get started, we can use the `make:controller` Artisan command's `--resource` option to quickly create a controller to handle these actions:

이러한 일반적인 사용 사례로 인해 Laravel 리소스 라우팅은 일반적인 생성, 읽기, 업데이트 및 삭제 ( "CRUD") 경로를 한 줄의 코드로 컨트롤러에 할당합니다. 

시작하려면 `make:controller`Artisan 명령의 `--resource`옵션을 사용하여 이러한 작업을 처리 할 컨트롤러를 빠르게 만들 수 있습니다.

```php
php artisan make:controller PhotoController --resource
```



This command will generate a controller at `app/Http/Controllers/PhotoController.php`. 

The controller will contain a method for each of the available resource operations. 

Next, you may register a resource route that points to the controller:

이 명령은에서 컨트롤러를 생성합니다 `app/Http/Controllers/PhotoController.php`. 

컨트롤러에는 사용 가능한 각 리소스 작업에 대한 메서드가 포함됩니다. 

다음으로 컨트롤러를 가리키는 리소스 경로를 등록 할 수 있습니다.



```php
use App\Http\Controllers\PhotoController;

Route::resource('photos', PhotoController::class);
```

This single route declaration creates multiple routes to handle a variety of actions on the resource. 

The generated controller will already have methods stubbed for each of these actions. 

Remember, you can always get a quick overview of your application's routes by running the `route:list` Artisan command.

You may even register many resource controllers at once by passing an array to the `resources` method:

이 단일 경로 선언은 리소스에 대한 다양한 작업을 처리하기 위해 여러 경로를 만듭니다. 

생성 된 컨트롤러에는 이러한 각 작업에 대해 스텁 된 메서드가 이미 있습니다. 

`route:list`Artisan 명령 을 실행하면 항상 애플리케이션 경로에 대한 빠른 개요를 얻을 수 있습니다 .



`resources`메소드에 배열을 전달하여 한 번에 많은 리소스 컨트롤러를 등록 할 수도 있습니다 .

```php
Route::resources([
    'photos' => PhotoController::class,
    'posts' => PostController::class,
]);
```



#### [Actions Handled By Resource Controller](https://laravel.com/docs/8.x/controllers#actions-handled-by-resource-controller)

| Verb      | URI                    | Action  | Route Name     |
| :-------- | :--------------------- | :------ | :------------- |
| GET       | `/photos`              | index   | photos.index   |
| GET       | `/photos/create`       | create  | photos.create  |
| POST      | `/photos`              | store   | photos.store   |
| GET       | `/photos/{photo}`      | show    | photos.show    |
| GET       | `/photos/{photo}/edit` | edit    | photos.edit    |
| PUT/PATCH | `/photos/{photo}`      | update  | photos.update  |
| DELETE    | `/photos/{photo}`      | destroy | photos.destroy |



#### [Customizing Missing Model Behavior](https://laravel.com/docs/8.x/controllers#customizing-missing-model-behavior)

Typically, a 404 HTTP response will be generated if an implicitly bound resource model is not found. 

일반적으로 내재적으로 바인드 된 자원 모델을 찾을 수없는 경우 404 HTTP 응답이 생성됩니다. 



However, you may customize this behavior by calling the `missing` method when defining your resource route. 

The `missing` method accepts a closure that will be invoked if an implicitly bound model can not be found for any of the resource's routes:

그러나 `missing`리소스 경로를 정의 할 때 메서드 를 호출하여이 동작을 사용자 지정할 수 있습니다 . 

`missing`방법은 암시 적으로 결합 된 모델은 자원의 경로 중 어떤 찾을 수없는 경우 호출됩니다 클로저를 허용합니다

```php
use App\Http\Controllers\PhotoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

Route::resource('photos', PhotoController::class)
        ->missing(function (Request $request) {
            return Redirect::route('photos.index');
        });
```





#### [Specifying The Resource Model](https://laravel.com/docs/8.x/controllers#specifying-the-resource-model)

If you are using [route model binding](https://laravel.com/docs/8.x/routing#route-model-binding) and would like the resource controller's methods to type-hint a model instance, you may use the `--model` option when generating the controller:

[경로 모델 바인딩을](https://laravel.com/docs/8.x/routing#route-model-binding) 사용 [중이고](https://laravel.com/docs/8.x/routing#route-model-binding) 리소스 컨트롤러의 메서드가 모델 인스턴스를 유형 힌트하도록 `--model`하려면 컨트롤러를 생성 할 때 옵션을 사용할 수 있습니다 .

```php
php artisan make:controller PhotoController --resource --model=Photo
```



### 4.1 [Partial Resource Routes](https://laravel.com/docs/8.x/controllers#restful-partial-resource-routes)

When declaring a resource route, you may specify a subset of actions the controller should handle instead of the full set of default actions:

리소스 경로를 선언 할 때 컨트롤러가 기본 작업의 **전체 집합** 대신 처리해야하는 작업의 하위 집합을 지정할 수 있습니다.

```php
use App\Http\Controllers\PhotoController;

Route::resource('photos', PhotoController::class)
    ->only([
    	'index', 'show'
	]);

Route::resource('photos', PhotoController::class)
    ->except([
    	'create', 'store', 'update', 'destroy'
	]);
```



#### [API Resource Routes](https://laravel.com/docs/8.x/controllers#api-resource-routes)

When declaring resource routes that will be consumed by APIs, you will commonly want to exclude routes that present HTML templates such as `create` and `edit`. For convenience, you may use the `apiResource` method to automatically exclude these two routes:

API에 의해 소비 될 자원 경로를 선언 할 때, 당신은 일반적으로 현재 HTML과 같은 템플릿 것을 경로 제외 할 것 `create`등을 `edit`. 편의를 위해 `apiResource`다음 두 경로를 자동으로 제외 하는 방법을 사용할 수 있습니다 .



```php
use App\Http\Controllers\PhotoController;

Route::apiResource('photos', PhotoController::class);
```



You may register many API resource controllers at once by passing an array to the `apiResources` method:

`apiResources`메서드에 배열을 전달하여 한 번에 여러 API 리소스 컨트롤러를 등록 할 수 있습니다 .



```php
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\PostController;

Route::apiResources([
    'photos' => PhotoController::class,
    'posts' => PostController::class,
]);
```

To quickly generate an API resource controller that does not include the `create` or `edit` methods, use the `--api` switch when executing the `make:controller` command:

`create`또는 `edit`메서드를 포함하지 않는 API 리소스 컨트롤러를 빠르게 생성하려면 명령을 `--api`실행할 때 스위치를 사용합니다 `make:controller`.

```php
php artisan make:controller PhotoController --api
```





### 4.2 [Nested Resources](https://laravel.com/docs/8.x/controllers#restful-nested-resources)

Sometimes you may need to define routes to a nested resource. 

때로는 중첩 된 리소스에 대한 경로를 정의해야 할 수도 있습니다. 



For example, a photo resource may have multiple comments that may be attached to the photo. 

To nest the resource controllers, you may use "dot" notation in your route declaration:

예를 들어 사진 리소스에는 사진에 첨부 할 수있는 여러 댓글이있을 수 있습니다.

 **리소스 컨트롤러를 중첩**하려면 경로 선언에 "점"표기법을 사용할 수 있습니다.

```php
use App\Http\Controllers\PhotoCommentController;

Route::resource('photos.comments', PhotoCommentController::class);
```

This route will register a nested resource that may be accessed with URIs like the following:

이 경로는 다음과 같은 URI로 액세스 할 수있는 중첩 된 리소스를 등록합니다.

```php
/photos/{photo}/comments/{comment}
```



#### [Scoping Nested Resources](https://laravel.com/docs/8.x/controllers#scoping-nested-resources)

Laravel's [implicit model binding](https://laravel.com/docs/8.x/routing#implicit-model-binding-scoping) feature can automatically scope nested bindings such that the resolved child model is confirmed to belong to the parent model. 

Laravel의 [암시 적 모델 바인딩](https://laravel.com/docs/8.x/routing#implicit-model-binding-scoping) 기능은 해결 된 자식 모델이 부모 모델에 속하는 것으로 확인되도록 중첩 바인딩의 범위를 자동으로 지정할 수 있습니다. 



By using the `scoped` method when defining your nested resource, you may enable automatic scoping as well as instruct Laravel which field the child resource should be retrieved by. 

For more information on how to accomplish this, please see the documentation on [scoping resource routes](https://laravel.com/docs/8.x/controllers#restful-scoping-resource-routes).



`scoped`중첩 된 리소스를 정의 할 때 메서드 를 사용 하면 자동 범위 지정을 활성화하고 하위 리소스를 검색해야하는 필드를 Laravel에 지시 할 수 있습니다. 

이를 수행하는 방법에 대한 자세한 내용은 [리소스 경로 범위 지정에](https://laravel.com/docs/8.x/controllers#restful-scoping-resource-routes) 대한 설명서를 참조하십시오 .



#### [Shallow Nesting](https://laravel.com/docs/8.x/controllers#shallow-nesting)

Often, it is not entirely necessary to have both the parent and the child IDs within a URI since the child ID is already a unique identifier. When using unique identifiers such as auto-incrementing primary keys to identify your models in URI segments, you may choose to use "shallow nesting":

종종 하위 ID는 이미 고유 한 식별자이므로 URI 내에 상위 및 하위 ID를 모두 가질 필요가 없습니다. 

URI 세그먼트에서 모델을 식별하기 위해 자동 증가 기본 키와 같은 고유 식별자를 사용하는 경우 "얕은 중첩"을 사용하도록 선택할 수 있습니다.

```php
use App\Http\Controllers\CommentController;

Route::resource('photos.comments', CommentController::class)->shallow();
```

This route definition will define the following routes:

이 경로 정의는 다음 경로를 정의합니다.

| Verb      | URI                               | Action  | Route Name             |
| :-------- | :-------------------------------- | :------ | :--------------------- |
| GET       | `/photos/{photo}/comments`        | index   | photos.comments.index  |
| GET       | `/photos/{photo}/comments/create` | create  | photos.comments.create |
| POST      | `/photos/{photo}/comments`        | store   | photos.comments.store  |
| GET       | `/comments/{comment}`             | show    | comments.show          |
| GET       | `/comments/{comment}/edit`        | edit    | comments.edit          |
| PUT/PATCH | `/comments/{comment}`             | update  | comments.update        |
| DELETE    | `/comments/{comment}`             | destroy | comments.destroy       |



### 4.3 [Naming Resource Routes](https://laravel.com/docs/8.x/controllers#restful-naming-resource-routes)

By default, all resource controller actions have a route name; 

however, you can override these names by passing a `names` array with your desired route names:

기본적으로 모든 리소스 컨트롤러 작업에는 경로 이름이 있습니다. 

그러나 `names`원하는 경로 이름으로 배열을 전달하여 이러한 이름을 재정의 할 수 있습니다 .

```php
use App\Http\Controllers\PhotoController;

Route::resource('photos', PhotoController::class)->names([
    'create' => 'photos.build'
]);
```



### 4.4 [Naming Resource Route Parameters](https://laravel.com/docs/8.x/controllers#restful-naming-resource-route-parameters)

By default, `Route::resource` will create the route parameters for your resource routes based on the "singularized" version of the resource name. 

You can easily override this on a per resource basis using the `parameters` method. 

The array passed into the `parameters` method should be an associative array of resource names and parameter names:

기본적 `Route::resource`으로은 리소스 이름의 "단일화 된"버전을 기반으로 리소스 경로에 대한 경로 매개 변수를 만듭니다.

 `parameters`메서드를 사용하여 리소스별로 쉽게 재정의 할 수 있습니다 .

 `parameters`메서드에 전달 된 배열은 리소스 이름과 매개 변수 이름의 연관 배열이어야합니다.

```php
use App\Http\Controllers\AdminUserController;

Route::resource('users', AdminUserController::class)->parameters([
    'users' => 'admin_user'
]);
```

The example above generates the following URI for the resource's `show` route:

위의 예는 리소스 `show`경로에 대해 다음 URI를 생성 합니다.

```php
/users/{admin_user}
```





### 4.5 [Scoping Resource Routes](https://laravel.com/docs/8.x/controllers#restful-scoping-resource-routes)

Laravel's [scoped implicit model binding](https://laravel.com/docs/8.x/routing#implicit-model-binding-scoping) feature can automatically scope nested bindings such that the resolved child model is confirmed to belong to the parent model. 

By using the `scoped` method when defining your nested resource, you may enable automatic scoping as well as instruct Laravel which field the child resource should be retrieved by:

Laravel의 [범위](https://laravel.com/docs/8.x/routing#implicit-model-binding-scoping) 가 [지정된 암시 적 모델 바인딩](https://laravel.com/docs/8.x/routing#implicit-model-binding-scoping) 기능은 해결 된 하위 모델이 상위 모델에 속하는 것으로 확인되도록 중첩 된 바인딩의 범위를 자동으로 지정할 수 있습니다.

 `scoped`중첩 된 리소스를 정의 할 때이 메서드 를 사용 하면 자동 범위 지정을 활성화 할 수있을뿐만 아니라 Laravel에 다음과 같이 하위 리소스를 검색해야하는 필드를 지시 할 수 있습니다.

```php
use App\Http\Controllers\PhotoCommentController;

Route::resource('photos.comments', PhotoCommentController::class)->scoped([
    'comment' => 'slug',
]);
```

This route will register a scoped nested resource that may be accessed with URIs like the following:

이 경로는 다음과 같은 URI로 액세스 할 수있는 범위가 지정된 중첩 리소스를 등록합니다.

```php
/photos/{photo}/comments/{comment:slug}
```

When using a custom keyed implicit binding as a nested route parameter, Laravel will automatically scope the query to retrieve the nested model by its parent using conventions to guess the relationship name on the parent. In this case, it will be assumed that the `Photo` model has a relationship named `comments` (the plural of the route parameter name) which can be used to retrieve the `Comment` model.

커스텀 키 암시 적 바인딩을 중첩 된 경로 매개 변수로 사용할 때 Laravel은 자동으로 쿼리 범위를 지정하여 부모의 관계 이름을 추측하는 규칙을 사용하여 부모별로 중첩 된 모델을 검색합니다. 

이 경우 `Photo`모델이 모델 `comments`을 검색하는 데 사용할 수있는 이름 (경로 매개 변수 이름의 복수) 이라는 관계가 있다고 가정 합니다 `Comment`.



###4.6  [Localizing Resource URIs](https://laravel.com/docs/8.x/controllers#restful-localizing-resource-uris)

By default, `Route::resource` will create resource URIs using English verbs.

 If you need to localize the `create` and `edit` action verbs, you may use the `Route::resourceVerbs` method. 

This may be done at the beginning of the `boot` method within your application's `App\Providers\RouteServiceProvider`:

기본적으로 `Route::resource`는 영어 동사를 사용하여 리소스 URI를 만듭니다. 

`create`및 `edit`동작 동사 를 지역화해야하는 경우 `Route::resourceVerbs`메서드를 사용할 수 있습니다 . 

이 작업은 `boot`응용 프로그램 내 에서 메서드 의 시작 부분에서 수행 할 수 있습니다 `App\Providers\RouteServiceProvider`.

```php
/**
 * Define your route model bindings, pattern filters, etc.
 *
 * @return void
 */
public function boot()
{
    Route::resourceVerbs([
        'create' => 'crear',
        'edit' => 'editar',
    ]);

    // ...
}
```

Once the verbs have been customized, a resource route registration such as `Route::resource('fotos', PhotoController::class)` will produce the following URIs:

동사가 사용자 지정되면과 같은 리소스 경로 등록 `Route::resource('fotos', PhotoController::class)`이 다음 URI를 생성합니다.

```php
/fotos/crear

/fotos/{foto}/editar
```



### 4.7 [Supplementing Resource Controllers](https://laravel.com/docs/8.x/controllers#restful-supplementing-resource-controllers)

If you need to add additional routes to a resource controller beyond the default set of resource routes, you should define those routes before your call to the `Route::resource` method; otherwise, the routes defined by the `resource` method may unintentionally take precedence over your supplemental routes:

기본 리소스 경로 집합을 넘어 리소스 컨트롤러에 추가 경로를 추가해야하는 경우 `Route::resource`메서드를 호출하기 전에 해당 경로를 정의해야합니다 . 

그렇지 않으면 `resource`메서드에 정의 된 경로 가 의도하지 않게 추가 경로보다 우선 할 수 있습니다.

```php
use App\Http\Controller\PhotoController;

Route::get('/photos/popular', [PhotoController::class, 'popular']);
Route::resource('photos', PhotoController::class);
```


>
> Remember to keep your controllers focused. If you find yourself routinely needing methods outside of the typical set of resource actions, consider splitting your controller into two, smaller controllers.
>
> 컨트롤러에 집중하는 것을 잊지 마십시오. 일반적인 리소스 작업 집합 이외의 방법이 일상적으로 필요한 경우 컨트롤러를 두 개의 작은 컨트롤러로 분할하는 것이 좋습니다.



## 5. [Dependency Injection & Controllers](https://laravel.com/docs/8.x/controllers#dependency-injection-and-controllers)



#### [Constructor Injection](https://laravel.com/docs/8.x/controllers#constructor-injection)

The Laravel [service container](https://laravel.com/docs/8.x/container) is used to resolve all Laravel controllers. 

As a result, you are able to type-hint any dependencies your controller may need in its constructor. 

The declared dependencies will automatically be resolved and injected into the controller instance:

Laravel [서비스 컨테이너](https://laravel.com/docs/8.x/container) 는 모든 Laravel 컨트롤러를 해결하는 데 사용됩니다. 

결과적으로 컨트롤러가 생성자에 필요할 수있는 모든 종속성을 유형 힌트 할 수 있습니다. 

선언 된 종속성은 자동으로 해결되어 컨트롤러 인스턴스에 삽입됩니다.

```php
<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;

class UserController extends Controller
{
    /**
     * The user repository instance.
     */
    protected $users;

    /**
     * Create a new controller instance.
     *
     * @param  \App\Repositories\UserRepository  $users
     * @return void
     */
    public function __construct(UserRepository $users)
    {
        $this->users = $users;
    }
}
```



#### [Method Injection](https://laravel.com/docs/8.x/controllers#method-injection)

In addition to constructor injection, you may also type-hint dependencies on your controller's methods. 

A common use-case for method injection is injecting the `Illuminate\Http\Request` instance into your controller methods:

생성자 주입 외에도 컨트롤러의 메서드에 대한 유형 힌트 종속성도 있습니다. 

메서드 주입의 일반적인 사용 사례는 `Illuminate\Http\Request`컨트롤러 메서드에 인스턴스를 주입하는 것입니다 .

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Store a new user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $name = $request->name;

        //
    }
}
```

If your controller method is also expecting input from a route parameter, list your route arguments after your other dependencies. 

For example, if your route is defined like so:

컨트롤러 메서드가 경로 매개 변수의 입력도 예상하는 경우 다른 종속성 뒤에 경로 인수를 나열합니다. 

예를 들어 경로가 다음과 같이 정의 된 경우 :

```php
use App\Http\Controllers\UserController;

Route::put('/user/{id}', [UserController::class, 'update']);
```

You may still type-hint the `Illuminate\Http\Request` and access your `id` parameter by defining your controller method as follows:

다음과 같이 컨트롤러 메서드를 정의하여 매개 변수를 입력 `Illuminate\Http\Request`하고 액세스 할 수 `id`있습니다.

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Update the given user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }
}
```