import clsx from 'clsx'
import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

import { lte } from '../../../style/breakpoints'
import { Styleable } from '../../interfaces'

const sectionParagraph = css`
  grid-area: paragraph;
  margin: 16px 0;

  ${lte('lg')} {
    text-align: center;
  }
`

interface Props extends Styleable {}

export const DefaultSectionParagraph: FunctionComponent<Props> = ({
  children,
  className,
}) => <p className={clsx(sectionParagraph, className)}>{children}</p>
