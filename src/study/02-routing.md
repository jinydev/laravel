---
layout: home
---

# Routing
> https://www.youtube.com/watch?v=Du2yB9htD8k&list=PLz_YkiqIHesvWMGfavV8JFDQRJycfHUvD&index=2

라우트는 입력된 URL에 따라 화면 또는 코드를 실행한 결과를 출력 합니다.

루트 폴더에 routes 폴더안에 정의를 합니다.
web.php는 브라우저를 통하여 들어오는 요청을 처리합니다.
api.php는 ajax 또는 curl 등과 같이 서버로 요청되는 작업을 처리 합니다.

api 의 동작을 확인하기 위해서는 postman 과 같은 도구가 같이 필요로 합니다.

## 스크립트 실행
PHP로 작성된 스크립트를 실행을 하기 위해서는 서버에 등록된 스크립트의 주소를 직접 입력하는 것입니다.
예를 들어 `hello.php` 파일을 실행하기 위해서, 이 파일을 서버의 root에 등록을 한후 `http://localhost/hello.php`와 같이 파일명과 확장자를 같이 지정해 주어야 합니다.

먼저 hello.php 파일을 라라벨의 ./public 폴더에 만들어 줍니다. 라라벨은 외부로 공개된 root 폴더는 `./public`입니다. 이는 라라벨 프로젝트의 파일들을 보호하기 위하여 외부로 공개된 영역과 내부의 처리영역을 디렉터리 접근 권환으로 분리하기 때문입니다.

다음과 같이 코드를 작성해 봅니다.
```php
<?php
echo "Hello World";
```

작성후에 `http://localhost/hello.php`로 접속합니다.
정상적으로 Hello World 메시지가 브라우저에 출력되는 것을 볼 수 있습니다.

이는 오래전 부터 사용하던 PHP의 스트립트 실행방법 입니다. 하지만, 브라우저에서 직접 스크립트를 실행하게 되고, url에서 `.php`확장자를 같이 출력해야 하기 때문에 시스템 정보가 외부로 유출이 됩니다.


## url 연결
라라벨은 좀더 개선된 방법으로 url과 스크립트의 실행을 관리합니다. 웹서버의 환경설정인 ReWrite 기술을 응용하여 특정 url로 접속시 이를 처리하는 라우트 처리 루틴으로 이동하여 스크립트를 실행하는 것입니다.

이를 위해서 라라벨 root 에는 `routes`라는 폴더가 존재 합니다. 이 파일은 입력된 url에 대한 처리 루틴을 정의하는 용도로 사용이 됩니다.

hello와 유사한 `greeting` 이라는 메시지를 라라벨 라우팅을 통하여 출력하는 연습을 해보도록 합니다.

라라벨 `routes/web.php` 안에 다음과 같이 라우트 정보를 추가합니다.

```php
use Illuminate\Support\Facades\Route;

Route::get('/greeting', function () {
    return 'Hello Greeting';
});
```

다음 `http://localhost:8000/greeting`로 접속을 합니다. Hello Greeting 메시지가 브라우저에 잘 표시가 되는 것을 확인 할 수 있습니다.
결과적으로 보면 직접 스크립트를 실행하는 것과 같지만, 라우팅은 php 확장자를 지정하지 않는 다는 것입니다.

이렇게 지정한 url은 라우트 처리를 통하여 매칭된 결과를 반환 합니다.

위의 예제에서 url 주소에서 `/greeting` 부분과 일치할 경우, 함수의 결과를 반환 합니다.

```php
function () {
    return 'Hello Greeting';
}
```
함수는 인자로 전달되기 때문에 익명함수로 선언하고, 결과값은 텍스트 문자열을 리턴합니다.


## url 인자값 전송
사용자가 브라우저에서 서버로 값을 전송하는 방법은 URL을 통한 GET 방식의 호출과 HTTP Body를 통한 POST 전송뿐이었습니다.
하지만, 라라벨은 url의 주소를 기반으로 값을 전달할 수 있는 방법을 제공합니다.

```php
Route::get('/users/{name?}', function ($name=null) {
    return 'Hi '.$name;
});
```

### 입력 조건 제한
url을 통하여 특정값을 입력받을때 유효성 필터링을 적용할 수 있습니다. 이때에는 `where`메소드를 체인으로 연결합니다.

```php
Route::get('/users/{name?}', function ($name=null) {
    return 'Hi '.$name;
})->where('name','[a-zA-Z]+');
```

필터 조건은 정규표현식을 사용합니다. 위의 예제는 영문 문자열로 입력을 제한 하는 것입니다.

