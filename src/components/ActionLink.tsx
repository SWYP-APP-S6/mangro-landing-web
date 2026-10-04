import type { ReactNode } from 'react'

type ActionLinkProps = {
  children: ReactNode
  href: string
  className?: string
  describedBy?: string
}

export function ActionLink({
  children,
  href,
  className = '',
  describedBy,
}: ActionLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      <span className="action-link-circle" aria-hidden="true">
        <span className="action-link-arrow">
          <img
            src={`${import.meta.env.BASE_URL}assets/icon_arrow_right.svg`}
            alt=""
          />
        </span>
      </span>
    </>
  )

  if (!href) {
    return (
      <button
        className={`action-link ${className}`}
        type="button"
        disabled
        aria-describedby={describedBy}
      >
        {content}
      </button>
    )
  }

  const external = !href.startsWith('#')

  return (
    <a
      className={`action-link ${className}`}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-describedby={describedBy}
    >
      {content}
    </a>
  )
}
