# URL Generation

- [Introduction](https://laravel.com/docs/8.x/urls#introduction)
- The Basics
  - [Generating URLs](https://laravel.com/docs/8.x/urls#generating-urls)
  - [Accessing The Current URL](https://laravel.com/docs/8.x/urls#accessing-the-current-url)
- URLs For Named Routes
  - [Signed URLs](https://laravel.com/docs/8.x/urls#signed-urls)
- [URLs For Controller Actions](https://laravel.com/docs/8.x/urls#urls-for-controller-actions)
- [Default Values](https://laravel.com/docs/8.x/urls#default-values)



## [Introduction](https://laravel.com/docs/8.x/urls#introduction)

Laravel provides several helpers to assist you in generating URLs for your application. 

These helpers are primarily helpful when building links in your templates and API responses, or when generating redirect responses to another part of your application.

라 라벨은 애플리케이션의 URL을 생성하는 데 도움이되는 몇 가지 도우미를 제공합니다. 

이러한 도우미는 주로 템플릿 및 API 응답에 링크를 빌드하거나 애플리케이션의 다른 부분에 대한 리디렉션 응답을 생성 할 때 유용합니다.



## [The Basics](https://laravel.com/docs/8.x/urls#the-basics)



### [Generating URLs](https://laravel.com/docs/8.x/urls#generating-urls)

The `url` helper may be used to generate arbitrary URLs for your application. 

The generated URL will automatically use the scheme (HTTP or HTTPS) and host from the current request being handled by the application:

`url`도우미는 응용 프로그램에 대한 임의의 URL을 생성하는 데 사용할 수 있습니다. 

생성 된 URL은 자동으로 스키마 (HTTP 또는 HTTPS)를 사용하고 애플리케이션에서 처리중인 현재 요청의 호스트를 사용합니다.

```php
$post = App\Models\Post::find(1);

echo url("/posts/{$post->id}");

// http://example.com/posts/1
```



### [Accessing The Current URL](https://laravel.com/docs/8.x/urls#accessing-the-current-url)

If no path is provided to the `url` helper, an `Illuminate\Routing\UrlGenerator` instance is returned, allowing you to access information about the current URL:

`url`도우미에 대한 경로가 제공되지 않으면 `Illuminate\Routing\UrlGenerator`인스턴스가 반환되어 현재 URL에 대한 정보에 액세스 할 수 있습니다.

```php
// Get the current URL without the query string...
echo url()->current();

// Get the current URL including the query string...
echo url()->full();

// Get the full URL for the previous request...
echo url()->previous();
```

Each of these methods may also be accessed via the `URL` [facade](https://laravel.com/docs/8.x/facades):

이러한 각 메서드는 `URL` [파사드](https://laravel.com/docs/8.x/facades) 를 통해 액세스 할 수도 있습니다 .

```php
use Illuminate\Support\Facades\URL;

echo URL::current();
```



## [URLs For Named Routes](https://laravel.com/docs/8.x/urls#urls-for-named-routes)

The `route` helper may be used to generate URLs to [named routes](https://laravel.com/docs/8.x/routing#named-routes). 

Named routes allow you to generate URLs without being coupled to the actual URL defined on the route. 

Therefore, if the route's URL changes, no changes need to be made to your calls to the `route` function. For example, imagine your application contains a route defined like the following:

`route`도우미는에 URL을 생성하기 위해 사용될 수있다 [라는 이름의 경로를](https://laravel.com/docs/8.x/routing#named-routes) . 

명명 된 경로를 사용하면 경로에 정의 된 실제 URL에 연결하지 않고도 URL을 생성 할 수 있습니다. 

따라서 경로의 URL이 변경 되더라도 `route`함수 호출을 변경할 필요가 없습니다 . 예를 들어 애플리케이션에 다음과 같이 정의 된 경로가 포함되어 있다고 가정합니다.

```php
Route::get('/post/{post}', function () {
    //
})->name('post.show');
```

To generate a URL to this route, you may use the `route` helper like so:

물론, `route`도우미는 여러 매개 변수가있는 경로에 대한 URL을 생성하는 데 사용할 수도 있습니다.

```php
echo route('post.show', ['post' => 1]);

// http://example.com/post/1
```

Of course, the `route` helper may also be used to generate URLs for routes with multiple parameters:

물론, `route`도우미는 여러 매개 변수가있는 경로에 대한 URL을 생성하는 데 사용할 수도 있습니다.



```php
Route::get('/post/{post}/comment/{comment}', function () {
    //
})->name('comment.show');

echo route('comment.show', ['post' => 1, 'comment' => 3]);

// http://example.com/post/1/comment/3
```

Any additional array elements that do not correspond to the route's definition parameters will be added to the URL's query string:

경로의 정의 매개 변수에 해당하지 않는 추가 배열 요소는 URL의 쿼리 문자열에 추가됩니다.

```php
echo route('post.show', ['post' => 1, 'search' => 'rocket']);

// http://example.com/post/1?search=rocket
```



#### [Eloquent Models](https://laravel.com/docs/8.x/urls#eloquent-models)

You will often be generating URLs using the primary key of [Eloquent models](https://laravel.com/docs/8.x/eloquent). 

For this reason, you may pass Eloquent models as parameter values. 

The `route` helper will automatically extract the model's primary key:

[Eloquent 모델](https://laravel.com/docs/8.x/eloquent) 의 기본 키를 사용하여 URL을 생성하는 경우가 많습니다 . 

이러한 이유로 Eloquent 모델을 매개 변수 값으로 전달할 수 있습니다. 

`route`도우미가 자동으로 모델의 기본 키를 추출합니다 :

```php
echo route('post.show', ['post' => $post]);
```



### [Signed URLs](https://laravel.com/docs/8.x/urls#signed-urls)

Laravel allows you to easily create "signed" URLs to named routes. 

These URLs have a "signature" hash appended to the query string which allows Laravel to verify that the URL has not been modified since it was created. 

Signed URLs are especially useful for routes that are publicly accessible yet need a layer of protection against URL manipulation.

Laravel을 사용하면 명명 된 경로에 대한 "서명 된"URL을 쉽게 만들 수 있습니다. 

이러한 URL에는 쿼리 문자열에 "서명"해시가 추가되어있어 Laravel이 URL이 생성 된 이후 수정되지 않았 음을 확인할 수 있습니다. 

서명 된 URL은 공개적으로 액세스 할 수 있지만 URL 조작에 대한 보호 계층이 필요한 경로에 특히 유용합니다.



For example, you might use signed URLs to implement a public "unsubscribe" link that is emailed to your customers. 

To create a signed URL to a named route, use the `signedRoute` method of the `URL` facade:

예를 들어 서명 된 URL을 사용하여 고객에게 이메일로 전송되는 공개 "구독 취소"링크를 구현할 수 있습니다. 

명명 된 경로에 대한 서명 된 URL을 생성하려면 파사드 의 `signedRoute`메서드를 사용합니다 `URL`.



```php
use Illuminate\Support\Facades\URL;

return URL::signedRoute('unsubscribe', ['user' => 1]);
```

If you would like to generate a temporary signed route URL that expires after a specified amount of time, you may use the `temporarySignedRoute` method. 

When Laravel validates a temporary signed route URL, it will ensure that the expiration timestamp that is encoded into the signed URL has not elapsed:

지정된 시간이 지나면 만료되는 임시 서명 된 경로 URL을 생성하려면 `temporarySignedRoute`방법을 사용할 수 있습니다 . 

Laravel이 임시 서명 된 라우트 URL의 유효성을 검사 할 때 서명 된 URL로 인코딩 된 만료 타임 스탬프가 경과하지 않았는지 확인합니다.

```php
use Illuminate\Support\Facades\URL;

return URL::temporarySignedRoute(
    'unsubscribe', now()->addMinutes(30), ['user' => 1]
);
```



#### [Validating Signed Route Requests](https://laravel.com/docs/8.x/urls#validating-signed-route-requests)

To verify that an incoming request has a valid signature, you should call the `hasValidSignature` method on the incoming `Request`:

들어오는 요청에 유효한 서명이 있는지 확인하려면 들어오는 `hasValidSignature`메서드를 호출해야합니다 `Request`.

```php
use Illuminate\Http\Request;

Route::get('/unsubscribe/{user}', function (Request $request) {
    if (! $request->hasValidSignature()) {
        abort(401);
    }

    // ...
})->name('unsubscribe');
```

Alternatively, you may assign the `Illuminate\Routing\Middleware\ValidateSignature` [middleware](https://laravel.com/docs/8.x/middleware) to the route. If it is not already present, you should assign this middleware a key in your HTTP kernel's `routeMiddleware` array:

또는 `Illuminate\Routing\Middleware\ValidateSignature` [미들웨어](https://laravel.com/docs/8.x/middleware) 를 경로에 할당 할 수 있습니다 . 아직없는 경우이 미들웨어에 HTTP 커널 `routeMiddleware`배열 의 키를 할당해야합니다 .

```php
/**
 * The application's route middleware.
 *
 * These middleware may be assigned to groups or used individually.
 *
 * @var array
 */
protected $routeMiddleware = [
    'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
];
```

Once you have registered the middleware in your kernel, you may attach it to a route. 

If the incoming request does not have a valid signature, the middleware will automatically return a `403` HTTP response:

커널에 미들웨어를 등록한 후에는 경로에 연결할 수 있습니다. 

수신 요청에 유효한 서명이없는 경우 미들웨어는 자동으로 `403`HTTP 응답을 반환합니다 .

```php
Route::post('/unsubscribe/{user}', function (Request $request) {
    // ...
})->name('unsubscribe')->middleware('signed');
```



## [URLs For Controller Actions](https://laravel.com/docs/8.x/urls#urls-for-controller-actions)

The `action` function generates a URL for the given controller action:

이 `action`함수는 주어진 컨트롤러 작업에 대한 URL을 생성합니다.

```php
use App\Http\Controllers\HomeController;

$url = action([HomeController::class, 'index']);
```

If the controller method accepts route parameters, you may pass an associative array of route parameters as the second argument to the function:

컨트롤러 메소드가 경로 매개 변수를 허용하는 경우 경로 매개 변수의 연관 배열을 함수의 두 번째 인수로 전달할 수 있습니다.

```php
$url = action([UserController::class, 'profile'], ['id' => 1]);
```



## [Default Values](https://laravel.com/docs/8.x/urls#default-values)

For some applications, you may wish to specify request-wide default values for certain URL parameters. 

For example, imagine many of your routes define a `{locale}` parameter:

일부 애플리케이션의 경우 특정 URL 매개 변수에 대해 요청 전체 기본값을 지정할 수 있습니다. 

예를 들어 많은 경로가 `{locale}`매개 변수를 정의한다고 가정 해 보겠습니다 .

```php
Route::get('/{locale}/posts', function () {
    //
})->name('post.index');
```

It is cumbersome to always pass the `locale` every time you call the `route` helper.

 So, you may use the `URL::defaults` method to define a default value for this parameter that will always be applied during the current request. 

You may wish to call this method from a [route middleware](https://laravel.com/docs/8.x/middleware#assigning-middleware-to-routes) so that you have access to the current request:

도우미 `locale`를 부를 때마다 항상 통과하는 것은 번거 롭습니다 `route`. 

따라서이 `URL::defaults`메서드를 사용하여 현재 요청 중에 항상 적용되는이 매개 변수의 기본값을 정의 할 수 있습니다 . 

현재 요청에 액세스 할 수 있도록 [경로 미들웨어](https://laravel.com/docs/8.x/middleware#assigning-middleware-to-routes) 에서이 메서드를 호출 할 수 있습니다 .

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\URL;

class SetDefaultLocaleForUrls
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Illuminate\Http\Response
     */
    public function handle($request, Closure $next)
    {
        URL::defaults(['locale' => $request->user()->locale]);

        return $next($request);
    }
}
```

Once the default value for the `locale` parameter has been set, you are no longer required to pass its value when generating URLs via the `route` helper.

`locale`매개 변수 의 기본값 이 설정되면 `route`헬퍼 를 통해 URL을 생성 할 때 더 이상 값을 전달할 필요가 없습니다 .



#### [URL Defaults & Middleware Priority](https://laravel.com/docs/8.x/urls#url-defaults-middleware-priority)

Setting URL default values can interfere with Laravel's handling of implicit model bindings. 

Therefore, you should [prioritize your middleware](https://laravel.com/docs/8.x/middleware#sorting-middleware) that set URL defaults to be executed before Laravel's own `SubstituteBindings` middleware. 

You can accomplish this by making sure your middleware occurs before the `SubstituteBindings` middleware within the `$middlewarePriority` property of your application's HTTP kernel.

URL 기본값을 설정하면 Laravel의 암시 적 모델 바인딩 처리를 방해 할 수 있습니다. 

따라서 URL 기본값을 설정 한 [미들웨어](https://laravel.com/docs/8.x/middleware#sorting-middleware) 가 Laravel의 자체 `SubstituteBindings`미들웨어 보다 먼저 실행되도록 [우선 순위를 지정해야합니다](https://laravel.com/docs/8.x/middleware#sorting-middleware) . 

애플리케이션의 HTTP 커널 속성 `SubstituteBindings`내에서 미들웨어가 미들웨어보다 먼저 발생하도록하여이를 수행 할 수 있습니다 `$middlewarePriority`.



The `$middlewarePriority` property is defined in the base `Illuminate\Foundation\Http\Kernel` class. 

You may copy its definition from that class and overwrite it in your application's HTTP kernel in order to modify it:

`$middlewarePriority`속성은 기본에 정의 된 `Illuminate\Foundation\Http\Kernel`클래스입니다. 

해당 클래스에서 정의를 복사하고이를 수정하기 위해 애플리케이션의 HTTP 커널에서 덮어 쓸 수 있습니다.

```php
/**
 * The priority-sorted list of middleware.
 *
 * This forces non-global middleware to always be in the given order.
 *
 * @var array
 */
protected $middlewarePriority = [
    // ...
     \App\Http\Middleware\SetDefaultLocaleForUrls::class,
     \Illuminate\Routing\Middleware\SubstituteBindings::class,
     // ...
];
```