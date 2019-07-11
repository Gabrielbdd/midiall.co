import clxs from 'clsx'
import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

import { Styleable } from '../../interfaces'

const cardDescription = css`
  grid-area: description;
  margin: 0;
`

export const CardDescription: FunctionComponent<Styleable> = ({
  className,
  children,
}) => <p className={clxs(cardDescription, className)}>{children}</p>
