import React from 'react'

import {
  DefaultSection,
  DefaultSectionHeading,
  DefaultSectionImage,
  DefaultSectionParagraph,
} from '../../../../components/default-section'

export const SocialManagementSection = () => (
  <DefaultSection direction="rtl">
    <DefaultSectionHeading as="h2">
      Gestão de mídias sociais
    </DefaultSectionHeading>

    <DefaultSectionParagraph>
      No Facebook e Instagram, nós cuidamos de cada etapa: Criação de conteúdo,
      programação de posts e monitoramento de resultados.
    </DefaultSectionParagraph>

    <DefaultSectionImage
      src="/assets/social_growth.svg"
      alt="Crescimento em redes sociais"
    />
  </DefaultSection>
)
