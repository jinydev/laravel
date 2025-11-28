---
layout: geeks
title: "주소란? URL과 웹 주소 체계"
description: "웹 주소가 무엇인지, URL 구조를 실생활 비유로 쉽게 이해하기"
keywords: "URL, 웹 주소, 주소 체계, 라우팅 기초"
---

# 🏠 주소란? URL과 웹 주소 체계

**목표**: 웹 주소(URL)가 무엇인지 이해하고, 구조를 파악하기

## 🏢 실생활 주소와 웹 주소

### 아파트 주소 시스템

여러분이 친구 집을 찾아간다고 생각해보세요:

```
📮 실제 주소
행복아파트 101동 505호
서울시 강남구 역삼동 123-45
```

**주소의 구성 요소:**
- **서울시** → 큰 지역 (도시)
- **강남구** → 구역 (지역)
- **역삼동** → 세부 지역 (동네)
- **행복아파트** → 건물 이름
- **101동** → 동 번호
- **505호** → 호수

### 웹 주소(URL) 시스템

웹사이트도 비슷한 주소 체계를 가져요:

```
🌐 웹 주소 (URL)
https://mystore.com/products/123/reviews
```

**URL의 구성 요소:**
- **https://** → 프로토콜 (통신 방법)
- **mystore.com** → 도메인 (사이트 이름)
- **/products** → 카테고리 (상품 섹션)
- **/123** → 특정 항목 (상품 번호)
- **/reviews** → 세부 페이지 (리뷰)

## 🗺️ URL 구조 완전 분석

### 기본 URL 구조

```
https://www.example.com:8080/shop/products/123?category=electronics#reviews
│    │ │   │           │    │              │   │                 │
│    │ │   │           │    │              │   └─ Fragment (앵커)
│    │ │   │           │    │              └─ Query String (검색 조건)
│    │ │   │           │    └─ Path (경로)
│    │ │   │           └─ Port (포트 번호)
│    │ │   └─ Domain (도메인)
│    │ └─ Subdomain (서브도메인)
│    └─ Protocol (프로토콜)
```

### 각 부분 설명

**🌐 프로토콜 (Protocol)**
```
http://  → 보안이 없는 일반 통신
https:// → 보안이 적용된 안전한 통신 ✨
ftp://   → 파일 전송용
```

**🏠 도메인 (Domain)**
```
google.com     → 구글
youtube.com    → 유튜브
github.com     → 깃허브
localhost      → 내 컴퓨터 (개발용)
```

**🚪 포트 (Port)**
```
:80    → HTTP 기본 포트 (생략 가능)
:443   → HTTPS 기본 포트 (생략 가능)
:8000  → Laravel 개발 서버 기본 포트
:3000  → Node.js 개발 서버
```

**📁 경로 (Path)**
```
/              → 홈페이지 (루트)
/about         → 소개 페이지
/products      → 상품 목록
/products/123  → 123번 상품
/user/profile  → 사용자 프로필
```

## 🏠 주소로 길 찾기

### 아파트에서 집 찾기 과정

```
🚶‍♂️ 친구 집 찾아가기
1. 아파트 단지 입구 도착    → example.com (사이트 접속)
2. 안내판에서 101동 확인    → /user (사용자 영역 찾기)
3. 엘리베이터로 5층 이동    → /profile (프로필 섹션)
4. 505호 초인종 누르기     → 최종 페이지 요청
5. 친구가 문 열어줌        → 서버가 페이지 보여줌
```

### 웹에서 페이지 찾기 과정

```
🌐 웹페이지 접속하기
1. 브라우저에 URL 입력      → https://mystore.com
2. 서버 찾아가기           → DNS가 서버 위치 찾기
3. 경로 따라가기           → /products/123
4. 페이지 요청하기         → HTTP 요청 전송
5. 결과 받기              → 서버가 HTML 응답
```

## 📍 Laravel에서의 주소 체계

### routes/web.php의 역할

Laravel에서 `routes/web.php` 파일은 **웹사이트의 주소록**이에요:

```php
<?php
use Illuminate\Support\Facades\Route;

// 홈페이지: /
Route::get('/', function () {
    return '환영합니다! 홈페이지입니다.';
});

// 소개 페이지: /about
Route::get('/about', function () {
    return '회사 소개 페이지입니다.';
});

// 상품 목록: /products
Route::get('/products', function () {
    return '상품 목록 페이지입니다.';
});
```

