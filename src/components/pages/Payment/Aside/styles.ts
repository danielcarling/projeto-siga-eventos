import { styled } from "@stitches/react";

export const AsideContainer = styled('div', {
   background: '$redGradient2',
   width: '40rem',
   margin: '-9rem auto 0 auto',
   borderRadius: 20,
   border: '5px solid $white',
   padding: 20,
   
   fontFamily: 'Archivo',
   color: '$white',

   display: 'flex',
   gap: '3rem',

   h3: {
      fontSize: '1.4rem'
   },

   p: {
      fontFamily: 'Inter',
      fontSize: '0.8rem',
   }
})

export const AsideContent = styled('div', {
   // display: 'flex',
   // flexDirection: 'column',
   
   margin: '0 1rem 2rem 0',
})