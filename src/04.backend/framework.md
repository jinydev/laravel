---
layout: geeks
---

# 프레임워크

"프레임워크? 그게 라이브러리랑 뭐가 다른데요?"

아주 좋은 질문입니다! 많은 초보 개발자들이 헷갈려하는 부분이에요. 이 페이지에서는 프레임워크가 무엇인지, 왜 필요한지, 그리고 Laravel 프레임워크는 어떻게 구성되어 있는지 알아보겠습니다.

## 프레임워크란?

### 실생활 비유: 집 짓기

**직접 짓기 (No Framework):**
```
땅 고르기 → 기초 공사 → 골조 세우기 → 벽 쌓기
→ 지붕 올리기 → 배관 → 전기 → 인테리어

모든 것을 처음부터 스스로 결정하고 만들어야 합니다.
자유롭지만 어렵고 시간이 오래 걸립니다.
```

**조립식 주택 (Framework):**
```
이미 설계된 구조
 ↓
미리 만들어진 부품들
 ↓
정해진 방식대로 조립
 ↓
필요한 부분만 커스터마이징

빠르고 안전하지만, 정해진 규칙을 따라야 합니다.
```

### 프로그래밍에서의 프레임워크

**프레임워크 = 애플리케이션의 뼈대(골격) + 규칙 + 도구**

```
프레임워크는:
✅ 기본 구조를 제공합니다
✅ 정해진 규칙을 따르게 합니다
✅ 반복적인 작업을 자동화합니다
✅ 모범 사례를 강제합니다
```

## 프레임워크 vs 라이브러리

많이들 혼동하는 부분인데, 명확히 구분해볼게요.

### 라이브러리 (Library)

**"당신이 라이브러리를 호출합니다"**

```php
// 라이브러리 예시: Guzzle (HTTP 클라이언트)
use GuzzleHttp\Client;

// 내가 원할 때 호출
$client = new Client();
$response = $client->get('https://api.example.com');

// 내가 제어권을 가짐
if ($response->getStatusCode() == 200) {
    // 내가 원하는 대로 처리
}
```

**특징:**
- 필요할 때만 사용
- 호출 주체: 개발자
- 자유로운 구조
- 부분적 사용 가능

### 프레임워크 (Framework)

**"프레임워크가 당신의 코드를 호출합니다"**

```php
// 프레임워크 예시: Laravel
// 프레임워크가 정한 위치에 코드 작성
class UserController extends Controller
{
    // 프레임워크가 알아서 이 메서드를 호출함
    public function index()
    {
        return User::all();
    }
}

// routes/web.php에 등록
Route::get('/users', [UserController::class, 'index']);
// 프레임워크가 요청을 받아서 적절한 컨트롤러를 실행
```

**특징:**
- 프레임워크의 규칙을 따름
- 호출 주체: 프레임워크
- 정해진 구조
- 전체적 사용

### 제어의 역전 (Inversion of Control)

이게 핵심 차이입니다!

**라이브러리:**
```
개발자 → 라이브러리 호출
(내가 제어)
```

**프레임워크:**
```
프레임워크 → 개발자 코드 호출
(프레임워크가 제어)
```

**실생활 비유:**

**라이브러리 = 도구 상자**
```
필요한 도구(함수)를 꺼내서 사용
망치가 필요하면 망치를 꺼냄
톱이 필요하면 톱을 꺼냄
```

**프레임워크 = 공장 라인**
```
정해진 순서대로 작업
각 단계에서 할 일만 정의
전체 흐름은 공장(프레임워크)이 제어
```

## 왜 프레임워크를 사용하나요?

### 1. 바퀴를 재발명하지 마세요

**프레임워크 없이:**
```php
// 사용자 인증을 직접 구현
function login($username, $password) {
    // 1. 비밀번호 해싱 (어떤 알고리즘?)
    // 2. SQL Injection 방어
    // 3. CSRF 토큰 검증
    // 4. 세션 관리
    // 5. Remember Me 기능
    // 6. 로그인 시도 제한 (Brute Force 방어)
    // 7. 2단계 인증
    // ... 수백 줄의 코드
}
```

**Laravel 프레임워크:**
```php
// 단 한 줄!
Auth::attempt(['email' => $email, 'password' => $password]);

// 모든 보안 기능이 이미 구현되어 있음!
```

### 2. 검증된 구조

