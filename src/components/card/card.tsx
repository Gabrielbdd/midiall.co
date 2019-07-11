import clsx from 'clsx'
import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

import { Styleable } from '../interfaces'

const card = css`
  display: grid;
  grid-template:
    'image'
    'title'
    'description'
    / 1fr;
  row-gap: 10px;
`

export const Card: FunctionComponent<Styleable> = ({ className, children }) => (
  <div className={clsx(card, className)}>{children}</div>
)
