import { globalCss } from "@stitches/react"

export const globalStyles = globalCss({
   '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
   },

   body: {
      backgroundColor: '$gray800',
      '-webkit-font-smoothing': 'antialised',
      fontFamily: 'Roboto',
      lineHeight: '1.6',
   },
})