**스파게티 코드 (프레임워크 없이):**
```php
// index.php - 모든 게 섞여있음
<?php
session_start();
$conn = mysqli_connect('localhost', 'root', 'password', 'mydb');

if ($_POST['action'] == 'login') {
    $user = $_POST['username'];
    $pass = $_POST['password'];
    // HTML과 PHP가 뒤섞임
    ?>
    <html>
        <body>
            <?php
            if ($result = mysqli_query($conn, "SELECT * FROM users WHERE username='$user'")) {
                // SQL Injection 취약점!
                echo "Welcome!";
            }
            ?>
        </body>
    </html>
    <?php
}
?>
```

**Laravel의 구조:**
```
app/
├── Http/
│   └── Controllers/
│       └── AuthController.php    (로직)
├── Models/
│   └── User.php                   (데이터)
└── routes/
    └── web.php                    (라우팅)

resources/
└── views/
    └── login.blade.php            (화면)

명확한 분리! 각자의 역할!
```

### 3. 보안

**프레임워크가 자동으로 처리하는 보안:**

```php
// CSRF 보호 - Laravel이 자동 처리
<form method="POST">
    @csrf  <!-- 토큰 자동 생성 -->
    <input name="email">
</form>

// SQL Injection 방지 - 자동 이스케이프
User::where('email', $email)->first();

// XSS 방지 - Blade 템플릿이 자동 이스케이프
{{ $userInput }}  // 자동으로 안전하게 처리

// Mass Assignment 보호
class User extends Model {
    protected $fillable = ['name', 'email'];  // 허용 필드만
}
```

### 4. 생산성

**개발 시간 비교:**

```
로그인/회원가입 기능:
- 직접 구현: 2-3주
- Laravel: 2-3시간 (php artisan make:auth)

RESTful API:
- 직접 구현: 1-2주
- Laravel: 몇 시간

관리자 페이지:
- 직접 구현: 1-2개월
- Laravel Nova: 몇 일
```

### 5. 유지보수

**6개월 후 코드를 다시 볼 때:**

**프레임워크 없이:**
```php
// 이게 뭐하는 코드지...?
// 어디를 수정해야 하지...?
// 이거 고치면 다른 게 깨지나...?
```

**Laravel:**
```php
// 구조가 명확해서 쉽게 찾을 수 있음
// app/Http/Controllers/UserController.php
// 수정해도 다른 부분에 영향 없음
// 테스트 코드로 검증 가능
```

### 6. 협업

```
팀원 A: 프론트엔드 작업 (resources/views/)
팀원 B: API 개발 (app/Http/Controllers/API/)
팀원 C: 데이터베이스 (database/migrations/)

서로 간섭 없이 동시에 작업 가능!
구조가 정해져 있어서 코드 리뷰 쉬움!
```

## 프레임워크의 핵심 개념

### 1. MVC 패턴

**MVC = Model-View-Controller**

전통적인 웹 개발의 핵심 패턴입니다.

**각 부분의 역할:**

```
[사용자]
   ↓ 요청
[Controller] ← 라우터가 연결
   ↓ 데이터 요청
[Model] ← 데이터베이스와 통신
   ↓ 데이터 반환
[Controller]
   ↓ 데이터 전달
[View] ← 화면 렌더링
   ↓ HTML
[사용자]
```

**Laravel에서의 MVC:**

**Model (데이터):**
```php
// app/Models/Post.php
class Post extends Model
{
    // 데이터베이스의 posts 테이블 표현
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
```

**View (화면):**
```blade
{{-- resources/views/posts/index.blade.php --}}
@foreach($posts as $post)
    <article>
        <h2>{{ $post->title }}</h2>
        <p>{{ $post->content }}</p>
        <small>작성자: {{ $post->user->name }}</small>
    </article>
@endforeach
```

**Controller (로직):**
```php
// app/Http/Controllers/PostController.php
class PostController extends Controller
{
    public function index()
    {
        // Model에서 데이터 가져오기
        $posts = Post::with('user')->latest()->get();

        // View에 데이터 전달
        return view('posts.index', compact('posts'));
    }
}
```

**Route (연결):**
```php
// routes/web.php
Route::get('/posts', [PostController::class, 'index']);
```

### 2. 관습보다 설정 (Convention over Configuration)

**"합리적인 기본값을 제공하자"**

