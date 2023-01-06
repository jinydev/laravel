#  jinyPHP with Laravel
2021년 jinyPHP 프로젝트는 동작 프레임을 자체코드에서 라라벨로 변경을 하였습니다.

## 라라벨 설치
라라벨 기반의 지니PHP를 사용하기 위해서는 먼저 라라벨 프레임워크가 설치되어 있어야 합니다. 
라라벨은 다양한 방법으로 설치를 할 수 있으나, 완전한 로컬환경의 코드로 동작을 하는 방법으로 
컴포저 프로젝트 설치 방법을 추천합니다. 

터미널에서 컴포저 명령을 다음과 같이 실행합니다.
```bash
$ composer create-project --prefer-dist laravel/laravel 프로젝트명 버젼
```

> `composer` 명령을 사용하기 위해서는 PHP의 의존성 패키지 관리자 툴인 컴포저를 먼저 설치해 주셔야 합니다.


## 시작 패키지 설치하기
라라벨 프레임워크를 이용하여 보다 쉽게 프로젝트를 개발하기 위해서는 기본적으로 제공되는 몇개의 패키지를 설치해 주시면 좋습니다. 
라라벨의 기본 제공 패키지는 적은 코드로 고품질의 서비스를 개발하기 위한 완성된 코드를 제공합니다.


### 1.1 제트스트림 설치
지니PHP는 라라벨의 jetstream을 확장한 인증모듈과 기능을 제공합니다.

컴포저를 이용하여 jetstream을 설치합니다.
또한 livewire 패키지도 같이 설치 합니다.
```
composer require laravel/jetstream
php artisan jetstream:install livewire --teams
npm install && npm run dev
```

php artisan livewire:publish --config


### 2. css 및 javascript 컴파일
지니PHP 및 라라벨은 tailwind css를 지원합니다. 이를 위하여 테일윈드 css 프래임워크를 설치합니다.

npm을 통하여 tailwind 패키지를 설치합니다.
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

라라벨 mix를 통하여 asset을 컴파일 합니다. 다음과 같이 `webpack.mix.js`를 수정합니다.
파일명 및 위치 : /webpack.mix.js
```javascript
mix.js("resources/js/app.js", "public/js")
  .postCss("resources/css/app.css", "public/css", [
    require("tailwindcss"),
  ]);
```

```javascript
.browserSync("http://localhost:8000");
```


`tailwind.config.js` 파일을 수정합니다. content 배열을 추가합니다.
```
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

/resources/css/app.css 파일을 수정합니다.
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

이제 npm을 통하여 설정한 tailwind를 컴파일하여 적용합니다.

```
npm run dev
```

이렇게 컴파일된 asset은 blade 템플릿에서 적용할 수 있습니다.
```php
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
``` 

### 3. 데이터베이스
데이터베이스 계정 및 스키마를 생성합니다.
`.env`파일에서 데이터베이스 설정값을 입력합니다.

마이그레이션을 합니다.
```
php artisan migrate
```

### 4. 라라벨 서버 실행하기
```
php artisan serve
npm run watch
```