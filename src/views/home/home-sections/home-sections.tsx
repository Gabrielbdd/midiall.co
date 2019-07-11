import React from 'react'

import { EstablishPresenceSection } from './establish-presence-section/establish-presence-section'
import { GraphicCreationSection } from './grapic-creation-section/graphic-creation-section'
import { HeroSection } from './hero-section/hero-section'
import { ServicesCardsSection } from './services-cards-section/services-cards-section'
import { SocialManagementSection } from './social-management-section/social-management-section'
import { TalkToUsSection } from './talk-to-us-section/talk-to-us-section'
import { VisualIdentitySection } from './visual-identity-section/visual-identity-section'

export const HomeSections = () => (
  <>
    <HeroSection />
    <ServicesCardsSection />
    <SocialManagementSection />
    <VisualIdentitySection />
    <GraphicCreationSection />
    <EstablishPresenceSection />
    <TalkToUsSection />
  </>
)
