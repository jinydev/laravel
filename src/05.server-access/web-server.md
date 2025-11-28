---
layout: geeks
title: "웹서버란? 완전 정복"
description: "웹서버의 개념부터 종류, 설정까지 완전 마스터"
keywords: "웹서버, Apache, Nginx, PHP-FPM, 서버 종류"
---

# 🖥️ 웹서버란? 완전 정복

**목표**: 웹서버가 무엇인지 이해하고, 종류별 특징과 설정 방법 마스터

## 🤔 웹서버의 정의

### 웹서버란?

**웹서버**는 인터넷을 통해 웹페이지를 제공하는 컴퓨터 프로그램입니다.

```
🏪 웹서버 = 인터넷 상점
├── 📋 메뉴판 (웹페이지)를 준비하고
├── 🛎️ 고객 주문(HTTP 요청)을 받아서
├── 👨‍🍳 요리사(PHP/Laravel)에게 요리를 시키고
└── 🍽️ 완성된 요리(HTML)를 고객에게 서빙
```

### 웹서버가 하는 일

1. **🔍 요청 받기**: 브라우저에서 보낸 HTTP 요청 수신
2. **📄 파일 찾기**: 요청된 웹페이지나 파일 위치 확인
3. **⚙️ 프로그램 실행**: PHP/Laravel 코드 실행 (필요한 경우)
4. **📤 응답 보내기**: HTML, CSS, JS 등을 브라우저로 전송

## 🌐 웹서버의 종류

### 주요 웹서버 소프트웨어

```
🌐 주요 웹서버들
├── 🟠 Apache HTTP Server
│   ├── 가장 오래되고 안정적
│   ├── 설정이 쉬움 (.htaccess)
│   └── PHP와 완벽 호환
│
├── 🟢 Nginx (엔진엑스)
│   ├── 빠른 성능, 적은 메모리 사용
│   ├── 대용량 트래픽 처리 우수
│   └── 역방향 프록시로도 사용
│
├── ⚡ LiteSpeed
│   ├── Apache 호환 + 빠른 성능
│   └── 상용 라이선스
│
└── 🔷 Microsoft IIS
    ├── Windows 전용
    └── ASP.NET과 최적화
```

### Apache vs Nginx 비교

| 특징 | Apache | Nginx |
|------|--------|-------|
| **성능** | 중간 | 높음 |
| **메모리 사용** | 많음 | 적음 |
| **설정 난이도** | 쉬움 | 보통 |
| **모듈 시스템** | 풍부함 | 제한적 |
| **PHP 연동** | mod_php 내장 | FastCGI 필수 |
| **.htaccess** | 지원 | 미지원 |
| **대용량 트래픽** | 제한적 | 우수 |

## 📄 정적 파일 vs 동적 파일

### 정적 파일 (Static Files)

```html
<!-- index.html - 항상 같은 내용 -->
<!DOCTYPE html>
<html>
<head>
    <title>정적 페이지</title>
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>이 내용은 항상 같아요</p>
</body>
</html>
```

**특징:**
- ✅ 빠른 속도
- ✅ 서버 부하 적음
- ❌ 상호작용 불가
- ❌ 개인화 불가

### 동적 파일 (Dynamic Files)

```php
<!-- index.php - 실행할 때마다 다른 내용 -->
<!DOCTYPE html>
<html>
<head>
    <title>동적 페이지</title>
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>현재 시간: <?= date('Y-m-d H:i:s') ?></p>
    <p>랜덤 숫자: <?= rand(1, 100) ?></p>
</body>
</html>
```

**특징:**
- ✅ 실시간 데이터
- ✅ 사용자 맞춤 콘텐츠
- ❌ 서버 부하 증가
- ❌ 처리 시간 필요

## 🔗 웹서버와 PHP의 협업

### 기본 동작 과정

