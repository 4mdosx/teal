import { css } from '@emotion/react'

// base
export const spacing = 0.25
export const spacingN = (n) => `${spacing * n}rem`

// layout
export const p = (n) => css`
  padding-top: ${spacingN(n)};
  padding-right: ${spacingN(n)};
  padding-bottom: ${spacingN(n)};
  padding-left: ${spacingN(n)};
`
export const pX = (n) =>
  css`
    padding-left: ${spacingN(n)};
    padding-right: ${spacingN(n)};
  `
export const pY = (n) =>
  css`
    padding-top: ${spacingN(n)};
    padding-bottom: ${spacingN(n)};
  `
export const pL = (n) =>
  css`
    padding-left: ${spacingN(n)};
  `
export const pR = (n) =>
  css`
    padding-right: ${spacingN(n)};
  `
export const pT = (n) =>
  css`
    padding-top: ${spacingN(n)};
  `
export const pB = (n) =>
  css`
    padding-bottom: ${spacingN(n)};
  `

export const m = (n) => css`
  margin-top: ${spacingN(n)};
  margin-right: ${spacingN(n)};
  margin-bottom: ${spacingN(n)};
  margin-left: ${spacingN(n)};
`
export const mX = (n) =>
  css`
    margin-left: ${spacingN(n)};
    margin-right: ${spacingN(n)};
  `
export const mY = (n) =>
  css`
    margin-top: ${spacingN(n)};
    margin-bottom: ${spacingN(n)};
  `
export const mL = (n) =>
  css`
    margin-left: ${spacingN(n)};
  `
export const mR = (n) =>
  css`
    margin-right: ${spacingN(n)};
  `
export const mT = (n) =>
  css`
    margin-top: ${spacingN(n)};
  `
export const mB = (n) =>
  css`
    margin-bottom: ${spacingN(n)};
  `

// display
export const inline = css`
  display: inline;
`
export const block = css`
  display: block;
`
export const inlineBlock = css`
  display: inline-block;
`
export const flex = css`
  display: flex;
`
