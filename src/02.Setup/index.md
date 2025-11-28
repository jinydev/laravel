---
layout: geeks
title: Laravel JinyERP 개발 환경 설정 가이드
description: JinyERP Laravel 프로젝트의 로컬 개발 환경 설정을 단계별로 안내합니다.
category: 개발환경 설정
permalink: /02.Setup/
---

# Laravel JinyERP 개발 환경 설정 가이드

JinyERP Laravel 프로젝트의 로컬 개발 환경 설정을 단계별로 안내합니다.

## 📚 설정 가이드 목록

### 🔧 사전 준비
📖 **[01. 사전 요구사항](./01.requirements.md)**
- PHP 8.4+ 설치 및 확인
- Composer, Node.js, Git 설치
- 데이터베이스 및 개발 도구 준비

### 🚀 Laravel 환경 구축
📖 **[02. Laravel 프로젝트 설치](./02.laravel-install.md)**
- Laravel 프로젝트 생성
- 기본 환경 설정 (.env 파일)
- 프로젝트 구조 이해

📖 **[03. 데이터베이스 설정](./03.database.md)**
- PostgreSQL 설치 및 설정 (권장)
- MySQL 설치 및 설정 (대안)
- 마이그레이션 실행

### 💻 로컬 개발 환경
📖 **[04. 로컬 개발 환경 구성](./04.local-development.md)**
- Laravel 개발 서버 실행
- 개발 도구 설정
- 디버깅 및 테스팅 환경

---

## 🔄 설정 진행 순서

### 1단계: 사전 준비 → [`01.requirements.md`](./01.requirements.md)
```bash
# PHP, Composer, Node.js 설치 확인
php --version
composer --version
node --version
```

### 2단계: Laravel 설치 → [`02.laravel-install.md`](./02.laravel-install.md)
```bash
# Laravel 프로젝트 생성
composer create-project laravel/laravel jinyphp_demo_01
cd jinyphp_demo_01
```

### 3단계: 데이터베이스 구성 → [`03.database.md`](./03.database.md)
```bash
# PostgreSQL 또는 MySQL 설정
# .env 파일에서 데이터베이스 연결 설정
php artisan migrate
```

### 4단계: 로컬 개발 환경 구성 → [`04.local-development.md`](./04.local-development.md)
```bash
# Laravel 개발 서버 실행
php artisan serve
# 프론트엔드 빌드
npm run dev
```

---

## ✅ 설정 완료 체크리스트

### 🔧 사전 요구사항
- [ ] **PHP 8.4+** 설치 및 확인 → [`01.requirements.md`](./01.requirements.md)
- [ ] **Composer 2.5+** 설치 확인
- [ ] **Node.js 20.x LTS** 설치 확인
- [ ] **Git** 최신 버전 설치 확인
- [ ] **PostgreSQL 15+** 또는 **MySQL 8.0+** 준비

### 🚀 Laravel 환경
- [ ] **Laravel 프로젝트** 생성 → [`02.laravel-install.md`](./02.laravel-install.md)
- [ ] **.env 파일** 설정 완료
- [ ] **애플리케이션 키** 생성 (`php artisan key:generate`)
- [ ] **개발 서버** 실행 확인 (`php artisan serve`)

### 🗄️ 데이터베이스
- [ ] **데이터베이스** 생성 및 연결 설정 → [`03.database.md`](./03.database.md)
- [ ] **마이그레이션** 실행 (`php artisan migrate`)
- [ ] **데이터베이스 연결** 테스트 완료

### 💻 로컬 개발 환경
- [ ] **Laravel 개발 서버** 실행 확인 → [`04.local-development.md`](./04.local-development.md)
- [ ] **프론트엔드 빌드** 테스트 (`npm run dev`)
- [ ] **개발 도구** 설치 (Laravel Debugbar 등)
- [ ] **테스팅 환경** 구성
- [ ] **IDE 설정** 완료

---

## 🛠️ 주요 기술 스택

### 백엔드
- **Laravel 12** - PHP 웹 프레임워크
- **PHP 8.4** - 최신 PHP 버전 (Property Hooks, JIT)

### 데이터베이스
- **PostgreSQL 15+** (권장) 또는 **MySQL 8.4**
- **Redis** (선택사항, 캐시/세션용)

### 프론트엔드
- **Laravel Livewire 3.x** - 동적 UI 컴포넌트
- **Tailwind CSS v4** - 유틸리티 CSS 프레임워크
- **Vite** - 프론트엔드 빌드 도구

---

## 🚀 다음 단계

개발 환경 설정이 완료되었으면:

1. **JinyPHP 패키지 설치** → [`../02.jinyphp.md`](../02.jinyphp.md)
2. **서버 배포 준비** → [`../배포.md`](../배포.md)
3. **프로젝트 개발 시작**

---

## ❓ 문제 해결

### 일반적인 설치 이슈
- **PHP 버전 문제**: [`01.requirements.md`](./01.requirements.md)에서 PHP 8.4 설치 확인
- **Composer 오류**: [`02.laravel-install.md`](./02.laravel-install.md)에서 Laravel 설치 과정 재확인
- **데이터베이스 연결 오류**: [`03.database.md`](./03.database.md)에서 연결 설정 확인
- **개발 서버 문제**: [`04.local-development.md`](./04.local-development.md)에서 로컬 환경 설정 확인

### 개발 지원
- **로그 확인**: `storage/logs/laravel.log`
- **디버그 모드**: `.env`에서 `APP_DEBUG=true` 설정
- **캐시 클리어**: `php artisan optimize:clear`

---

*이 가이드는 Laravel 12 기반의 JinyPHP 개발 환경 구축을 위한 종합 매뉴얼입니다.*
