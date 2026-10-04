type DecorationKind =
  | 'helix-top'
  | 'helix-bottom'
  | 'cylinder-left'
  | 'cylinder-right'
  | 'cylinder-brand'
  | 'sphere'
  | 'torus'
  | 'story-cylinder'
  | 'story-helix'

const images: Record<DecorationKind, string | null> = {
  'helix-top': 'image_helix.png',
  'helix-bottom': 'image_helix.png',
  'cylinder-left': 'image_cylinder.png',
  'cylinder-right': 'image_cylinder.png',
  'cylinder-brand': 'image_cylinder.png',
  sphere: 'image_sphere.png',
  torus: 'image_torus.png',
  'story-cylinder': 'image_cylinder.png',
  'story-helix': 'image_helix.png',
}

export function Decoration({ kind }: { kind: DecorationKind }) {
  const image = images[kind]

  return (
    <div className={`decoration decoration-${kind}`} aria-hidden="true">
      <div className="decoration-art">
        {image && (
          <img
            src={`${import.meta.env.BASE_URL}assets/${image}`}
            alt=""
            loading={kind.startsWith('story') ? 'lazy' : 'eager'}
          />
        )}
        <span className="decoration-tint" />
      </div>
    </div>
  )
}
