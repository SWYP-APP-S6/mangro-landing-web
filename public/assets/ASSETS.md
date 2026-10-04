# 랜딩 페이지 자산

출처: [Figma · 1001 랜딩페이지 최종본](https://www.figma.com/design/nHcfsXeF89HA4gLMr5deb4/Untitled?node-id=34-102)

Figma MCP가 제공한 원본 파일을 저장했습니다. 화면 전체 스크린샷은 구현 자산으로 사용하지 않습니다.
이미지 데이터와 SVG 경로를 수정하지 않았습니다. 앱 화면 3개는 실제 JPEG 형식에 맞게 확장자를 지정했습니다.

일반 이미지는 `image_`, 아이콘은 `icon_`, 로고·말풍선·SVG 마스크는 `vector_` 접두사를 사용합니다.
앱 아이콘처럼 이미지 형식인 아이콘도 역할에 따라 `icon_` 접두사를 사용합니다.

| 파일 | 디자인 노드 / 사용 위치 |
| --- | --- |
| `icon_app.png` | 이전 디자인 `1:244`의 앱 아이콘 · `index.html` 파비콘 |
| `image_hero_app.png` | `34:130` · 히어로 휴대폰과 소비자 앱 화면 원본 |
| `vector_hero_mockup_mask.svg` | `34:129` · 휴대폰 목업의 하단 그라데이션 마스크 |
| `vector_wordmark_white.svg` | `34:118` · 히어로 맹그로 워드마크 |
| `icon_arrow_right.svg` | `34:127`, `34:216` · 두 CTA의 원형 화살표 |
| `image_helix.png` | `34:131`, `34:206`, `34:218` · 나선 장식 원본 |
| `image_helix_mask.png` | `34:131` · 히어로 하단 나선 색상 마스크 |
| `image_helix_top_mask.png` | `34:218` · 히어로 우측 나선 색상 마스크 |
| `image_story_helix_mask.png` | `34:206` · 스토리 나선 색상 마스크 |
| `image_cylinder.png` | `34:137`, `34:142`, `34:175`, `34:223` · 원통 장식 원본 |
| `image_cylinder_mask.png` | `34:137`, `34:142` · 노란 원통 색상 마스크 |
| `image_cylinder_brand_mask.png` | `34:223` · 워드마크 좌측 원통 색상 마스크 |
| `image_story_cylinder_mask.png` | `34:175` · 스토리 원통 색상 마스크 |
| `image_sphere.png`, `image_sphere_mask.png` | `34:152` · 민트색 구 장식 및 색상 마스크 |
| `image_torus.png`, `image_torus_mask.png` | `34:147` · 초록색 고리 장식 및 색상 마스크 |
| `icon_value_discount.svg` | `34:163` · 첫 가치 카드 아이콘 |
| `icon_value_status.svg` | `34:164` · 문서 아이콘 (동일한 이전 변형 `I1:262;3282:19719`의 원본 재사용) |
| `icon_value_pickup.svg` | `I34:165;3282:19719` · 세 번째 가치 카드의 장바구니 아이콘 |
| `image_app_map.jpg` | `34:171` · 상품 탐색 화면 |
| `image_app_reservation.jpg` | `34:172` · 상품 예약 화면 |
| `image_app_pickup.jpg` | `34:173` · 상품 픽업 화면 |
| `vector_step_mask.svg` | `34:171`, `34:173` · 800 × 530 앱 화면 마스크 |
| `vector_reservation_mask.svg` | `34:172` · 800 × 530 예약 화면 마스크 |
| `image_thumb_up.png` | `34:185` · 가치 소비 카드의 엄지 이미지 |
| `vector_bubble_tail_right.svg` | `34:192`, `34:195`, `34:198` · 윗줄 말풍선 꼬리 |
| `vector_bubble_tail_left.svg` | `34:202`, `34:205` · 아랫줄 말풍선 꼬리 (좌우 반전 배치) |
| `image_google_play_badge.png` | `34:217` · 다운로드 배지 |

두 번째와 세 번째 가치 카드의 아이콘은 실제 아이콘 인스턴스의 개별 디자인 응답에서 내려받았습니다.
상위 카드의 코드 응답은 두 아이콘을 같은 컴포넌트 기본 이미지로 내보내므로,
하위 노드의 원본 SVG를 사용해 화면에 지정된 변형을 반영했습니다.

호출 위치: `src/App.tsx`, `src/components/ActionLink.tsx`, `src/components/Decoration.tsx`, `src/components/ValueCarousel.tsx`.
마스크 및 크롭 위치: `src/App.css`.
