# 맹그로 랜딩 페이지

맹그로 서비스의 랜딩 페이지를 위한 Vite + React + TypeScript 프로젝트입니다.
[Vite 공식 `react-ts` 템플릿](https://vite.dev/guide/)을 기반으로 구성했습니다.

## 개발 환경

- Node.js 24 이상 (`.nvmrc`: 24)
- npm
- TypeScript strict 모드
- ESLint: TypeScript, React Hooks, React Refresh 규칙
- 스타일: 기본 CSS

## 시작하기

```sh
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
public/
  fonts/              # 로컬 Pretendard 글꼴 및 OFL 라이선스
  assets/             # Figma 원본 이미지, 아이콘 및 벡터
src/
  components/         # CTA, 장식 이미지, 무한 카드 애니메이션 컴포넌트
  config/links.ts     # Google Play 다운로드 주소
  App.tsx             # 히어로, 핵심 가치, 이용 방법, 스토리 및 다운로드
  App.css             # 페이지 레이아웃 및 반응형 스타일
  index.css           # 글꼴, 전역 스타일, 브랜드 색상, 접근성 스타일
  main.tsx            # React 진입점
index.html            # 한국어 문서, 페이지 제목 및 설명
vite.config.ts        # Vite 및 React 플러그인 설정
tsconfig*.json        # 앱과 설정 파일의 TypeScript 설정
eslint.config.js      # ESLint 설정
```

## 디자인
CSS 클래스명은 `hero-app-preview` 같은 kebab-case 형식으로 작성합니다.
에셋 파일명은 `prefix_snake_case` 형식으로 작성합니다.

- `image_`: 일반 이미지와 래스터 마스크 (`.png`, `.jpg` 등)
- `icon_`: UI 아이콘과 앱 아이콘 (파일 형식과 무관)
- `vector_`: 로고, 말풍선 꼬리, SVG 마스크 등 벡터 그래픽

핵심 가치 카드는 반복 이동하며, 화면 중앙에서의 거리에 따라 `600 → 300 → 100` 색상으로 변화합니다.
중앙에서 두 칸 이상 떨어진 카드의 내용은 사라지며, 이동에 따라 부드럽게 나타나거나 사라집니다.
마우스 호버와 키보드 포커스에서는 이동을 멈추고, 동작 줄이기 설정에서는 정적인 카드 목록을 표시합니다.

[Pretendard](https://github.com/orioncactus/pretendard) 1.3.9 가변 글꼴을 로컬에서 제공합니다.
라이선스는 `public/fonts/OFL.txt`에 포함되어 있습니다.

프로덕션 배포 시 `dist/`를 정적 호스팅에 업로드합니다.
`npm run preview`는 로컬 확인용 서버입니다.
