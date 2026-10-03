# 맹그로 랜딩 페이지

맹그로 서비스의 랜딩 페이지를 제작하기 위한 Vite + React + TypeScript 프로젝트입니다.
[Vite 공식 `react-ts` 템플릿](https://vite.dev/guide/)을 기반으로 구성했습니다.

## 개발 환경

- Node.js 24 이상 (`.nvmrc`: 24)
- npm
- TypeScript strict 모드
- ESLint: TypeScript, React Hooks, React Refresh 규칙
- 스타일: 기본 CSS

## 시작하기

```sh
# nvm을 사용하는 경우
nvm use

# package-lock.json에 기록된 버전으로 설치
npm ci

# 개발 서버 실행
npm run dev
```

개발 서버가 출력하는 주소로 접속합니다. 기본 주소는 `http://localhost:5173`입니다.

## 명령어

| 명령어 | 용도 |
| --- | --- |
| `npm run dev` | 개발 서버 실행, 변경 사항 자동 반영 |
| `npm run typecheck` | TypeScript 타입 검사 |
| `npm run lint` | ESLint 검사, 경고도 실패 처리 |
| `npm run build` | 타입 검사 후 프로덕션 빌드 (`dist/`) |
| `npm run preview` | 빌드 결과를 로컬에서 미리보기 |

미리보기는 `npm run build`를 실행한 뒤 사용합니다.

## 주요 파일

```text
public/               # 경로 그대로 제공할 정적 파일
src/
  App.tsx             # 랜딩 페이지 시작 화면
  App.css             # 시작 화면 스타일
  index.css           # 전역 스타일 및 기본 색상 변수
  main.tsx            # React 진입점
index.html            # 한국어 문서, 페이지 제목 및 설명
vite.config.ts        # Vite 및 React 플러그인 설정
tsconfig*.json        # 앱과 설정 파일의 TypeScript 설정
eslint.config.js      # ESLint 설정
```

현재 화면은 초기 구성 확인용입니다. 서비스 문구, 섹션, 로고 및 브랜드 스타일은
후속 작업에서 `src/App.tsx`와 CSS에 반영합니다. 작은 단일 페이지로 시작하며,
재사용할 UI가 생기면 `src/components/` 등으로 분리합니다.

환경변수가 필요하면 `.env.local`을 사용합니다. `VITE_` 접두사가 붙은 값은
클라이언트 번들에 포함되므로 비밀값을 넣지 않습니다. 공유할 변수 이름은
`.env.example`에 기록하고, 실제 환경변수 파일은 Git에 커밋하지 않습니다.

프로덕션 배포 시 `dist/`를 정적 호스팅에 업로드합니다.
`npm run preview`는 로컬 확인용 서버입니다.
