# Routing

- Basic Routing
  - [Redirect Routes](https://laravel.com/docs/8.x/routing#redirect-routes)
  - [View Routes](https://laravel.com/docs/8.x/routing#view-routes)
- Route Parameters
  - [Required Parameters](https://laravel.com/docs/8.x/routing#required-parameters)
  - [Optional Parameters](https://laravel.com/docs/8.x/routing#parameters-optional-parameters)
  - [Regular Expression Constraints](https://laravel.com/docs/8.x/routing#parameters-regular-expression-constraints)
- [Named Routes](https://laravel.com/docs/8.x/routing#named-routes)
- Route Groups
  - [Middleware](https://laravel.com/docs/8.x/routing#route-group-middleware)
  - [Subdomain Routing](https://laravel.com/docs/8.x/routing#route-group-subdomain-routing)
  - [Route Prefixes](https://laravel.com/docs/8.x/routing#route-group-prefixes)
  - [Route Name Prefixes](https://laravel.com/docs/8.x/routing#route-group-name-prefixes)
- Route Model Binding
  - [Implicit Binding](https://laravel.com/docs/8.x/routing#implicit-binding)
  - [Explicit Binding](https://laravel.com/docs/8.x/routing#explicit-binding)
- [Fallback Routes](https://laravel.com/docs/8.x/routing#fallback-routes)
- Rate Limiting
  - [Defining Rate Limiters](https://laravel.com/docs/8.x/routing#defining-rate-limiters)
  - [Attaching Rate Limiters To Routes](https://laravel.com/docs/8.x/routing#attaching-rate-limiters-to-routes)
- [Form Method Spoofing](https://laravel.com/docs/8.x/routing#form-method-spoofing)
- [Accessing The Current Route](https://laravel.com/docs/8.x/routing#accessing-the-current-route)
- [Cross-Origin Resource Sharing (CORS)](https://laravel.com/docs/8.x/routing#cors)
- [Route Caching](https://laravel.com/docs/8.x/routing#route-caching)



## 1.[Basic Routing](https://laravel.com/docs/8.x/routing#basic-routing)

The most basic Laravel routes accept a URI and a closure, providing a very simple and expressive method of defining routes and behavior without complicated routing configuration files:

가장 기본적인 Laravel 경로는 URI와 클로저를 받아 복잡한 라우팅 구성 파일없이 **경로와 동작을 정의**하는 매우 간단하고 표현적인 방법을 제공합니다.

```php
use Illuminate\Support\Facades\Route;

Route::get('/greeting', function () {
    return 'Hello World';
});
```





#### [The Default Route Files](https://laravel.com/docs/8.x/routing#the-default-route-files)

All Laravel routes are defined in your route files, which are located in the `routes` directory. These files are automatically loaded by your application's `App\Providers\RouteServiceProvider`. The `routes/web.php` file defines routes that are for your web interface. These routes are assigned the `web` middleware group, which provides features like session state and CSRF protection. The routes in `routes/api.php` are stateless and are assigned the `api` middleware group.

모든 Laravel 경로는 `routes`디렉토리 에있는 경로 파일에 정의되어 있습니다 . 

이러한 파일은 애플리케이션의 `App\Providers\RouteServiceProvider`. 이 `routes/web.php`파일은 웹 인터페이스에 대한 경로를 정의합니다. 

이러한 경로에는 `web`세션 상태 및 CSRF 보호와 같은 기능을 제공 하는 미들웨어 그룹 이 할당됩니다 . 

의 경로 `routes/api.php`는 상태 비 저장이며 `api`미들웨어 그룹에 할당됩니다 .



For most applications, you will begin by defining routes in your `routes/web.php` file. The routes defined in `routes/web.php` may be accessed by entering the defined route's URL in your browser. For example, you may access the following route by navigating to `http://example.com/user` in your browser:

대부분의 응용 프로그램의 경우 `routes/web.php`파일 에서 경로를 정의하는 것으로 시작 합니다. 

에 정의 된 노선들은 `routes/web.php`브라우저에서 정의 된 경로의 URL을 입력하여 액세스 할 수 있습니다. 

예를 들어 `http://example.com/user`브라우저에서 로 이동하여 다음 경로에 액세스 할 수 있습니다 .

```php
use App\Http\Controllers\UserController;

Route::get('/user', [UserController::class, 'index']);
```

Routes defined in the `routes/api.php` file are nested within a route group by the `RouteServiceProvider`. Within this group, the `/api` URI prefix is automatically applied so you do not need to manually apply it to every route in the file. You may modify the prefix and other route group options by modifying your `RouteServiceProvider` class.

`routes/api.php`파일에 정의 된 경로 는 `RouteServiceProvider`. 이 그룹 내에서 `/api`URI 접두사는 자동으로 적용되므로 파일의 모든 경로에 수동으로 적용 할 필요가 없습니다. `RouteServiceProvider`클래스를 수정하여 접두사 및 기타 경로 그룹 옵션을 수정할 수 있습니다 .





#### [Available Router Methods](https://laravel.com/docs/8.x/routing#available-router-methods)

The router allows you to register routes that respond to any HTTP verb:

라우터를 사용하면 HTTP 동사에 응답하는 경로를 등록 할 수 있습니다.

```php
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);
```

Sometimes you may need to register a route that responds to multiple HTTP verbs. You may do so using the `match` method. Or, you may even register a route that responds to all HTTP verbs using the `any` method:

때때로 여러 HTTP 동사에 응답하는 경로를 등록해야 할 수 있습니다. `match`방법을 사용하여 그렇게 할 수 있습니다 . 또는 다음 `any`메서드를 사용하여 모든 HTTP 동사에 응답하는 경로를 등록 할 수도 있습니다 .

```php
Route::match(['get', 'post'], '/', function () {
    //
});

Route::any('/', function () {
    //
});
```



#### [Dependency Injection](https://laravel.com/docs/8.x/routing#dependency-injection)

You may type-hint any dependencies required by your route in your route's callback signature. 

The declared dependencies will automatically be resolved and injected into the callback by the Laravel [service container](https://laravel.com/docs/8.x/container). For example, you may type-hint the `Illuminate\Http\Request` class to have the current HTTP request automatically injected into your route callback:

경로의 콜백 서명에서 경로에 필요한 종속성을 입력 힌트 할 수 있습니다. 

선언 된 종속성은 Laravel [서비스 컨테이너에](https://laravel.com/docs/8.x/container) 의해 자동으로 해결되어 콜백에 주입됩니다 . 

예를 들어, `Illuminate\Http\Request`현재 HTTP 요청이 경로 콜백에 자동으로 삽입되도록 클래스에 유형 힌트를 지정할 수 있습니다 .



```php
use Illuminate\Http\Request;

Route::get('/users', function (Request $request) {
    // ...
});
```



#### [CSRF Protection](https://laravel.com/docs/8.x/routing#csrf-protection)

Remember, any HTML forms pointing to `POST`, `PUT`, `PATCH`, or `DELETE` routes that are defined in the `web` routes file should include a CSRF token field. Otherwise, the request will be rejected. You can read more about CSRF protection in the [CSRF documentation](https://laravel.com/docs/8.x/csrf):

, 가리키는 모든 HTML 형태의 기억 `POST`, `PUT`, `PATCH`, 또는 `DELETE`에 정의되어 루트 `web`루트 파일은 CSRF 토큰 필드를 포함해야합니다. 

그렇지 않으면 요청이 거부됩니다. [CSRF 문서](https://laravel.com/docs/8.x/csrf) 에서 CSRF 보호에 대한 자세한 내용을 읽을 수 있습니다 .

```php
<form method="POST" action="/profile">
    @csrf
    ...
</form>
```



### 1.1[Redirect Routes](https://laravel.com/docs/8.x/routing#redirect-routes)

If you are defining a route that redirects to another URI, you may use the `Route::redirect` method. This method provides a convenient shortcut so that you do not have to define a full route or controller for performing a simple redirect:

다른 URI로 리디렉션하는 경로를 정의하는 경우 `Route::redirect`메서드를 사용할 수 있습니다 . 

이 메서드는 간단한 리디렉션을 수행하기 위해 전체 경로 또는 컨트롤러를 정의 할 필요가 없도록 편리한 바로 가기를 제공합니다.

```php
Route::redirect('/here', '/there');
```

By default, `Route::redirect` returns a `302` status code. You may customize the status code using the optional third parameter:

기본적 `Route::redirect`으로 `302`상태 코드를 반환합니다 . 선택적 세 번째 매개 변수를 사용하여 상태 코드를 사용자 정의 할 수 있습니다.

```php
Route::redirect('/here', '/there', 301);
```

Or, you may use the `Route::permanentRedirect` method to return a `301` status code:

또는 `Route::permanentRedirect`메서드를 사용하여 `301`상태 코드 를 반환 할 수 있습니다 .

```php
Route::permanentRedirect('/here', '/there');
```


>
> When using route parameters in redirect routes, the following parameters are reserved by Laravel and cannot be used: `destination` and `status`.
>
> 리디렉션 경로에서 경로 매개 변수를 사용할 때 다음 매개 변수는 라 라벨에 의해 예약되어 사용할 수 없습니다. `destination`및 `status`.



### 1.2[View Routes](https://laravel.com/docs/8.x/routing#view-routes)

If your route only needs to return a [view](https://laravel.com/docs/8.x/views), you may use the `Route::view` method. Like the `redirect` method, this method provides a simple shortcut so that you do not have to define a full route or controller. The `view` method accepts a URI as its first argument and a view name as its second argument. In addition, you may provide an array of data to pass to the view as an optional third argument:

경로가 [보기](https://laravel.com/docs/8.x/views) 만 반환해야하는 경우 `Route::view`메서드를 사용할 수 있습니다 . 

`redirect`방법 과 마찬가지로이 방법은 전체 경로 또는 컨트롤러를 정의 할 필요가 없도록 간단한 바로 가기를 제공합니다.

 이 `view`메서드는 URI를 첫 번째 인수로,보기 이름을 두 번째 인수로받습니다. 

또한 선택적 세 번째 인수로 뷰에 전달할 데이터 배열을 제공 할 수 있습니다.

```php
Route::view('/welcome', 'welcome');

Route::view('/welcome', 'welcome', ['name' => 'Taylor']);
```


> When using route parameters in view routes, the following parameters are reserved by Laravel and cannot be used: `view`, `data`, `status`, and `headers`.
>
> 보기 경로에 경로 매개 변수를 사용하는 경우, 다음과 같은 매개 변수가 Laravel에 의해 예약되어 사용할 수 없습니다 : `view`, `data`, `status`,와 `headers`.



## 2.[Route Parameters](https://laravel.com/docs/8.x/routing#route-parameters)



### 2.1[Required Parameters](https://laravel.com/docs/8.x/routing#required-parameters)

Sometimes you will need to capture segments of the URI within your route. For example, you may need to capture a user's ID from the URL. You may do so by defining route parameters:

경로 내에서 URI 세그먼트를 캡처해야하는 경우가 있습니다. 

예를 들어 URL에서 사용자 ID를 캡처해야 할 수 있습니다. 경로 매개 변수를 정의하여이를 수행 할 수 있습니다.

```php
Route::get('/user/{id}', function ($id) {
    return 'User '.$id;
});
```

You may define as many route parameters as required by your route:

경로에 필요한만큼 경로 매개 변수를 정의 할 수 있습니다.

```php
Route::get('/posts/{post}/comments/{comment}', function ($postId, $commentId) {
    //
});
```

Route parameters are always encased within `{}` braces and should consist of alphabetic characters. Underscores (`_`) are also acceptable within route parameter names. Route parameters are injected into route callbacks / controllers based on their order - the names of the route callback / controller arguments do not matter.

경로 매개 변수는 항상 `{}`중괄호로 묶여 있으며 알파벳 문자로 구성되어야합니다.

 `_`경로 매개 변수 이름 내에서도 밑줄 ( )을 사용할 수 있습니다. 경로 매개 변수는 순서에 따라 경로 콜백 / 컨트롤러에 삽입됩니다. 경로 콜백 / 컨트롤러 인수의 이름은 중요하지 않습니다.



#### [Parameters & Dependency Injection](https://laravel.com/docs/8.x/routing#parameters-and-dependency-injection)

If your route has dependencies that you would like the Laravel service container to automatically inject into your route's callback, you should list your route parameters after your dependencies:

경로에 Laravel 서비스 컨테이너가 경로의 콜백에 자동으로 주입하기를 원하는 종속성이있는 경우 종속성 뒤에 경로 매개 변수를 나열해야합니다.

```php
use Illuminate\Http\Request;

Route::get('/user/{id}', function (Request $request, $id) {
    return 'User '.$id;
});
```



### 2.2[Optional Parameters](https://laravel.com/docs/8.x/routing#parameters-optional-parameters)

Occasionally you may need to specify a route parameter that may not always be present in the URI. You may do so by placing a `?` mark after the parameter name. Make sure to give the route's corresponding variable a default value:

때때로 URI에 항상 존재하지 않는 경로 매개 변수를 지정해야 할 수 있습니다. 

`?`매개 변수 이름 뒤에 표시 를하여이를 수행 할 수 있습니다 . 경로의 해당 변수에 기본값을 지정해야합니다.

```php
Route::get('/user/{name?}', function ($name = null) {
    return $name;
});

Route::get('/user/{name?}', function ($name = 'John') {
    return $name;
});
```



### 2.3[Regular Expression Constraints](https://laravel.com/docs/8.x/routing#parameters-regular-expression-constraints)

You may constrain the format of your route parameters using the `where` method on a route instance. The `where` method accepts the name of the parameter and a regular expression defining how the parameter should be constrained:

`where`경로 인스턴스 에서 메서드를 사용하여 경로 매개 변수의 **형식을 제한** 할 수 있습니다 . 

이 `where`메서드는 매개 변수의 이름과 매개 변수를 제한하는 방법을 정의하는 정규식을받습니다.

```php
Route::get('/user/{name}', function ($name) {
    //
})->where('name', '[A-Za-z]+');

Route::get('/user/{id}', function ($id) {
    //
})->where('id', '[0-9]+');

Route::get('/user/{id}/{name}', function ($id, $name) {
    //
})->where(['id' => '[0-9]+', 'name' => '[a-z]+']);
```

For convenience, some commonly used regular expression patterns have helper methods that allow you to quickly add pattern constraints to your routes:

편의를 위해 일반적으로 사용되는 일부 정규식 패턴에는 경로에 패턴 제약 조건을 빠르게 추가 할 수있는 도우미 메서드가 있습니다.

```php
Route::get('/user/{id}/{name}', function ($id, $name) {
    //
})->whereNumber('id')->whereAlpha('name');

Route::get('/user/{name}', function ($name) {
    //
})->whereAlphaNumeric('name');

Route::get('/user/{id}', function ($id) {
    //
})->whereUuid('id');
```

If the incoming request does not match the route pattern constraints, a 404 HTTP response will be returned.

수신 요청이 경로 패턴 제약 조건과 일치하지 않으면 404 HTTP 응답이 반환됩니다.



#### [Global Constraints](https://laravel.com/docs/8.x/routing#parameters-global-constraints)

If you would like a route parameter to always be constrained by a given regular expression, you may use the `pattern` method. You should define these patterns in the `boot` method of your `App\Providers\RouteServiceProvider` class:

경로 매개 변수가 항상 주어진 정규 표현식에 의해 제한되도록하려면 `pattern`메소드를 사용할 수 있습니다 . 



`App\Providers\RouteServiceProvider`클래스 의 `boot`메서드 에서 이러한 패턴을 정의해야합니다 .

```php
/**
 * Define your route model bindings, pattern filters, etc.
 *
 * @return void
 */
public function boot()
{
    Route::pattern('id', '[0-9]+');
}
```

Once the pattern has been defined, it is automatically applied to all routes using that parameter name:

패턴이 정의되면 해당 매개 변수 이름을 사용하여 모든 경로에 자동으로 적용됩니다.

```php
Route::get('/user/{id}', function ($id) {
    // Only executed if {id} is numeric...
});
```



#### [Encoded Forward Slashes](https://laravel.com/docs/8.x/routing#parameters-encoded-forward-slashes)

The Laravel routing component allows all characters except `/` to be present within route parameter values. You must explicitly allow `/` to be part of your placeholder using a `where` condition regular expression:

라 라벨 라우팅 컴포넌트는 `/`경로 매개 변수 값 내에 존재하는 것을 제외한 모든 문자를 허용 합니다. 조건 정규식을 `/`사용하여 자리 표시 자의 일부가되도록 명시 적으로 허용해야합니다 `where`.

```php
Route::get('/search/{search}', function ($search) {
    return $search;
})->where('search', '.*');
```

> ![img](https://laravel.com/img/callouts/exclamation.min.svg)
>
> 
>
> Encoded forward slashes are only supported within the last route segment.
>
> 인코딩 된 슬래시는 마지막 경로 세그먼트 내에서만 지원됩니다.



## 3.[Named Routes](https://laravel.com/docs/8.x/routing#named-routes)

Named routes allow the convenient generation of URLs or redirects for specific routes. You may specify a name for a route by chaining the `name` method onto the route definition:

명명 된 경로를 사용하면 특정 경로에 대한 URL 또는 리디렉션을 편리하게 생성 할 수 있습니다.

 `name`방법을 경로 정의 에 연결하여 경로의 이름을 지정할 수 있습니다 .



```php
Route::get('/user/profile', function () {
    //
})->name('profile');
```

You may also specify route names for controller actions:

컨트롤러 작업에 대한 경로 이름을 지정할 수도 있습니다.

```php
Route::get(
    '/user/profile',
    [UserProfileController::class, 'show']
)->name('profile');
```

> ![img](https://laravel.com/img/callouts/exclamation.min.svg)
>
> 
>
> Route names should always be unique.
>
> 경로 이름은 항상 고유해야합니다.



#### [Generating URLs To Named Routes](https://laravel.com/docs/8.x/routing#generating-urls-to-named-routes)

Once you have assigned a name to a given route, you may use the route's name when generating URLs or redirects via Laravel's `route` and `redirect` helper functions:

주어진 경로에 **이름을 할당** 한 후에는 URL을 생성하거나 Laravel `route`및 `redirect`도우미 기능을 통해 리디렉션 할 때 경로의 이름을 사용할 수 있습니다 .

```php
// Generating URLs...
$url = route('profile');

// Generating Redirects...
return redirect()->route('profile');
```

If the named route defines parameters, you may pass the parameters as the second argument to the `route` function. The given parameters will automatically be inserted into the generated URL in their correct positions:

명명 된 경로가 매개 변수를 정의하는 경우 매개 변수를 `route`함수 의 두 번째 인수로 전달할 수 있습니다 . 

지정된 매개 변수는 생성 된 URL의 올바른 위치에 자동으로 삽입됩니다.

```php
Route::get('/user/{id}/profile', function ($id) {
    //
})->name('profile');

$url = route('profile', ['id' => 1]);
```

If you pass additional parameters in the array, those key / value pairs will automatically be added to the generated URL's query string:

배열에 추가 매개 변수를 전달하면 해당 키 / 값 쌍이 생성 된 URL의 쿼리 문자열에 자동으로 추가됩니다.

```php
Route::get('/user/{id}/profile', function ($id) {
    //
})->name('profile');

$url = route('profile', ['id' => 1, 'photos' => 'yes']);

// /user/1/profile?photos=yes
```

> ![img](https://laravel.com/img/callouts/lightbulb.min.svg)
>
> 
>
> Sometimes, you may wish to specify request-wide default values for URL parameters, such as the current locale. To accomplish this, you may use the [`URL::defaults` method](https://laravel.com/docs/8.x/urls#default-values).
>
> 때로는 현재 로케일과 같은 URL 매개 변수에 대한 요청 전체 기본값을 지정하고자 할 수 있습니다. 이를 위해 [`URL::defaults`방법을](https://laravel.com/docs/8.x/urls#default-values) 사용할 수 있습니다 .



#### [Inspecting The Current Route](https://laravel.com/docs/8.x/routing#inspecting-the-current-route)

If you would like to determine if the current request was routed to a given named route, you may use the `named` method on a Route instance. For example, you may check the current route name from a route middleware:

현재 요청이 지정된 명명 된 경로로 **라우팅되었는지 확인**하려면 `named`Route 인스턴스 에서 메서드를 사용할 수 있습니다 . 

예를 들어 경로 미들웨어에서 현재 경로 이름을 확인할 수 있습니다.

```php
/**
 * Handle an incoming request.
 *
 * @param  \Illuminate\Http\Request  $request
 * @param  \Closure  $next
 * @return mixed
 */
public function handle($request, Closure $next)
{
    if ($request->route()->named('profile')) {
        //
    }

    return $next($request);
}
```



## 4.[Route Groups](https://laravel.com/docs/8.x/routing#route-groups)

Route groups allow you to share route attributes, such as middleware, across a large number of routes without needing to define those attributes on each individual route.

Nested groups attempt to intelligently "merge" attributes with their parent group. Middleware and `where` conditions are merged while names and prefixes are appended. Namespace delimiters and slashes in URI prefixes are automatically added where appropriate.



경로 그룹을 사용하면 각 개별 경로에서 이러한 속성을 정의 할 필요없이 많은 경로에서 미들웨어와 같은 경로 속성을 공유 할 수 있습니다.

중첩 그룹은 속성을 상위 그룹과 지능적으로 "병합"하려고합니다. `where`이름과 접두사가 추가되는 동안 미들웨어와 조건이 병합됩니다. 

URI 접두사의 네임 스페이스 구분 기호와 슬래시는 적절한 위치에 자동으로 추가됩니다.



### 4.1 [Middleware](https://laravel.com/docs/8.x/routing#route-group-middleware)

To assign [middleware](https://laravel.com/docs/8.x/middleware) to all routes within a group, you may use the `middleware` method before defining the group. Middleware are executed in the order they are listed in the array:

그룹 내의 모든 경로에 [미들웨어](https://laravel.com/docs/8.x/middleware) 를 할당하려면 그룹 `middleware`을 정의하기 전에 방법을 사용할 수 있습니다 . 

미들웨어는 어레이에 나열된 순서대로 실행됩니다.

```php
Route::middleware(['first', 'second'])->group(function () {
    Route::get('/', function () {
        // Uses first & second middleware...
    });

    Route::get('/user/profile', function () {
        // Uses first & second middleware...
    });
});
```



### 4.2[Subdomain Routing](https://laravel.com/docs/8.x/routing#route-group-subdomain-routing)

Route groups may also be used to handle subdomain routing. Subdomains may be assigned route parameters just like route URIs, allowing you to capture a portion of the subdomain for usage in your route or controller. The subdomain may be specified by calling the `domain` method before defining the group:

경로 그룹을 사용하여 하위 도메인 라우팅을 처리 할 수도 있습니다.

하위 도메인에는 경로 URI와 마찬가지로 경로 매개 변수가 할당 될 수 있으므로 경로 또는 컨트롤러에서 사용할 하위 도메인의 일부를 캡처 할 수 있습니다. `domain`그룹을 정의하기 전에 메서드를 호출하여 하위 도메인을 지정할 수 있습니다 .

```php
Route::domain('{account}.example.com')->group(function () {
    Route::get('user/{id}', function ($account, $id) {
        //
    });
});
```

> ![img](https://laravel.com/img/callouts/exclamation.min.svg)
>
> 
>
> In order to ensure your subdomain routes are reachable, you should register subdomain routes before registering root domain routes. This will prevent root domain routes from overwriting subdomain routes which have the same URI path.
>
> 하위 도메인 경로에 도달 할 수 있도록하려면 루트 도메인 경로를 등록하기 전에 하위 도메인 경로를 등록해야합니다. 이렇게하면 루트 도메인 경로가 동일한 URI 경로를 가진 하위 도메인 경로를 덮어 쓰지 못합니다.



### 4.3[Route Prefixes](https://laravel.com/docs/8.x/routing#route-group-prefixes)

The `prefix` method may be used to prefix each route in the group with a given URI. For example, you may want to prefix all route URIs within the group with `admin`:

이 `prefix`방법은 주어진 URI로 그룹의 각 경로를 접두사로 지정하는 데 사용할 수 있습니다. 

예를 들어 그룹 내의 모든 경로 URI에 다음을 접두사로 지정할 수 있습니다 `admin`.

```php
Route::prefix('admin')->group(function () {
    Route::get('/users', function () {
        // Matches The "/admin/users" URL
    });
});
```



### 4.4[Route Name Prefixes](https://laravel.com/docs/8.x/routing#route-group-name-prefixes)

The `name` method may be used to prefix each route name in the group with a given string. For example, you may want to prefix all of the grouped route's names with `admin`. The given string is prefixed to the route name exactly as it is specified, so we will be sure to provide the trailing `.` character in the prefix:

이 `name`방법을 사용하여 그룹의 각 경로 이름에 주어진 문자열을 접두사로 붙일 수 있습니다. 예를 들어 그룹화 된 모든 경로의 이름 앞에 `admin`. 

지정된 문자열은 지정된대로 정확히 경로 이름에 접두사로 지정되므로 `.`접두사에 후행 문자 를 제공해야 합니다.

```php
Route::name('admin.')->group(function () {
    Route::get('/users', function () {
        // Route assigned name "admin.users"...
    })->name('users');
});
```



## 5. [Route Model Binding](https://laravel.com/docs/8.x/routing#route-model-binding)

When injecting a model ID to a route or controller action, you will often query the database to retrieve the model that corresponds to that ID. Laravel route model binding provides a convenient way to automatically inject the model instances directly into your routes. For example, instead of injecting a user's ID, you can inject the entire `User` model instance that matches the given ID.



모델 ID를 경로 또는 컨트롤러 작업에 삽입 할 때 종종 데이터베이스를 쿼리하여 해당 ID에 해당하는 모델을 검색합니다. 

Laravel 경로 모델 바인딩은 모델 인스턴스를 경로에 직접 자동으로 삽입하는 편리한 방법을 제공합니다. 

예를 들어 사용자의 ID를 삽입하는 대신 `User`지정된 ID와 일치하는 전체 모델 인스턴스를 삽입 할 수 있습니다 .



### 5.1[Implicit Binding](https://laravel.com/docs/8.x/routing#implicit-binding)

Laravel automatically resolves Eloquent models defined in routes or controller actions whose type-hinted variable names match a route segment name. For example:

Laravel은 유형 힌트 변수 이름이 경로 세그먼트 이름과 일치하는 경로 또는 컨트롤러 작업에 정의 된 Eloquent 모델을 자동으로 해결합니다. 

예를 들면 :

```php
use App\Models\User;

Route::get('/users/{user}', function (User $user) {
    return $user->email;
});
```

Since the `$user` variable is type-hinted as the `App\Models\User` Eloquent model and the variable name matches the `{user}` URI segment, Laravel will automatically inject the model instance that has an ID matching the corresponding value from the request URI. If a matching model instance is not found in the database, a 404 HTTP response will automatically be generated.

Of course, implicit binding is also possible when using controller methods. Again, note the `{user}` URI segment matches the `$user` variable in the controller which contains an `App\Models\User` type-hint:

때문에 `$user`변수가 같은 유형을 암시한다 `App\Models\User`웅변 모델 변수 이름이 일치 `{user}`URI 세그먼트를 Laravel 자동으로 요청 URI에서 해당 값을 일치하는 ID를 가지는 모델 인스턴스 분사. 



데이터베이스에서 일치하는 모델 인스턴스를 찾을 수없는 경우 404 HTTP 응답이 자동으로 생성됩니다.



물론 컨트롤러 메서드를 사용할 때 암시 적 바인딩도 가능합니다. 

다시 말하지만 `{user}`URI 세그먼트 `$user`는 `App\Models\User`유형 힌트 를 포함하는 컨트롤러 의 변수 와 일치합니다

```php
use App\Http\Controllers\UserController;
use App\Models\User;


// Route definition...
Route::get('/users/{user}', [UserController::class, 'show']);


// Controller method definition...
public function show(User $user)
{
    return view('user.profile', ['user' => $user]);
}
```



#### [Customizing The Key](https://laravel.com/docs/8.x/routing#customizing-the-default-key-name)

Sometimes you may wish to resolve Eloquent models using a column other than `id`. To do so, you may specify the column in the route parameter definition:

경우에 따라 이외의 열을 사용하여 Eloquent 모델을 해결하고자 할 수 있습니다 `id`. 

이를 위해 경로 매개 변수 정의에 열을 지정할 수 있습니다.

```php
use App\Models\Post;

Route::get('/posts/{post:slug}', function (Post $post) {
    return $post;
});
```

If you would like model binding to always use a database column other than `id` when retrieving a given model class, you may override the `getRouteKeyName` method on the Eloquent model:

모델 바인딩 `id`이 주어진 모델 클래스를 검색 할 때가 아닌 다른 데이터베이스 열을 항상 사용하도록 `getRouteKeyName`하려면 Eloquent 모델 의 메서드를 재정의 할 수 있습니다 .

```php
/**
 * Get the route key for the model.
 *
 * @return string
 */
public function getRouteKeyName()
{
    return 'slug';
}
```



#### [Custom Keys & Scoping](https://laravel.com/docs/8.x/routing#implicit-model-binding-scoping)

When implicitly binding multiple Eloquent models in a single route definition, you may wish to scope the second Eloquent model such that it must be a child of the previous Eloquent model. 

For example, consider this route definition that retrieves a blog post by slug for a specific user:

단일 경로 정의에서 여러 Eloquent 모델을 암시 적으로 바인딩 할 때 두 번째 Eloquent 모델의 범위를 지정하여 이전 Eloquent 모델의 자식이어야합니다. 

예를 들어, 특정 사용자에 대해 슬러그별로 블로그 게시물을 검색하는 다음 경로 정의를 고려하십시오.

```php
use App\Models\Post;
use App\Models\User;

Route::get('/users/{user}/posts/{post:slug}', function (User $user, Post $post) {
    return $post;
});
```

When using a custom keyed implicit binding as a nested route parameter, Laravel will automatically scope the query to retrieve the nested model by its parent using conventions to guess the relationship name on the parent. In this case, it will be assumed that the `User` model has a relationship named `posts` (the plural form of the route parameter name) which can be used to retrieve the `Post` model.



커스텀 키 암시 적 바인딩을 중첩 된 경로 매개 변수로 사용할 때 Laravel은 자동으로 쿼리 범위를 지정하여 부모의 관계 이름을 추측하는 규칙을 사용하여 부모별로 중첩 된 모델을 검색합니다. 

이 경우 `User`모델이 모델 `posts`을 검색하는 데 사용할 수있는 이름 (라우트 매개 변수 이름의 복수 형식) 이라는 관계를 가지고 있다고 가정합니다 `Post`.



#### [Customizing Missing Model Behavior](https://laravel.com/docs/8.x/routing#customizing-missing-model-behavior)

Typically, a 404 HTTP response will be generated if an implicitly bound model is not found. 

However, you may customize this behavior by calling the `missing` method when defining your route. 

The `missing` method accepts a closure that will be invoked if an implicitly bound model can not be found:

일반적으로 암시 적으로 바인딩 된 모델을 찾을 수없는 경우 404 HTTP 응답이 생성됩니다. 

그러나 `missing`경로를 정의 할 때 메서드 를 호출하여이 동작을 사용자 지정할 수 있습니다 .

 `missing`방법은 암시 적으로 결합 된 모델을 찾을 수없는 경우 호출됩니다 클로저를 허용합니다

```php
use App\Http\Controllers\LocationsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

Route::get('/locations/{location:slug}', [LocationsController::class, 'show'])
        ->name('locations.view')
        ->missing(function (Request $request) {
            return Redirect::route('locations.index');
        });
```



### 5.2[Explicit Binding](https://laravel.com/docs/8.x/routing#explicit-binding)

You are not required to use Laravel's implicit, convention based model resolution in order to use model binding. You can also explicitly define how route parameters correspond to models. To register an explicit binding, use the router's `model` method to specify the class for a given parameter. You should define your explicit model bindings at the beginning of the `boot` method of your `RouteServiceProvider` class:

모델 바인딩을 사용하기 위해 Laravel의 암시 적, 규칙 기반 모델 확인을 사용할 필요는 없습니다. 경로 매개 변수가 모델에 대응하는 방식을 명시 적으로 정의 할 수도 있습니다. 명시 적 바인딩을 등록하려면 라우터의 `model`메소드를 사용하여 주어진 매개 변수에 대한 클래스를 지정하십시오. 클래스 의 `boot`메서드 시작 부분에 명시 적 모델 바인딩을 정의해야합니다 `RouteServiceProvider`.

```php
use App\Models\User;
use Illuminate\Support\Facades\Route;

/**
 * Define your route model bindings, pattern filters, etc.
 *
 * @return void
 */
public function boot()
{
    Route::model('user', User::class);

    // ...
}
```

Next, define a route that contains a `{user}` parameter:

다음으로 `{user}`매개 변수 가 포함 된 경로를 정의합니다 .

```php
use App\Models\User;

Route::get('/users/{user}', function (User $user) {
    //
});
```

Since we have bound all `{user}` parameters to the `App\Models\User` model, an instance of that class will be injected into the route. So, for example, a request to `users/1` will inject the `User` instance from the database which has an ID of `1`.

If a matching model instance is not found in the database, a 404 HTTP response will be automatically generated.

모든 `{user}`매개 변수를 `App\Models\User`모델에 바인딩했기 때문에 해당 클래스의 인스턴스가 경로에 주입됩니다. 그래서, 예를 들어, 요청하는 `users/1`분사 것이다 `User`의 ID를 가지는 데이터베이스로부터 인스턴스 `1`.

데이터베이스에서 일치하는 모델 인스턴스를 찾을 수없는 경우 404 HTTP 응답이 자동으로 생성됩니다.



#### [Customizing The Resolution Logic](https://laravel.com/docs/8.x/routing#customizing-the-resolution-logic)

If you wish to define your own model binding resolution logic, you may use the `Route::bind` method. The closure you pass to the `bind` method will receive the value of the URI segment and should return the instance of the class that should be injected into the route. Again, this customization should take place in the `boot` method of your application's `RouteServiceProvider`:

고유 한 모델 바인딩 해결 논리를 정의하려면 `Route::bind`메서드를 사용할 수 있습니다 . `bind`메서드에 전달하는 클로저 는 URI 세그먼트의 값을 수신하고 경로에 삽입되어야하는 클래스의 인스턴스를 반환해야합니다. 다시 말하지만,이 사용자 정의는 `boot`애플리케이션의 메소드 에서 수행되어야합니다 `RouteServiceProvider`.

```php
use App\Models\User;
use Illuminate\Support\Facades\Route;

/**
 * Define your route model bindings, pattern filters, etc.
 *
 * @return void
 */
public function boot()
{
    Route::bind('user', function ($value) {
        return User::where('name', $value)->firstOrFail();
    });

    // ...
}
```

Alternatively, you may override the `resolveRouteBinding` method on your Eloquent model. 

This method will receive the value of the URI segment and should return the instance of the class that should be injected into the route:

또는 `resolveRouteBinding`Eloquent 모델 의 메서드를 재정의 할 수 있습니다 . 

이 메서드는 URI 세그먼트의 값을 수신하고 경로에 삽입해야하는 클래스의 인스턴스를 반환해야합니다.

```php
/**
 * Retrieve the model for a bound value.
 *
 * @param  mixed  $value
 * @param  string|null  $field
 * @return \Illuminate\Database\Eloquent\Model|null
 */
public function resolveRouteBinding($value, $field = null)
{
    return $this->where('name', $value)->firstOrFail();
}
```

If a route is utilizing [implicit binding scoping](https://laravel.com/docs/8.x/routing#implicit-model-binding-scoping), the `resolveChildRouteBinding` method will be used to resolve the child binding of the parent model:

경로가 [암시 적 바인딩 범위](https://laravel.com/docs/8.x/routing#implicit-model-binding-scoping) 를 사용하는 경우 `resolveChildRouteBinding`메서드는 부모 모델의 자식 바인딩을 확인하는 데 사용됩니다.

```php
/**
 * Retrieve the child model for a bound value.
 *
 * @param  string  $childType
 * @param  mixed  $value
 * @param  string|null  $field
 * @return \Illuminate\Database\Eloquent\Model|null
 */
public function resolveChildRouteBinding($childType, $value, $field)
{
    return parent::resolveChildRouteBinding($childType, $value, $field);
}
```



## 6.[Fallback Routes](https://laravel.com/docs/8.x/routing#fallback-routes)

Using the `Route::fallback` method, you may define a route that will be executed when no other route matches the incoming request. Typically, unhandled requests will automatically render a "404" page via your application's exception handler. However, since you would typically define the `fallback` route within your `routes/web.php` file, all middleware in the `web` middleware group will apply to the route. You are free to add additional middleware to this route as needed:

이 `Route::fallback`방법을 사용하면 수신 요청과 일치하는 다른 경로가 없을 때 실행될 경로를 정의 할 수 있습니다. 

일반적으로 처리되지 않은 요청은 애플리케이션의 예외 처리기를 통해 자동으로 "404"페이지를 렌더링합니다. 그러나 일반적으로 파일 `fallback`내 에서 경로를 정의 `routes/web.php`하므로 `web`미들웨어 그룹의 모든 미들웨어 가 경로에 적용됩니다. 필요에 따라이 경로에 추가 미들웨어를 자유롭게 추가 할 수 있습니다.

```php
Route::fallback(function () {
    //
});
```

> ![img](https://laravel.com/img/callouts/exclamation.min.svg)
>
> 
>
> The fallback route should always be the last route registered by your application.
>
> 대체 경로는 항상 애플리케이션에서 등록한 마지막 경로 여야합니다.



## 7.[Rate Limiting](https://laravel.com/docs/8.x/routing#rate-limiting)



### 7.1[Defining Rate Limiters](https://laravel.com/docs/8.x/routing#defining-rate-limiters)

Laravel includes powerful and customizable rate limiting services that you may utilize to restrict the amount of traffic for a given route or group of routes. To get started, you should define rate limiter configurations that meet your application's needs. Typically, this should be done within the `configureRateLimiting` method of your application's `App\Providers\RouteServiceProvider` class.

Rate limiters are defined using the `RateLimiter` facade's `for` method. The `for` method accepts a rate limiter name and a closure that returns the limit configuration that should apply to routes that are assigned to the rate limiter. Limit configuration are instances of the `Illuminate\Cache\RateLimiting\Limit` class. This class contains helpful "builder" methods so that you can quickly define your limit. The rate limiter name may be any string you wish:

Laravel에는 특정 경로 또는 경로 그룹에 대한 트래픽 양을 제한하는 데 활용할 수있는 강력하고 사용자 정의 가능한 속도 제한 서비스가 포함되어 있습니다. 시작하려면 애플리케이션의 요구 사항을 충족하는 속도 제한 기 구성을 정의해야합니다. 일반적으로이 작업은 `configureRateLimiting`응용 프로그램 `App\Providers\RouteServiceProvider`클래스 의 메서드 내에서 수행해야합니다 .

비율 제한 기는 `RateLimiter`파사드의 `for`방법을 사용하여 정의됩니다 . 이 `for`메서드는 속도 제한 기 이름과 속도 제한기에 할당 된 경로에 적용해야하는 제한 구성을 반환하는 클로저를 허용합니다. 제한 구성은 `Illuminate\Cache\RateLimiting\Limit`클래스의 인스턴스입니다 . 이 클래스에는 제한을 빠르게 정의 할 수 있도록 유용한 "빌더"메서드가 포함되어 있습니다. 속도 제한 기 이름은 원하는 문자열 일 수 있습니다.

```php
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;

/**
 * Configure the rate limiters for the application.
 *
 * @return void
 */
protected function configureRateLimiting()
{
    RateLimiter::for('global', function (Request $request) {
        return Limit::perMinute(1000);
    });
}
```

If the incoming request exceeds the specified rate limit, a response with a 429 HTTP status code will automatically be returned by Laravel. If you would like to define your own response that should be returned by a rate limit, you may use the `response` method:

수신 요청이 지정된 속도 제한을 초과하면 429 HTTP 상태 코드가 포함 된 응답이 Laravel에서 자동으로 반환됩니다. 속도 제한에 의해 반환되어야하는 자체 응답을 정의하려면 다음 `response`메서드를 사용할 수 있습니다 .

```php
RateLimiter::for('global', function (Request $request) {
    return Limit::perMinute(1000)->response(function () {
        return response('Custom response...', 429);
    });
});
```

Since rate limiter callbacks receive the incoming HTTP request instance, you may build the appropriate rate limit dynamically based on the incoming request or authenticated user:

속도 제한 기 콜백은 수신 HTTP 요청 인스턴스를 수신하므로 수신 요청 또는 인증 된 사용자를 기반으로 적절한 속도 제한을 동적으로 구축 할 수 있습니다.

```php
RateLimiter::for('uploads', function (Request $request) {
    return $request->user()->vipCustomer()
                ? Limit::none()
                : Limit::perMinute(100);
});
```



#### [Segmenting Rate Limits](https://laravel.com/docs/8.x/routing#segmenting-rate-limits)

Sometimes you may wish to segment rate limits by some arbitrary value. For example, you may wish to allow users to access a given route 100 times per minute per IP address. To accomplish this, you may use the `by` method when building your rate limit:

때로는 임의의 값으로 속도 제한을 분할 할 수 있습니다. 예를 들어, 사용자가 IP 주소별로 분당 100 번 주어진 경로에 액세스하도록 허용 할 수 있습니다. 이를 `by`위해 속도 제한을 구축 할 때 다음 방법을 사용할 수 있습니다 .

```php
RateLimiter::for('uploads', function (Request $request) {
    return $request->user()->vipCustomer()
                ? Limit::none()
                : Limit::perMinute(100)->by($request->ip());
});
```

To illustrate this feature using another example, we can limit access to the route to 100 times per minute per authenticated user ID or 10 times per minute per IP address for guests:

다른 예를 사용하여이 기능을 설명하기 위해 인증 된 사용자 ID 당 분당 100 회 또는 게스트의 경우 IP 주소 당 분당 10 회로 경로에 대한 액세스를 제한 할 수 있습니다.

```php
RateLimiter::for('uploads', function (Request $request) {
    return $request->user()
                ? Limit::perMinute(100)->by($request->user()->id)
                : Limit::perMinute(10)->by($request->ip());
});
```



#### [Multiple Rate Limits](https://laravel.com/docs/8.x/routing#multiple-rate-limits)

If needed, you may return an array of rate limits for a given rate limiter configuration. Each rate limit will be evaluated for the route based on the order they are placed within the array:

필요한 경우 지정된 속도 제한 기 구성에 대한 속도 제한 배열을 반환 할 수 있습니다. 각 속도 제한은 배열 내에 배치 된 순서에 따라 경로에 대해 평가됩니다.

```php
RateLimiter::for('login', function (Request $request) {
    return [
        Limit::perMinute(500),
        Limit::perMinute(3)->by($request->input('email')),
    ];
});
```



### 7.2 [Attaching Rate Limiters To Routes](https://laravel.com/docs/8.x/routing#attaching-rate-limiters-to-routes)

Rate limiters may be attached to routes or route groups using the `throttle` [middleware](https://laravel.com/docs/8.x/middleware). The throttle middleware accepts the name of the rate limiter you wish to assign to the route:

속도 제한 기는 `throttle` [미들웨어를](https://laravel.com/docs/8.x/middleware) 사용하여 경로 또는 경로 그룹에 연결될 수 있습니다 . 스로틀 미들웨어는 경로에 할당하려는 속도 제한 기의 이름을 허용합니다.

```php
Route::middleware(['throttle:uploads'])->group(function () {
    Route::post('/audio', function () {
        //
    });

    Route::post('/video', function () {
        //
    });
});
```



#### [Throttling With Redis](https://laravel.com/docs/8.x/routing#throttling-with-redis)

Typically, the `throttle` middleware is mapped to the `Illuminate\Routing\Middleware\ThrottleRequests` class. This mapping is defined in your application's HTTP kernel (`App\Http\Kernel`). However, if you are using Redis as your application's cache driver, you may wish to change this mapping to use the `Illuminate\Routing\Middleware\ThrottleRequestsWithRedis` class. This class is more efficient at managing rate limiting using Redis:

일반적으로 `throttle`미들웨어는 `Illuminate\Routing\Middleware\ThrottleRequests`클래스에 매핑됩니다 . 이 매핑은 애플리케이션의 HTTP 커널 ( `App\Http\Kernel`) 에서 정의됩니다 . 그러나 Redis를 애플리케이션의 캐시 드라이버로 사용하는 경우 `Illuminate\Routing\Middleware\ThrottleRequestsWithRedis`클래스 를 사용하도록이 매핑을 변경할 수 있습니다 . 이 클래스는 Redis를 사용하여 속도 제한을 관리하는 데 더 효율적입니다.

```php
'throttle' => \Illuminate\Routing\Middleware\ThrottleRequestsWithRedis::class,
```



## 8.[Form Method Spoofing](https://laravel.com/docs/8.x/routing#form-method-spoofing)

HTML forms do not support `PUT`, `PATCH`, or `DELETE` actions. So, when defining `PUT`, `PATCH`, or `DELETE` routes that are called from an HTML form, you will need to add a hidden `_method` field to the form. The value sent with the `_method` field will be used as the HTTP request method:

HTML 양식은 지원하지 않습니다 `PUT`, `PATCH`또는 `DELETE`행동. 정의 할 때, `PUT`, `PATCH`, 또는 `DELETE`HTML 폼에서 호출 노선, 당신은 숨겨진 추가해야합니다 `_method`폼에 필드. `_method`필드 와 함께 전송 된 값 은 HTTP 요청 메소드로 사용됩니다.

```php
<form action="/example" method="POST">
    <input type="hidden" name="_method" value="PUT">
    <input type="hidden" name="_token" value="{{ csrf_token() }}">
</form>
```

For convenience, you may use the `@method` [Blade directive](https://laravel.com/docs/8.x/blade) to generate the `_method` input field:

편의를 위해 `@method` [Blade 지시문](https://laravel.com/docs/8.x/blade) 을 사용하여 `_method`입력 필드 를 생성 할 수 있습니다 .

```php
<form action="/example" method="POST">
    @method('PUT')
    @csrf
</form>
```



## 9.[Accessing The Current Route](https://laravel.com/docs/8.x/routing#accessing-the-current-route)

You may use the `current`, `currentRouteName`, and `currentRouteAction` methods on the `Route` facade to access information about the route handling the incoming request:

들어오는 요청을 처리하는 경로에 대한 정보에 액세스하기 위해 파사드 `current`에서 `currentRouteName`, 및 `currentRouteAction`메서드를 사용할 수 있습니다 `Route`.

```php
use Illuminate\Support\Facades\Route;

$route = Route::current(); // Illuminate\Routing\Route
$name = Route::currentRouteName(); // string
$action = Route::currentRouteAction(); // string
```

You may refer to the API documentation for both the [underlying class of the Route facade](https://laravel.com/api/8.x/Illuminate/Routing/Router.html) and [Route instance](https://laravel.com/api/8.x/Illuminate/Routing/Route.html) to review all of the methods that are available on the router and route classes.

라우터 및 라우트 클래스에서 사용 가능한 모든 메소드를 검토 [하려면 Route 파사드](https://laravel.com/api/8.x/Illuminate/Routing/Router.html) 및 [Route 인스턴스](https://laravel.com/api/8.x/Illuminate/Routing/Route.html) 의 [기본 클래스](https://laravel.com/api/8.x/Illuminate/Routing/Router.html) 모두에 대한 API 문서를 참조 할 수 있습니다 .



## 10. [Cross-Origin Resource Sharing (CORS)](https://laravel.com/docs/8.x/routing#cors)

Laravel can automatically respond to CORS `OPTIONS` HTTP requests with values that you configure. All CORS settings may be configured in your application's `config/cors.php` configuration file. The `OPTIONS` requests will automatically be handled by the `HandleCors` [middleware](https://laravel.com/docs/8.x/middleware) that is included by default in your global middleware stack. Your global middleware stack is located in your application's HTTP kernel (`App\Http\Kernel`).

Laravel은 `OPTIONS`사용자가 구성한 값 으로 CORS HTTP 요청에 자동으로 응답 할 수 있습니다. 모든 CORS 설정은 애플리케이션의 `config/cors.php`구성 파일 에서 구성 할 수 있습니다 . `OPTIONS`요청은 자동으로 처리됩니다 `HandleCors` [미들웨어](https://laravel.com/docs/8.x/middleware) 글로벌 미들웨어 스택에 기본적으로 포함되어 있습니다. 글로벌 미들웨어 스택은 애플리케이션의 HTTP 커널 ( `App\Http\Kernel`)에 있습니다.



> ![img](https://laravel.com/img/callouts/lightbulb.min.svg)
>
> 
>
> For more information on CORS and CORS headers, please consult the [MDN web documentation on CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#The_HTTP_response_headers).
>
> CORS 및 CORS 헤더에 대한 자세한 내용은 CORS의 [MDN 웹 문서](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#The_HTTP_response_headers) 를 참조하십시오 .



## 11.[Route Caching](https://laravel.com/docs/8.x/routing#route-caching)

When deploying your application to production, you should take advantage of Laravel's route cache. Using the route cache will drastically decrease the amount of time it takes to register all of your application's routes. To generate a route cache, execute the `route:cache` Artisan command:

애플리케이션을 프로덕션에 배포 할 때 Laravel의 경로 캐시를 활용해야합니다. 경로 캐시를 사용하면 애플리케이션의 모든 경로를 등록하는 데 걸리는 시간이 크게 줄어 듭니다. 경로 캐시를 생성하려면 `route:cache`Artisan 명령을 실행하십시오 .

```php
php artisan route:cache
```

After running this command, your cached routes file will be loaded on every request. Remember, if you add any new routes you will need to generate a fresh route cache. Because of this, you should only run the `route:cache` command during your project's deployment.

You may use the `route:clear` command to clear the route cache:

이 명령을 실행하면 캐시 된 경로 파일이 모든 요청에로드됩니다. 새 경로를 추가하는 경우 새 경로 캐시를 생성해야합니다. 따라서 `route:cache`프로젝트 배포 중에 만 명령을 실행해야 합니다.

`route:clear`명령을 사용하여 경로 캐시를 지울 수 있습니다 .

```php
php artisan route:clear
```