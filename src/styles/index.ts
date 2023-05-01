import { createStitches } from '@stitches/react' 

export const {
   config,
   styled,
   css,
   globalCss,
   keyframes,
   getCssText,
   theme,
   createTheme,
} = createStitches({
   theme: {
      colors: {
         white: '#f5f5f5',

         red500: '#ea3f37',
         redGradient: 'linear-gradient(153.14deg, #EA3F36 0%, #910808 78.76%)',
         redGradient2: 'linear-gradient(180deg, #FD5B5B 23.44%, #910808 100%)',
      }
   }
})