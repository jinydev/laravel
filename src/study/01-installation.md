---
layout: study
---

# 라라벨 설치
<div class="alert alert-soft-dark" role="alert">
참조: https://www.youtube.com/watch?v=RyYKXyvM3D4&list=PLz_YkiqIHesvWMGfavV8JFDQRJycfHUvD&index=1&t=2s
</div>

먼저 라라벨 설치방법에 대해서 알아 보도록 하겠습니다. 
라라벨은 PHP언어로 작성된 웹 프레임워크 입니다.

## 컴포저
컴포저를 이용하면 다양한 PHP 응용 프로그램과 패키지를 설치 가능합니다.
먼저 getcomposer.org 사이트로 이동하여 컴포저를 설치해 주세요.
> 윈도우의 경우 composer-setup.exe를 다운로드 받아 설치를 하고, 리눅스나 맥을 사용하는 경우에는 커멘트 명령을 입력하면 됩니다.


```
composer
```
`composer`명령을 실행하여 정상적으로 컴포저가 설치되었는지 확인을 합니다.

## 프로젝트 생성
컴포저를 이용하여 라라밸 프로젝트를 생성합니다.

```
composer create-project --preper-dist laravel/laravel 프로젝트명
```

프로젝트 생성이 완성이 되면 프로젝트 폴더로 이동합니다.

```
cd 프로젝트명
```

라라벨 `아티산` 명령을 통하여 로컬 서버를 실행합니다.

```
php artisan serve
``` 

브라우저로 접속하면 라라벨 환영 페이지가 출력되는 것을 확인이 가능합니다. 
