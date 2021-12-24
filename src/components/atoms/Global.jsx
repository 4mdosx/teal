import { Global, css } from '@emotion/react'
import { text } from './colors'

export default function GlobalStyle() {
  return (
    <div>
      <Global
        styles={css`
          body{
            font-size: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            height: 100vh;
            overflow: hidden;
            background-color: rgb(48, 56, 70, .9);
            color: aliceblue;
          }
          .app {
            color: ${text.primary};
            position: relative;
            overflow: hidden;
            margin: auto;
            width: 100vw;
            height: 100vh;
            max-width: 400px;
            max-height: 812px;
            border-radius: 8px;
            box-shadow: 0 0 6px 0 #000;
            background-color: rgb(48, 56, 70, 0.5);
          }
        `}
      />
    </div>
  )
}
