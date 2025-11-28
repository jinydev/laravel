# Laravel & JinyPHP 개발 가이드

이 저장소는 Laravel 12 개발과 JinyPHP 프레임워크를 활용한 ERP 시스템 구축을 위한 종합 학습 가이드입니다.

## 📖 문서 보기

### 온라인으로 보기 (Jekyll 웹사이트)

이 문서들은 Jekyll을 통해 웹사이트로 렌더링됩니다. 로컬에서 웹사이트로 확인하려면:

```bash
# 1. Ruby 3.4+ 설치 (Homebrew 사용)
brew install ruby

# 2. PATH 설정 (zsh 사용자)
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# 3. 의존성 설치
cd jinyphp_study_01
bundle install

# 4. 로컬 서버 실행
bundle exec jekyll serve
# jekyll serve --watch

# 5. 브라우저에서 http://localhost:4000 접속
```

### GitHub에서 직접 보기

GitHub에서도 마크다운 파일들을 직접 확인할 수 있습니다:

- [메인 가이드](./index.md)
- [Laravel 시작하기](./01.Start/index.md)
- [개발환경 설정](./02.Setup/index.md)
- [서버 배포](./03.deploy/index.md)
- [JinyPHP 패키지](./04.jinyphp.md)

## 📚 학습 순서

### 1단계: Laravel 기초 이해
- [01. 라라벨이란?](./01.Start/01.what-is-laravel.md)
- [02. PHP 언어](./01.Start/02.php-language.md)
- [03. 의존성 문제](./01.Start/03.dependency-issues.md)
- [04. 프레임워크](./01.Start/04.framework.md)

### 2단계: 개발 환경 설정
- [01. 사전 요구사항](./02.Setup/01.requirements.md)
- [02. Laravel 설치](./02.Setup/02.laravel-install.md)
- [03. 데이터베이스 설정](./02.Setup/03.database.md)
- [04. GitHub 배포 준비](./02.Setup/04.github-deploy.md)

### 3단계: 서버 배포
- [01. 클라우드 준비](./03.deploy/01.cloud-setup.md)
- [02. 서버 환경 설정](./03.deploy/02.server-setup.md)
- [03. Laravel 배포](./03.deploy/03.laravel-deploy.md)
- [04. 도메인 HTTPS 설정](./03.deploy/04.domain-https.md)
- [05. 성능 최적화](./03.deploy/05.optimization.md)

### 4단계: JinyPHP 확장
- [JinyPHP 패키지 설치 및 설정](./04.jinyphp.md)

## 🛠️ 기술 스택

### 백엔드
- **Laravel 12** - PHP 웹 프레임워크
- **PHP 8.4** - 최신 PHP (Property Hooks, JIT 컴파일)
- **JinyPHP** - Laravel 기반 ERP 확장 프레임워크

### 데이터베이스
- **SQLite** (학습/개발용)
- **PostgreSQL 15+** (운영 권장)
- **MySQL 8.4** (인기 선택지)
- **Redis 7.x** - 캐시 및 세션

### 프론트엔드
- **Laravel Livewire 3.x** - 동적 UI 컴포넌트
- **Tailwind CSS v4** - 유틸리티 CSS 프레임워크
- **Vite** - 프론트엔드 빌드 도구

### 인프라
- **Ubuntu 25.10** - 서버 운영체제
- **Nginx 1.28** - 웹 서버
- **PHP-FPM 8.4** - PHP 프로세스 관리
- **Let's Encrypt** - SSL 인증서

## 🎯 대상 독자

- Laravel을 처음 배우는 개발자
- PHP 웹 개발에 관심이 있는 분
- 실제 서버 배포를 경험해보고 싶은 분
- JinyPHP ERP 프레임워크를 활용하고 싶은 분

## 📝 특징

- **초보자 친화적**: 한국어 대화체 스타일로 작성
- **실습 중심**: 실제 명령어와 설정 파일 예시 제공
- **단계별 진행**: 각 단계마다 체크리스트 포함
- **실제 배포**: 1GB RAM 서버에서 운영 가능한 최적화 가이드

## 📞 지원

문제가 발생하거나 궁금한 점이 있으시면:

1. **각 가이드의 문제 해결 섹션** 확인
2. **GitHub Issues** 등록
3. **관련 커뮤니티** 질문

## 🤝 기여

이 가이드의 개선을 위한 기여를 환영합니다:

1. Fork this repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](./LICENSE) 파일을 확인하세요.

---

**Happy Coding! 🚀**

*이 가이드가 여러분의 Laravel 개발 여정에 도움이 되길 바랍니다.*