**예시 1: 데이터베이스 테이블명**
```php
// 모델 이름: User
// 테이블 이름: users (자동으로 복수형)
class User extends Model
{
    // 아무것도 설정 안 해도 작동!
}

// 커스터마이징 필요할 때만
class Person extends Model
{
    protected $table = 'people';  // 수동 지정
}
```

**예시 2: Primary Key**
```php
// 자동으로 'id' 컬럼을 PK로 인식
class User extends Model
{
    // 설정 불필요!
}

// 다른 컬럼을 PK로 쓸 때만
class User extends Model
{
    protected $primaryKey = 'user_id';
}
```

**예시 3: 타임스탬프**
```php
// 자동으로 created_at, updated_at 관리
class Post extends Model
{
    // 자동으로 시간 기록!
}

// 필요 없으면 끄면 됨
class Log extends Model
{
    public $timestamps = false;
}
```

### 3. DRY (Don't Repeat Yourself)

**같은 코드를 반복하지 마세요!**

**Bad (반복):**
```php
class UserController {
    public function show($id) {
        if (!auth()->check() || auth()->user()->role != 'admin') {
            abort(403);
        }
        // ...
    }

    public function edit($id) {
        if (!auth()->check() || auth()->user()->role != 'admin') {
            abort(403);  // 중복!
        }
        // ...
    }

    public function delete($id) {
        if (!auth()->check() || auth()->user()->role != 'admin') {
            abort(403);  // 또 중복!
        }
        // ...
    }
}
```

**Good (DRY):**
```php
// Middleware로 한 번만 정의
class AdminMiddleware {
    public function handle($request, $next) {
        if (!auth()->check() || auth()->user()->role != 'admin') {
            abort(403);
        }
        return $next($request);
    }
}

// 적용
Route::middleware('admin')->group(function () {
    Route::get('/users/{id}', [UserController::class, 'show']);
    Route::get('/users/{id}/edit', [UserController::class, 'edit']);
    Route::delete('/users/{id}', [UserController::class, 'delete']);
});
```

### 4. 의존성 주입 (Dependency Injection)

**"필요한 것을 외부에서 주입받자"**

**Bad (하드코딩):**
```php
class OrderService
{
    public function createOrder($data)
    {
        // 클래스 내부에서 직접 생성 (강한 결합)
        $mailer = new Mailer();
        $paymentGateway = new StripeGateway();

        // ...
    }
}
```

**Good (의존성 주입):**
```php
class OrderService
{
    // 생성자로 주입받음
    public function __construct(
        private MailerInterface $mailer,
        private PaymentGatewayInterface $gateway
    ) {}

    public function createOrder($data)
    {
        // 주입받은 객체 사용
        $this->mailer->send(...);
        $this->gateway->charge(...);
    }
}

// Laravel이 자동으로 주입해줌!
```

**장점:**
- 테스트하기 쉬움 (Mock 객체 주입 가능)
- 코드 재사용성 높음
- 느슨한 결합 (Loose Coupling)

## Laravel 프레임워크의 구조

### 디렉토리 구조

```
my-laravel-app/
│
├── app/                        # 애플리케이션 코어 로직
│   ├── Console/               # Artisan 커맨드
│   ├── Exceptions/            # 예외 처리
│   ├── Http/
│   │   ├── Controllers/       # 컨트롤러
│   │   ├── Middleware/        # 미들웨어
│   │   └── Requests/          # Form Request 검증
│   ├── Models/                # Eloquent 모델
│   └── Providers/             # 서비스 프로바이더
│
├── bootstrap/                  # 프레임워크 부트스트랩
│   └── app.php                # 애플리케이션 초기화
│
├── config/                     # 설정 파일들
│   ├── app.php                # 앱 기본 설정
│   ├── database.php           # DB 설정
│   └── ...
│
├── database/                   # 데이터베이스 관련
│   ├── migrations/            # 마이그레이션
│   ├── seeders/               # 시더 (초기 데이터)
│   └── factories/             # 팩토리 (테스트 데이터)
│
├── public/                     # 공개 디렉토리 (웹 루트)
│   ├── index.php              # 진입점
│   ├── css/
│   ├── js/
│   └── images/
│
├── resources/                  # 원본 리소스
│   ├── views/                 # Blade 템플릿
│   ├── css/
│   └── js/
│
├── routes/                     # 라우트 정의
│   ├── web.php                # 웹 라우트
│   ├── api.php                # API 라우트
│   └── console.php            # CLI 라우트
│
├── storage/                    # 저장소
│   ├── app/                   # 애플리케이션 파일
│   ├── framework/             # 프레임워크 캐시
│   └── logs/                  # 로그 파일
│
├── tests/                      # 테스트
│   ├── Feature/               # 기능 테스트
│   └── Unit/                  # 단위 테스트
│
├── vendor/                     # Composer 의존성
│
├── .env                        # 환경 변수
├── artisan                     # Artisan CLI
├── composer.json               # Composer 설정
└── package.json                # NPM 설정
```

