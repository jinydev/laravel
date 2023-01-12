---
layout: home
---

<jiny-mark-down>설치</jiny-mark-down>
<br>

# 라라벨 설치

먼저 라라벨 설치방법에 대해서 알아 보도록 하겠습니다. 
라라벨은 PHP언어로 작성된 웹 프레임워크 입니다.

<jiny-mark-down>컴포저</jiny-mark-down>
<br>

## 컴포저
컴포저를 이용하면 다양한 PHP 응용 프로그램과 패키지를 설치 가능합니다.
먼저 getcomposer.org 사이트로 이동하여 컴포저를 설치해 주세요.
> 윈도우의 경우 composer-setup.exe를 다운로드 받아 설치를 하고, 리눅스나 맥을 사용하는 경우에는 커멘트 명령을 입력하면 됩니다.

```
composer
```
`composer`명령을 실행하여 정상적으로 컴포저가 설치되었는지 확인을 합니다.

<jiny-mark-down>프로젝트 생성</jiny-mark-down>
<br>

## 프로젝트 생성
컴포저를 이용하여 라라밸 프로젝트를 생성합니다.

```text
composer create-project --prefer-dist laravel/laravel 프로젝트명
```

프로젝트 생성이 완성이 되면 프로젝트 폴더로 이동합니다.

```
cd 프로젝트명
```

<jiny-mark-down>서버실행</jiny-mark-down>
<br>

## 서버 실행
PHP는 별도의 웹서버 도움 없이 로컬서버로 실행을 하여 개발을 진행할 수 있습니다. 일반적으로 PHP에 `-S` 옵션을 이용하여 자체 로컬 서버를 실행할 수 있습니다.

```text
$ php -S localhost:8000 -t ./public/
```

라라벨은 PHP 옵션을 통하여 실행보다 더 간단하게 서버를 기동할 수 있도록 `아티산` 명령을 제공합니다.
다음과 같이 입력하면 보다 쉽게 로컬 서버를 실행합니다.

```text
php artisan serve
``` 

브라웆에서 다음과 같이 접속 주소를 입력하여 라라벨 환영 페이지가 출력이 되는지 확인을 합니다.

```text
http://localhost:8000/
```

