import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

const sectionExtra = css`
  grid-area: extra;
`

export const DefaultSectionExtra: FunctionComponent = ({ children }) => (
  <div className={sectionExtra}>{children}</div>
)
