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
         green500: '#00b37e',
         green700: '#00875f',

         gray900: '#121214',
         gray800: '#202024',
         gray700: '#323238',
         gray500: '#7c7c8a',
         gray400: '#8d8d99',
         gray300: '#c4c4cc',
         gray100: '#e1e1e6',

         white: '#fff',

         red500: '#f75a68',
      },

      fontSizes: {
         sm: '0.75rem',
         md: '0.875rem',
         lg: '1rem',
      }
   }
})