import clsx from 'clsx'
import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

import { Styleable } from '../../interfaces'

const cardTitle = css`
  grid-area: title;
  font-size: 1.2rem;
  margin: 0;
`

export const CardTitle: FunctionComponent<Styleable> = ({
  className,
  children,
}) => <h4 className={clsx(cardTitle, className)}>{children}</h4>
