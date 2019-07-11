import React, { FunctionComponent } from 'react'

import {
  DefaultSection,
  DefaultSectionHeading,
  DefaultSectionImage,
  DefaultSectionParagraph,
} from '../../../../components/default-section'

export const GraphicCreationSection: FunctionComponent = () => (
  <DefaultSection direction="rtl">
    <DefaultSectionImage src="/assets/creative_team.svg" alt="" />
    <DefaultSectionHeading>Criação gráfica</DefaultSectionHeading>
    <DefaultSectionParagraph>
      Onde quer seja a divulgação — redes sociais, email ou materiais impressos.
      Nós fazemos a produção visual.
    </DefaultSectionParagraph>
  </DefaultSection>
)
