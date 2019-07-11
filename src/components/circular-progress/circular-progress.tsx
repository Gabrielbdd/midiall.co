import { css } from 'linaria'
import React, { FunctionComponent } from 'react'

const circularProgress = css`
  animation: rotate 1.4s linear infinite;
  animation-name: rotate;
  margin: 0 auto;
  color: currentColor;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`

const circle = css`
  animation: dash 1.4s ease-in-out infinite;
  animation-name: dash;
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0px;
  stroke: currentColor;

  @keyframes dash {
    0% {
      stroke-dasharray: 1px, 200px;
      stroke-dashoffset: 0px;
    }

    50% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -15px;
    }

    100% {
      stroke-dasharray: 100px, 200px;
      stroke-dashoffset: -125px;
    }
  }
`

interface Props {
  size?: number
}

export const CircularProgress: FunctionComponent<Props> = ({ size = 20 }) => (
  <div
    className={circularProgress}
    role="progressbar"
    style={{ height: size, width: size }}
  >
    <svg viewBox="22 22 44 44">
      <circle
        className={circle}
        cx="44"
        cy="44"
        r="20.2"
        fill="none"
        stroke-width="3.6"
      />
    </svg>
  </div>
)