### 요청 생명주기 (Request Lifecycle)

**사용자가 URL 접속하면 어떤 일이 일어날까요?**

```
1. public/index.php
   ↓
2. bootstrap/app.php (애플리케이션 생성)
   ↓
3. HTTP Kernel 실행
   ↓
4. Service Providers 등록 (register)
   ↓
5. Service Providers 부팅 (boot)
   ↓
6. Middleware 실행 (요청 전)
   ↓
7. Router (라우트 매칭)
   ↓
8. Controller (비즈니스 로직)
   ↓
9. Model (데이터베이스)
   ↓
10. View (HTML 생성)
   ↓
11. Middleware 실행 (응답 후)
   ↓
12. Response (사용자에게 전송)
```

**코드로 보는 흐름:**

```php
// 1. public/index.php
require __DIR__.'/../vendor/autoload.php';
$app = require_once __DIR__.'/../bootstrap/app.php';
$kernel = $app->make(Kernel::class);
$response = $kernel->handle($request = Request::capture());
$response->send();

// 2. routes/web.php
Route::get('/posts/{id}', [PostController::class, 'show']);

// 3. app/Http/Controllers/PostController.php
class PostController extends Controller
{
    public function show($id)
    {
        $post = Post::findOrFail($id);
        return view('posts.show', compact('post'));
    }
}

// 4. app/Models/Post.php
class Post extends Model
{
    // Eloquent가 자동으로 데이터베이스 쿼리
}

// 5. resources/views/posts/show.blade.php
<h1>{{ $post->title }}</h1>
<p>{{ $post->content }}</p>
```

### Service Container (서비스 컨테이너)

**Laravel의 심장!**

```php
// 클래스를 Container에 바인딩
app()->bind(MailerInterface::class, SmtpMailer::class);

// 필요할 때 자동으로 해결 (Resolve)
class OrderController extends Controller
{
    // Laravel이 자동으로 SmtpMailer 주입!
    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }
}

// 수동으로도 가능
$mailer = app(MailerInterface::class);
```

**싱글톤 등록:**
```php
// 앱 전체에서 하나의 인스턴스만 사용
app()->singleton(Cache::class, function () {
    return new RedisCache();
});
```

### Service Provider

**애플리케이션의 부팅 및 설정**

```php
// app/Providers/AppServiceProvider.php
class AppServiceProvider extends ServiceProvider
{
    // 서비스 등록
    public function register()
    {
        $this->app->bind(
            RepositoryInterface::class,
            EloquentRepository::class
        );
    }

    // 부팅 (모든 서비스가 등록된 후)
    public function boot()
    {
        // 뷰 Composer
        View::composer('*', function ($view) {
            $view->with('appName', config('app.name'));
        });

        // 모델 이벤트
        User::creating(function ($user) {
            $user->uuid = Str::uuid();
        });
    }
}
```

### Facade

**"정적 메서드처럼 보이지만 사실은 아니에요"**

```php
// Facade 사용
use Illuminate\Support\Facades\Cache;

Cache::put('key', 'value', 3600);
$value = Cache::get('key');

// 실제로는 이렇게 동작:
app('cache')->put('key', 'value', 3600);
app('cache')->get('key');

// Facade는 편의 문법!
```

**자주 사용하는 Facade:**
```php
// 데이터베이스
DB::table('users')->get();

// 인증
Auth::user();
Auth::check();

// 라우팅
Route::get('/path', $callback);

// 뷰
View::make('welcome');

// 요청
Request::input('name');

// 응답
Response::json(['status' => 'ok']);

// 캐시
Cache::remember('key', 3600, fn() => DB::table('users')->get());

// 이벤트
Event::dispatch(new OrderShipped($order));
```