```
🤝 웹서버와 PHP의 협업
1. 브라우저: "index.php 파일 요청"
2. 웹서버: "PHP 파일이네? PHP 인터프리터야!"
3. PHP: "코드 실행해서 HTML 생성"
4. 웹서버: "생성된 HTML을 브라우저에게 전송"
```

### PHP 실행 방식들

```
📡 PHP 실행 방식들

1. mod_php (Apache 모듈)
   ├── Apache와 PHP가 하나로 합쳐짐
   ├── 빠른 시작
   └── 메모리 사용량 큼

2. PHP-FPM (FastCGI Process Manager)
   ├── PHP가 별도 프로세스로 실행
   ├── 안정성 높음
   ├── 메모리 효율적
   └── Nginx와 완벽 호환

3. CGI (Common Gateway Interface)
   ├── 요청마다 새 프로세스 생성
   ├── 매우 느림
   └── 현재는 거의 사용 안함
```

### PHP-FPM의 장점

**🚀 PHP-FPM (FastCGI Process Manager)**
- **성능**: 미리 실행된 프로세스 재사용으로 빠른 응답
- **안정성**: PHP 오류가 웹서버 전체에 영향 안줌
- **확장성**: 프로세스 수 동적 조절 가능
- **모니터링**: 상태 확인 및 관리 기능 제공

## 🌍 운영환경 웹서버 설정

### Apache + PHP 설정

**1. Apache 가상호스트 설정**
```apache
# /etc/apache2/sites-available/laravel.conf
<VirtualHost *:80>
    ServerName example.com
    DocumentRoot /var/www/laravel/public

    <Directory /var/www/laravel/public>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/laravel_error.log
    CustomLog ${APACHE_LOG_DIR}/laravel_access.log combined
</VirtualHost>
```

**2. .htaccess 파일 (public 폴더)**
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On

    # Laravel 프론트 컨트롤러로 모든 요청 전달
    RewriteRule ^(.*)$ index.php [QSA,L]
</IfModule>
```

**3. Apache 설정 활성화**
```bash
# 사이트 활성화
sudo a2ensite laravel.conf

# 모드 활성화
sudo a2enmod rewrite

# Apache 재시작
sudo systemctl restart apache2
```

### Nginx + PHP-FPM 설정

**1. Nginx 설정 파일**
```nginx
# /etc/nginx/sites-available/laravel
server {
    listen 80;
    server_name example.com;
    root /var/www/laravel/public;
    index index.php;

    # Gzip 압축
    gzip on;
    gzip_types text/css application/javascript text/plain application/xml;

    # 정적 파일 캐싱
    location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1M;
        add_header Cache-Control "public, immutable";
    }

    # Laravel 라우팅
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    # PHP 처리
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    # 숨김 파일 접근 차단
    location ~ /\. {
        deny all;
    }
}
```

**2. Nginx 설정 활성화**
```bash
# 심링크 생성
sudo ln -s /etc/nginx/sites-available/laravel /etc/nginx/sites-enabled/

# 설정 테스트
sudo nginx -t

# Nginx 재시작
sudo systemctl restart nginx
```

## 🔧 웹서버 성능 최적화

### Apache 최적화

```apache
# /etc/apache2/mods-enabled/mpm_prefork.conf
<IfModule mpm_prefork_module>
    StartServers          8
    MinSpareServers       5
    MaxSpareServers      20
    ServerLimit         256
    MaxRequestWorkers   256
    MaxConnectionsPerChild 10000
</IfModule>
```

### Nginx 최적화

```nginx
# /etc/nginx/nginx.conf
worker_processes auto;
worker_connections 1024;

