import { useEffect, useRef } from 'react'

const assetBase = `${import.meta.env.BASE_URL}assets/`

const valueCards = [
  {
    number: '01',
    title: '마감 임박 식자재 할인',
    icon: 'icon_value_discount.svg',
    href: '#step-01',
  },
  {
    number: '02',
    title: '할인 상태 간편하게 확인',
    icon: 'icon_value_status.svg',
    href: '#step-02',
  },
  {
    number: '03',
    title: '기다림 없이 픽업 가능',
    icon: 'icon_value_pickup.svg',
    href: '#step-03',
  },
]

function getCardColor(distance: number) {
  if (distance >= 2) return 'var(--color-primary-100)'

  const innerColor = distance < 1 ? '600' : '300'
  const outerColor = distance < 1 ? '300' : '100'
  const innerWeight = (1 - (distance % 1)) * 100

  return `color-mix(in srgb, var(--color-primary-${innerColor}) ${innerWeight.toFixed(2)}%, var(--color-primary-${outerColor}))`
}

export function ValueCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const cards = [...carousel.querySelectorAll<HTMLElement>('.value-card')]
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animationFrame = 0

    const updateColors = () => {
      const viewport = carousel.getBoundingClientRect()
      const positions = cards.map((card) => card.getBoundingClientRect())
      const cardSpacing = positions[1].left - positions[0].left
      if (cardSpacing <= 0) return

      const center = viewport.left + viewport.width / 2

      // Read positions together before writing colors to avoid repeated layout work.
      cards.forEach((card, index) => {
        const position = positions[index]
        const distance = Math.abs(position.left + position.width / 2 - center) / cardSpacing
        const color = getCardColor(distance)
        if (card.style.getPropertyValue('--value-card-color') !== color) {
          card.style.setProperty('--value-card-color', color)
        }

        const contentOpacity = Math.max(0, Math.min(1, 2 - distance)).toFixed(3)
        if (card.style.getPropertyValue('--value-card-content-opacity') !== contentOpacity) {
          card.style.setProperty('--value-card-content-opacity', contentOpacity)
        }
      })
    }

    const animateColors = () => {
      updateColors()
      animationFrame = window.requestAnimationFrame(animateColors)
    }

    const syncMotion = () => {
      window.cancelAnimationFrame(animationFrame)
      if (motionPreference.matches) {
        cards.forEach((card) => {
          card.style.removeProperty('--value-card-color')
          card.style.removeProperty('--value-card-content-opacity')
        })
      } else {
        animateColors()
      }
    }

    syncMotion()
    motionPreference.addEventListener('change', syncMotion)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      motionPreference.removeEventListener('change', syncMotion)
    }
  }, [])

  return (
    <div ref={carouselRef} className="values-carousel">
      <div className="values-track">
        {[0, 1].map((groupIndex) => (
          <div className="values-group" key={groupIndex} aria-hidden={groupIndex === 1 || undefined}>
            {[...valueCards, ...valueCards].map((value, cardIndex) => {
              const isDuplicate = groupIndex === 1 || cardIndex >= valueCards.length

              return (
                <a
                  className={`value-card value-card-${value.number}`}
                  href={value.href}
                  key={`${value.number}-${cardIndex}`}
                  aria-hidden={isDuplicate || undefined}
                  tabIndex={isDuplicate ? -1 : undefined}
                >
                  <div className="value-card-content">
                    <span className="value-card-number">{value.number}</span>
                    <h3>{value.title}</h3>
                    <span className="value-card-spacer" aria-hidden="true" />
                  </div>
                  <span className="value-card-icon" aria-hidden="true">
                    <img src={`${assetBase}${value.icon}`} alt="" />
                  </span>
                </a>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
