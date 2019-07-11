import { insertAt } from '../../utils/insert-at'
import { repeat } from '../../utils/repeat'

const DIGIT = /\d/
const WORD = /\w/

const old = [
  '(',
  ...repeat(DIGIT, 2),
  ')',
  ' ',
  ...repeat(DIGIT, 4),
  '-',
  ...repeat(DIGIT, 4),
]
const current = insertAt(old, 5, DIGIT)

export const telephone = (raw: string) => (raw.length === 15 ? current : old)

export const instagram = ['@', ...repeat(WORD, 29)]
