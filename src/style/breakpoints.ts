export const sm = 576
export const md = 768
export const lg = 992
export const xl = 1200

type Media = 'sm' | 'md' | 'lg' | 'xl'

const medias = { sm, md, lg, xl }

const breakpoint = (size: number, condition: 'min-width' | 'max-width') =>
  `@media (${condition}: ${size}px)`

// Greater than or equal
export const gte = (media: Media) => breakpoint(medias[media], 'min-width')

// Less than or equal
export const lte = (media: Media) => breakpoint(medias[media] - 1, 'max-width')
