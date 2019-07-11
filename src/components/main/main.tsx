import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

const main = css`
  overflow: hidden;
`

export const Main: FunctionComponent = ({ children }) => (
  <main className={main}>{children}</main>
)