## Laravel의 강력한 기능들

### 1. Eloquent ORM

**객체로 데이터베이스 다루기**

```php
// CRUD가 이렇게 간단!

// Create
$user = User::create([
    'name' => '홍길동',
    'email' => 'hong@example.com'
]);

// Read
$users = User::where('active', true)->get();
$user = User::find(1);

// Update
$user->name = '김철수';
$user->save();

// Delete
$user->delete();

// 관계
$user->posts;  // 사용자의 모든 게시글
$post->comments;  // 게시글의 모든 댓글
$post->user->name;  // 게시글 작성자 이름
```

### 2. Blade 템플릿

**PHP보다 우아한 템플릿**

```blade
@extends('layouts.app')

@section('title', '게시글 목록')

@section('content')
    <h1>게시글</h1>

    @if($posts->count() > 0)
        @foreach($posts as $post)
            <article>
                <h2>{{ $post->title }}</h2>
                <p>{{ $post->excerpt }}</p>

                @can('update', $post)
                    <a href="{{ route('posts.edit', $post) }}">수정</a>
                @endcan
            </article>
        @endforeach
    @else
        <p>게시글이 없습니다.</p>
    @endif
@endsection
```

### 3. Migration (마이그레이션)

**코드로 데이터베이스 관리**

```php
// database/migrations/2025_11_18_create_posts_table.php
class CreatePostsTable extends Migration
{
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->string('title');
            $table->text('content');
            $table->boolean('published')->default(false);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
```

**실행:**
```bash
php artisan migrate              # 마이그레이션 실행
php artisan migrate:rollback     # 롤백
php artisan migrate:fresh        # 모두 삭제 후 재실행
```

### 4. Validation (검증)

**폼 입력 검증 자동화**

```php
// Controller에서
public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|max:255',
        'content' => 'required',
        'email' => 'required|email|unique:users',
        'age' => 'required|integer|min:18|max:100',
        'website' => 'nullable|url',
        'tags' => 'array|min:1|max:5',
        'tags.*' => 'string|max:50',
    ]);

    Post::create($validated);
}
```

**Form Request로 분리:**
```php
// app/Http/Requests/StorePostRequest.php
class StorePostRequest extends FormRequest
{
    public function rules()
    {
        return [
            'title' => 'required|max:255',
            'content' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => '제목은 필수입니다.',
            'content.required' => '내용을 입력해주세요.',
        ];
    }
}

// Controller
public function store(StorePostRequest $request)
{
    // 이미 검증됨!
    Post::create($request->validated());
}
```

### 5. Queue (작업 큐)

**시간이 오래 걸리는 작업 비동기 처리**

```php
// Job 생성
class ProcessPodcast implements ShouldQueue
{
    public function __construct(
        public Podcast $podcast
    ) {}

    public function handle()
    {
        // 시간이 오래 걸리는 작업
        $this->podcast->process();
    }
}

// Controller에서 큐에 추가
ProcessPodcast::dispatch($podcast);

// 사용자는 기다리지 않고 바로 응답받음!
```

### 6. Events & Listeners

**이벤트 기반 프로그래밍**

```php
// Event
class OrderShipped
{
    public function __construct(
        public Order $order
    ) {}
}

// Listener
class SendShipmentNotification
{
    public function handle(OrderShipped $event)
    {
        Mail::to($event->order->user)->send(
            new OrderShippedMail($event->order)
        );
    }
}

// 이벤트 발생
event(new OrderShipped($order));

// 여러 Listener가 자동으로 실행됨!
```

### 7. Artisan CLI

**강력한 명령줄 도구**

```bash
# 코드 생성
php artisan make:controller UserController
php artisan make:model Post -mfsc  # migration, factory, seeder, controller 한번에!
php artisan make:middleware AdminMiddleware

# 데이터베이스
php artisan migrate
php artisan db:seed

# 캐시
php artisan cache:clear
php artisan config:cache

# 큐
php artisan queue:work

# 서버
php artisan serve

# 커스텀 명령어도 만들 수 있음!
php artisan make:command SendEmails
```

## 프레임워크 선택 가이드

### Laravel을 선택하세요:

