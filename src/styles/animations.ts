import { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
    from {
      opacity: 0;
    };
    to {
      opacity: 1;
    }
`

const widthKeyframes = keyframes`
    from {
      width: 40px;
    };
    to {
      width: 260px;
    }
`

export const fadeIn = ({ time = '0.15s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `

export const widthAnimation = ({ time = '0.3s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${widthKeyframes} ${type};
  `
