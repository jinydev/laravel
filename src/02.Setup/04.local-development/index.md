---
layout: geeks
title: "Laravel 로컬 개발 환경 완전 가이드"
description: "Laravel 프로젝트의 로컬 개발 환경 구성부터 고급 설정까지 체계적으로 안내"
category: 로컬 개발 환경
permalink: /02.Setup/04.local-development/
---

# Laravel 로컬 개발 환경 완전 가이드

Laravel 프로젝트를 효율적으로 개발하기 위한 **완전한 로컬 개발 환경 설정 가이드**입니다. 기본 설정부터 고급 최적화까지 단계별로 안내합니다.

## 📚 가이드 구성

### 🚀 기본 설정
**[01. 메인 개발 환경 구성](../04.local-development.html)**
- Laravel 개발 서버 실행하기
- 환경 설정 (.env) 구성
- 데이터베이스 연결 및 마이그레이션
- 프론트엔드 에셋 빌드

### 🔍 심화 학습
**[02. Laravel vs PHP 서버 비교](./artisan-vs-php-server.html)**
- Laravel artisan serve vs PHP 내장 서버 상세 비교
- 3단계 깊이 분석 (기본/설정/고급)
- 성능 및 메모리 사용량 실측 데이터
- 실무 환경별 권장사항

### 🛠️ 고급 설정 (준비중)
- 개발 도구 통합 (VS Code, PHPStorm)
- 디버깅 환경 최적화
- 테스팅 환경 구성
- 성능 모니터링 설정

## 🎯 빠른 시작 가이드

### 1분 만에 Laravel 서버 실행하기

```bash
# 1. Laravel 프로젝트 폴더로 이동
cd your-laravel-project

# 2. 의존성 확인 (최초 1회)
composer install
npm install

# 3. 환경 설정 확인
cp .env.example .env    # 최초 1회
php artisan key:generate

# 4. 데이터베이스 설정
php artisan migrate

# 5. 개발 서버 실행
php artisan serve
```

🎉 **완료!** http://localhost:8000에서 확인하세요!

### 병렬 개발 환경 실행

```bash
# 터미널 1: Laravel 서버
php artisan serve

# 터미널 2: 프론트엔드 에셋 감시
npm run watch

# 터미널 3: 큐 워커 (필요시)
php artisan queue:work
```

## 🔧 환경별 설정 가이드

### 로컬 개발 (.env.local)
```env
APP_ENV=local
APP_DEBUG=true
LOG_LEVEL=debug

DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite

CACHE_STORE=file
SESSION_DRIVER=file
QUEUE_CONNECTION=sync
```

### 팀 개발 (.env.team)
```env
APP_ENV=local
APP_DEBUG=true

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_DATABASE=team_project

CACHE_STORE=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis
```

## 💡 문제 해결 빠른 참조

| 문제 | 해결 방법 |
|------|-----------|
| 서버가 시작되지 않음 | `php --version`, PATH 확인 |
| 데이터베이스 연결 오류 | `.env` 파일의 DB 설정 확인 |
| npm 명령어 실행 안됨 | `node --version`, npm 재설치 |
| 권한 에러 | `chmod -R 755 storage bootstrap/cache` |
| 캐시 문제 | `php artisan optimize:clear` |

## 📊 성능 최적화 팁

### 개발 서버 최적화
```bash
# OPcache 활성화
php artisan serve -d opcache.enable=1

# 메모리 제한 증가
php artisan serve -d memory_limit=512M

# 실행 시간 제한 해제
php artisan serve -d max_execution_time=0
```

### 데이터베이스 최적화
```bash
# 개발용 SQLite 사용 (빠른 시작)
touch database/database.sqlite
php artisan migrate

# 쿼리 디버깅 활성화
DB_LOG_QUERIES=true
```

## 🌐 네트워크 설정

### 로컬 네트워크에서 접근하기
```bash
# 모든 인터페이스에서 접근 허용
php artisan serve --host=0.0.0.0 --port=8000

# 특정 IP에서만 접근 허용
php artisan serve --host=192.168.1.100
```

**보안 주의**: 0.0.0.0 설정은 로컬 네트워크의 모든 기기에서 접근 가능합니다.

## 📱 모바일 디바이스 테스트

```bash
# 1. 로컬 네트워크 IP 확인
ifconfig | grep "inet 192.168"
# 또는
ipconfig  # Windows

# 2. 네트워크 접근 서버 실행
php artisan serve --host=0.0.0.0 --port=8000

# 3. 모바일에서 접속
# http://192.168.1.XXX:8000
```

## 🎨 IDE 통합 설정

### VS Code 추천 확장
- Laravel Extension Pack
- PHP Intelephense
- Laravel Blade Spacer
- Laravel Artisan
- Laravel Extra Intellisense

### PHPStorm 설정
- Laravel Plugin 설치
- PHP Interpreter 설정
- Database Tools 연결
- Blade Template 인식 설정

## ✅ 체크리스트

### 기본 환경 설정
- [ ] PHP 8.4+ 설치 확인
- [ ] Composer 설치 확인
- [ ] Node.js 20+ 설치 확인
- [ ] Laravel 프로젝트 생성
- [ ] .env 파일 구성
- [ ] APP_KEY 생성
- [ ] 데이터베이스 연결 확인

### 개발 도구 설정
- [ ] IDE/에디터 설정
- [ ] Git 저장소 초기화
- [ ] 디버깅 도구 설치
- [ ] 테스팅 환경 구성

### 성능 최적화
- [ ] OPcache 설정
- [ ] 에셋 빌드 최적화
- [ ] 데이터베이스 인덱스 확인
- [ ] 로그 레벨 설정

## 🎯 다음 단계

로컬 개발 환경이 완성되었다면:

1. **[JinyPHP 패키지 설치](../../04.jinyphp.html)** - Laravel 확장 기능
2. **[서버 배포 준비](../../03.deploy/)** - 실서버 배포 가이드
3. **[라우팅 학습](../../04-01.route-taste/)** - Laravel 핵심 기능 학습

---

**네비게이션**
- **이전**: [데이터베이스 설정](../03.database.html)
- **다음**: [JinyPHP 패키지](../../04.jinyphp.html)
- **상위**: [02.Setup 목차](../index.html)

---

마지막 업데이트: 2025-11-19 | Laravel 12 & PHP 8.4 기준
