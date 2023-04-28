import { globalCss } from "@stitches/react"

export const globalStyles = globalCss({
   '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
   },

   body: {
      backgroundColor: '$white',
      '-webkit-font-smoothing': 'antialised',
      maxWidth: '50rem',
      margin: 'auto',
   },

   button: {
      fontFamily: 'Inter',
      fontWeight: 700,
   }
})