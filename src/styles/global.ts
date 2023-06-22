import { globalCss, styled } from "@stitches/react"

export const globalStyles = globalCss({
   '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
   },

   body: {
      backgroundColor: '$gray900',
      color: '$gray100',
      '-webkit-font-smoothing': 'antialiased',
   },

   'body, input, textarea, button': {
      fontFamily: 'Roboto',
      fontWeight: 400,
   }
})

export const Container = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start',
   justifyContent: 'center',
   minHeight: '100vh',
})