import { ActionLink } from './components/ActionLink'
import { Decoration } from './components/Decoration'
import { ValueCarousel } from './components/ValueCarousel'
import { GOOGLE_PLAY_URL } from './config/links'
import './App.css'

const assetBase = `${import.meta.env.BASE_URL}assets/`

const steps = [
  {
    number: '01',
    action: '탐색 !',
    description: '내 주변 상점의 오늘 마감 할인 상품 확인',
    image: 'image_app_map.jpg',
    imageAlt: '지도에서 주변 상점과 마감 할인 식재료를 확인하는 맹그로 화면',
    theme: 'explore',
  },
  {
    number: '02',
    action: '예약 !',
    description: '원하는 식재료 결제 및 픽업 예약',
    image: 'image_app_reservation.jpg',
    imageAlt: '식재료 수량과 금액을 확인하고 상품을 예약하는 맹그로 화면',
    theme: 'reserve',
  },
  {
    number: '03',
    action: '픽업 !',
    description: '퇴근길 상점에 방문해 안심 픽업!',
    image: 'image_app_pickup.jpg',
    imageAlt: '매장 방문까지 남은 픽업 시간을 안내하는 맹그로 화면',
    theme: 'pickup',
  },
]

function App() {
  return (
    <>
      <a className="skip-link" href="#how-it-works">이용 방법으로 바로가기</a>
      <main className="landing-page" data-node-id="34:102">
        <section className="hero" aria-labelledby="hero-title">
          <p className="hero-backdrop" aria-hidden="true">
            <span><strong>신선함</strong>이 모이는</span>
            <span><strong>식자재</strong>의 <strong>숲</strong></span>
          </p>
          <div className="hero-app-preview" data-node-id="34:130">
            <img
              src={`${assetBase}image_hero_app.png`}
              width="1989"
              height="4096"
              alt="맹그로 앱에서 지도와 주변 상점의 할인 식재료를 확인하는 화면"
              fetchPriority="high"
            />
          </div>

          <Decoration kind="helix-top" />
          <Decoration kind="cylinder-left" />
          <Decoration kind="cylinder-right" />
          <Decoration kind="cylinder-brand" />
          <Decoration kind="sphere" />
          <Decoration kind="torus" />
          <Decoration kind="helix-bottom" />

          <div className="hero-content">
            <div className="hero-heading">
              <div className="hero-wordmark">
                <img src={`${assetBase}vector_wordmark_white.svg`} alt="맹그로" />
              </div>
              <h1 id="hero-title" className="hero-title">
                <span>놓치기 쉬운 우리 동네 할인,</span>
                <span className="hero-highlight">신선한 식재료를 가장 알뜰하게!</span>
              </h1>
              <p className="hero-description">
                손쉽게 마감 직전 마트·전통시장 할인 상품을 예약하고 퇴근길에 픽업하세요
              </p>
            </div>
            <ActionLink href={GOOGLE_PLAY_URL || '#download'} className="hero-cta">
              우리 동네 할인 상품 보기
            </ActionLink>
          </div>
        </section>

        <div className="content-sections">
          <section className="values" aria-labelledby="values-title" data-node-id="34:158">
            <h2 id="values-title" className="section-title">
              맹그로가<br />만들어가는 변화
            </h2>
            <ValueCarousel />
          </section>

          <section
            className="how-it-works"
            id="how-it-works"
            aria-labelledby="steps-title"
            data-node-id="34:167"
          >
            <h2 id="steps-title" className="section-title">
              세단계로 끝나는<br />맹그로의 알뜰한 장보기
            </h2>
            <div className="steps">
              {steps.map((step) => (
                <article
                  className={`step step-${step.theme}`}
                  id={`step-${step.number}`}
                  key={step.number}
                  aria-labelledby={`step-title-${step.number}`}
                >
                  <div className="step-visual">
                    <img
                      src={`${assetBase}${step.image}`}
                      width="1080"
                      height={step.theme === 'explore' ? 2400 : step.theme === 'reserve' ? 1647 : 3372}
                      alt={step.imageAlt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="step-content">
                    <span className="step-number">Step {step.number}</span>
                    <h3 id={`step-title-${step.number}`}>
                      상품 <strong>{step.action}</strong>
                    </h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="story" aria-labelledby="story-title" data-node-id="34:174">
            <Decoration kind="story-cylinder" />
            <Decoration kind="story-helix" />
            <div className="story-main">
              <h2 className="section-title" id="story-title">맹그로에선 서로가<br />서로를 돕습니다</h2>
              <div className="story-card">
                <div className="story-intro">
                  <img
                    className="story-thumb"
                    src={`${assetBase}image_thumb_up.png`}
                    alt=""
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <h3>함께하는<br />가치 소비</h3>
                </div>
                <div className="story-values">
                  <ul className="story-pills">
                    {['버려지는 식재료는 줄이고', '지갑은 아끼고', '환경도 지키고'].map((value) => (
                      <li key={value}>
                        {value}
                        <span className="story-bubble-tail" aria-hidden="true">
                          <img src={`${assetBase}vector_bubble_tail_right.svg`} alt="" loading="lazy" />
                        </span>
                      </li>
                    ))}
                  </ul>
                  <ul className="story-pills story-pills-end">
                    {['우리동네 상권은 살리고', '사장님도 웃는 기분 좋은 장보기'].map((value) => (
                      <li key={value}>
                        {value}
                        <span className="story-bubble-tail" aria-hidden="true">
                          <img src={`${assetBase}vector_bubble_tail_left.svg`} alt="" loading="lazy" />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="download" id="download">
              <p className="download-message">
                <span>지금 바로 <strong>플레이스토어에서 다운</strong>받아</span>
                <span>맹그로의 서비스를 확인해보세요!</span>
              </p>
              <ActionLink
                href={GOOGLE_PLAY_URL}
                describedBy={!GOOGLE_PLAY_URL ? 'download-status' : undefined}
              >
                Google PlayStore 다운로드
              </ActionLink>
              {GOOGLE_PLAY_URL ? (
                <a
                  className="download-badge"
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${assetBase}image_google_play_badge.png`}
                    width="646"
                    height="210"
                    alt="Google Play에서 맹그로 다운로드"
                    loading="lazy"
                  />
                </a>
              ) : (
                <div className="download-badge">
                  <img
                    src={`${assetBase}image_google_play_badge.png`}
                    width="646"
                    height="210"
                    alt="Google Play"
                    loading="lazy"
                  />
                </div>
              )}
              {!GOOGLE_PLAY_URL && (
                <p id="download-status" className="sr-only">
                  다운로드 링크가 아직 등록되지 않았습니다.
                </p>
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
