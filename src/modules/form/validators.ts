import { exist } from '../../utils/exist'
import { Validator } from './types'

export const required = exist

export const minLength = (min: number): Validator => (v: string) =>
  exist(v) ? v.length >= min : true

export const pattern = (p: RegExp): Validator => v =>
  exist(v) ? p.test(v) : true

export const instagramPattern = pattern(/^(?!.*\.\.)(?!.*\.$)\@?[^\W][\w.]*$/)

export const emailPattern = pattern(/.+\@.+\..+/)
