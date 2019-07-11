import { css } from 'linaria'
import React from 'react'

import {
  DefaultSection,
  DefaultSectionHeading,
  DefaultSectionImage,
  DefaultSectionParagraph,
} from '../../../../components/default-section'

const section = css`
  $background-color: #f2f2f2;

  position: relative;
  background-color: $background-color;

  &:after {
    content: '';
    position: absolute;
    background-color: $background-color;
    height: 18px;
    left: 50%;
    mask-image: url(/assets/edge-texture.svg);
    mask-repeat: repeat no-repeat;
    width: 106vw;
    z-index: -1;
    bottom: -17px;
    transform: translateX(-50%);
  }
`

export const VisualIdentitySection = () => (
  <DefaultSection direction="ltr" className={section}>
    <DefaultSectionHeading as="h2">
      Padronização de identidade visual
    </DefaultSectionHeading>

    <DefaultSectionParagraph>
      Para manter a consistência visual da sua marca onde quer que ela apareça.
    </DefaultSectionParagraph>

    <DefaultSectionImage
      src="/assets/organization.svg"
      alt="Mulher com amostra de cores ao redor"
    />
  </DefaultSection>
)