### 동적 주소 만들기

```php
// 사용자별 페이지: /user/김철수, /user/이영희
Route::get('/user/{name}', function ($name) {
    return "안녕하세요, {$name}님!";
});

// 상품 상세: /products/1, /products/2
Route::get('/products/{id}', function ($id) {
    return "상품 {$id}번의 상세 정보입니다.";
});

// 복합 주소: /category/전자제품/products/123
Route::get('/category/{category}/products/{id}', function ($category, $id) {
    return "{$category} 카테고리의 {$id}번 상품입니다.";
});
```

## 🎯 주소 설계 원칙

### 좋은 URL 설계

**✅ 의미있는 주소**
```
/products/laptops       (노트북 카테고리)
/user/profile          (사용자 프로필)
/blog/2023/12/25       (2023년 12월 25일 블로그)
```

**✅ 계층 구조**
```
/shop                  (쇼핑몰)
/shop/categories       (카테고리 목록)
/shop/categories/electronics  (전자제품 카테고리)
```

**✅ 짧고 간결한 주소**
```
/about                 (소개)
/contact              (연락처)
/help                 (도움말)
```

### 피해야 할 URL

**❌ 의미없는 주소**
```
/page.php?id=123&type=product&cat=electronics
/index.html#section2
/admin_panel_v2_final.asp
```

**❌ 너무 긴 주소**
```
/this/is/a/very/long/url/that/nobody/can/remember/easily
```

**❌ 특수문자 남용**
```
/상품목록?카테고리=전자제품&가격=100000~200000
```

## 🌐 다양한 주소 패턴

### RESTful URL 패턴

웹 개발에서 널리 사용되는 주소 패턴:

```
GET    /products        → 상품 목록 보기
GET    /products/123    → 123번 상품 보기
POST   /products        → 새 상품 만들기
PUT    /products/123    → 123번 상품 수정
DELETE /products/123    → 123번 상품 삭제
```

### Laravel Route 패턴

```php
// 기본 패턴
Route::get('/simple', function() { /* */ });

// 매개변수가 있는 패턴
Route::get('/user/{id}', function($id) { /* */ });

// 선택적 매개변수
Route::get('/posts/{id?}', function($id = null) { /* */ });

// 정규식 제약
Route::get('/user/{id}', function($id) {
    // id는 숫자만 허용
})->where('id', '[0-9]+');
```

## 🔍 실습: URL 분석하기

다음 URL들을 분석해보세요:

### 예제 1: 온라인 쇼핑몰
```
https://shop.example.com/category/electronics/products/123?color=black&size=medium#reviews
```

**분석:**
- **프로토콜**: https (보안 연결)
- **서브도메인**: shop (쇼핑 전용)
- **도메인**: example.com
- **경로**: /category/electronics/products/123
- **쿼리**: ?color=black&size=medium (검은색, 중간 크기)
- **앵커**: #reviews (리뷰 섹션으로 이동)

### 예제 2: 블로그 게시물
```
https://blog.mysite.com/2023/12/programming/laravel-routing-guide
```

**분석:**
- **의미**: 2023년 12월 프로그래밍 카테고리의 Laravel 라우팅 가이드
- **구조**: 연도/월/카테고리/제목
- **특징**: SEO 친화적인 URL 구조

## 🎉 정리하기

**주소(URL)의 핵심:**
- 🏠 **구조**: 실제 주소처럼 계층적 구조
- 📍 **의미**: 주소만 봐도 내용을 알 수 있어야 함
- 🎯 **목적**: 원하는 페이지를 정확히 찾아가는 것

**Laravel에서:**
- 📋 **routes/web.php**: 웹사이트의 주소록
- 🔀 **라우팅**: URL과 실제 기능을 연결
- ⚙️ **동적 주소**: 매개변수로 유연한 주소 생성

이제 웹 주소가 **어떻게 구성되는지**, **어떤 의미를 가지는지** 완전히 이해했습니다! 🎯

---

💡 **다음 단계**: [라우트의 필요성](라우트의필요성.html)에서 왜 라우팅 시스템이 꼭 필요한지 알아보세요!
