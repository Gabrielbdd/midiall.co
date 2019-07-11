import clsx from 'clsx'
import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

import { Styleable } from '../../interfaces'

const cardImage = css`
  grid-area: image;
  margin: 0;
  padding-bottom: 10px;
`

interface CardImageProps extends Styleable {
  src: string
  alt: string
}

export const CardImage: FunctionComponent<CardImageProps> = ({
  src,
  alt,
  className,
}) => <img src={src} alt={alt} className={clsx(cardImage, className)} />