http {
    # 버퍼 크기 최적화
    client_max_body_size 20M;
    client_body_buffer_size 128k;

    # Keepalive 설정
    keepalive_timeout 30;
    keepalive_requests 100;

    # 압축 설정
    gzip on;
    gzip_comp_level 6;
    gzip_min_length 1000;
    gzip_types text/plain text/css application/json application/javascript;
}
```

### PHP-FPM 최적화

```ini
; /etc/php/8.2/fpm/pool.d/www.conf
[www]
pm = dynamic
pm.max_children = 50
pm.start_servers = 5
pm.min_spare_servers = 5
pm.max_spare_servers = 35
pm.max_requests = 500

; 메모리 제한
php_admin_value[memory_limit] = 256M
```

## 🛡️ 보안 설정

### Apache 보안

```apache
# 서버 정보 숨기기
ServerTokens Prod
ServerSignature Off

# 디렉토리 리스팅 비활성화
Options -Indexes

# 위험한 파일 접근 차단
<Files ~ "^\.">
    Require all denied
</Files>
```

### Nginx 보안

```nginx
# 서버 정보 숨기기
server_tokens off;

# 위험한 파일 접근 차단
location ~ /\.(ht|git|env) {
    deny all;
    return 404;
}

# Rate Limiting
limit_req_zone $binary_remote_addr zone=login:10m rate=1r/s;
location /login {
    limit_req zone=login burst=5;
}
```

## 📊 웹서버 모니터링

### Apache 상태 확인

```bash
# Apache 프로세스 확인
sudo systemctl status apache2

# 실시간 로그 확인
sudo tail -f /var/log/apache2/access.log

# 설정 테스트
sudo apache2ctl configtest
```

### Nginx 상태 확인

```bash
# Nginx 프로세스 확인
sudo systemctl status nginx

# 실시간 로그 확인
sudo tail -f /var/log/nginx/access.log

# 설정 테스트
sudo nginx -t
```

### 성능 측정 도구

```bash
# Apache Bench (ab)
ab -n 1000 -c 10 http://example.com/

# Siege
siege -c 10 -t 30s http://example.com/

# wrk (고성능 테스트)
wrk -t 4 -c 100 -d 30s http://example.com/
```

## 🎯 웹서버 선택 가이드

### 상황별 추천

**📊 중소 규모 사이트**
- **Apache**: 설정 간편, 문서 풍부
- **장점**: .htaccess 지원, 모듈 다양
- **단점**: 메모리 사용량 높음

**🚀 대용량 트래픽 사이트**
- **Nginx**: 고성능, 저메모리
- **장점**: 동시 접속 처리 우수
- **단점**: 설정 복잡, 모듈 제한

**💰 상용 서비스**
- **LiteSpeed**: Apache 호환 + 고성능
- **장점**: 둘의 장점 결합
- **단점**: 라이선스 비용

## 🚀 다음 단계

웹서버를 이해했다면:

1. **[HTTP 통신 이해하기](http.html)** - 브라우저와 서버의 대화법
2. **[🍯 라우팅 맛보기](../04-01.route-taste/index.html)** - URL과 페이지 연결
3. **[Laravel 개발 환경](../02.Setup/index.html)** - 실제 개발환경 구축

## 🎉 정리하며...

**웹서버의 핵심:**
- 🖥️ **정의**: 웹페이지를 제공하는 소프트웨어
- ⚙️ **역할**: HTTP 요청 처리하고 응답 생성
- 🔧 **종류**: Apache(안정), Nginx(고성능), IIS(윈도우)
- 📄 **처리**: 정적 파일 직접 제공, 동적 파일은 PHP와 협업

**선택 기준:**
- 🏠 **개발/소규모**: Apache (설정 간편)
- 🏢 **운영/대규모**: Nginx + PHP-FPM (고성능)
- 💻 **윈도우 환경**: IIS (.NET 최적화)

이제 웹서버가 **어떻게 동작하는지**, **어떤 종류가 있는지**, **어떻게 설정하는지** 완전히 이해했습니다! 🔥

---

💡 **꿀팁**: 개발시에는 `php artisan serve`로 시작하고, 운영시에는 Nginx + PHP-FPM 조합을 추천합니다!