```
✅ 빠른 개발이 필요할 때
✅ 모던한 PHP 기능을 활용하고 싶을 때
✅ 풍부한 생태계가 필요할 때
✅ 풀스택 애플리케이션을 만들 때
✅ 개발자 경험을 중시할 때
✅ 초보자부터 시작할 때
```

### Symfony를 선택하세요:

```
✅ 엔터프라이즈급 프로젝트
✅ 극도로 유연한 설정 필요
✅ 재사용 가능한 컴포넌트 필요
✅ 레거시 시스템과 통합
```

### CodeIgniter를 선택하세요:

```
✅ 매우 가벼운 프레임워크 필요
✅ 공유 호스팅 환경
✅ 낮은 러닝 커브
✅ 레거시 PHP 지원 필요
```

### 프레임워크 없이:

```
❌ 대부분의 경우 권장하지 않음
✅ 학습 목적
✅ 극도로 단순한 스크립트
✅ 성능이 극도로 중요 (마이크로초 단위)
```

## 실전 예제: 블로그 만들기

### 1. 프로젝트 생성

```bash
composer create-project laravel/laravel blog
cd blog
php artisan serve
```

### 2. 데이터베이스 설정

**.env:**
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=blog
DB_USERNAME=root
DB_PASSWORD=secret
```

### 3. 모델과 마이그레이션

```bash
php artisan make:model Post -mfc
```

**Migration:**
```php
// database/migrations/xxxx_create_posts_table.php
public function up()
{
    Schema::create('posts', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->string('slug')->unique();
        $table->text('content');
        $table->boolean('published')->default(false);
        $table->timestamps();
    });
}
```

**실행:**
```bash
php artisan migrate
```

### 4. 라우트

```php
// routes/web.php
Route::get('/', [PostController::class, 'index']);
Route::get('/posts/{post:slug}', [PostController::class, 'show']);
```

### 5. 컨트롤러

```php
// app/Http/Controllers/PostController.php
class PostController extends Controller
{
    public function index()
    {
        $posts = Post::where('published', true)
            ->latest()
            ->paginate(10);

        return view('posts.index', compact('posts'));
    }

    public function show(Post $post)
    {
        return view('posts.show', compact('post'));
    }
}
```

### 6. 뷰

```blade
{{-- resources/views/posts/index.blade.php --}}
@extends('layouts.app')

@section('content')
    <h1>블로그 게시글</h1>

    @foreach($posts as $post)
        <article>
            <h2>
                <a href="{{ url('/posts/' . $post->slug) }}">
                    {{ $post->title }}
                </a>
            </h2>
            <p>{{ Str::limit($post->content, 200) }}</p>
        </article>
    @endforeach

    {{ $posts->links() }}
@endsection
```

**완성! 몇 분 만에 블로그가 만들어졌습니다.**

## 마무리

프레임워크는:
- ✅ 애플리케이션의 골격
- ✅ 검증된 구조와 패턴
- ✅ 생산성 향상
- ✅ 보안 기본 제공
- ✅ 유지보수 용이

Laravel은:
- ✅ 현대적인 PHP 프레임워크
- ✅ 우아한 문법
- ✅ 풍부한 기능
- ✅ 활발한 커뮤니티
- ✅ 초보자 친화적

## 다음 단계

축하합니다! "01.Start" 섹션을 모두 마쳤습니다.

이제 여러분은:
- ✅ Laravel이 무엇인지 알고
- ✅ PHP 언어를 이해하고
- ✅ 의존성 관리를 배우고
- ✅ 프레임워크의 개념을 이해했습니다

다음 섹션에서는 Laravel을 실제로 설치하고 개발 환경을 구축해보겠습니다!

---

**네비게이션**
- **이전**: [의존성 문제](03.dependency-issues.md)
- **다음**: [02.Installation - Laravel 설치하기](../02.Installation/index.md)
- **상위**: [01.Start 목차](index.md)

---

**핵심 요약**

프레임워크는 애플리케이션의 뼈대와 규칙을 제공합니다.
- 제어의 역전 (IoC): 프레임워크가 코드를 호출
- MVC 패턴: Model-View-Controller 분리
- Convention over Configuration: 합리적 기본값
- Laravel은 현대적이고 강력한 PHP 프레임워크
- Eloquent, Blade, Artisan 등 풍부한 기능

다음 섹션에서는 Laravel을 설치합니다!

---

마지막 업데이트: 2025-11-18 | Laravel 12 & PHP 8.4 기준
