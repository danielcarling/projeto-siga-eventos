import { styled } from "@stitches/react"

export const SiteInfo = styled('div', {
   margin: '3rem 5.25rem 2.25rem',

   h1: {
      fontFamily: 'Archivo',
      fontSize: '2.5rem',

      marginBottom: '1rem',
      
      background: '$redGradient',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
   },

   span: {
      fontFamily: 'Inter',
      fontSize: '1.3rem',
      color: '#9d2b28',
   },
})

export const LinkContainer = styled('div', {
   margin: '2rem 0 4rem 0',

   display: 'flex',
   gap: '2rem',
   justifyContent: 'center',

a: {
   fontFamily: 'Inter',
   fontWeight: 700,
   textDecoration: 'none',
   color: '$white',


   width: '10.25rem',
   height: '3.5rem',
   borderRadius: 12,

   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   textAlign: 'center',
},

'a:nth-child(1)': {
   background: 'radial-gradient(50% 428.83% at 50% 50%, #A32D29 0.01%, #EA3F38 54.17%)'
},

'a:nth-child(2)': {
   background: 'linear-gradient(96.65deg, #03F65B 0%, #00480C 100%)'
},
})