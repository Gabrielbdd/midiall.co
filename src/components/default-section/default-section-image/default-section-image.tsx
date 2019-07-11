import clsx from 'clsx'
import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

import { lte } from '../../../style/breakpoints'
import { Styleable } from '../../interfaces'

const sectionImage = css`
  grid-area: image;
  justify-self: center;
  width: 100%;

  ${lte('lg')} {
    max-width: 80%;
    margin-top: 20px;
  }
`

interface Props extends Styleable {
  src: string
  alt: string
}

export const DefaultSectionImage: FunctionComponent<Props> = ({
  src,
  alt,
  className,
}) => <img src={src} alt={alt} className={clsx(sectionImage, className)} />
