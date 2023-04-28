import { styled } from "@stitches/react";

// export const DiscountContainer = styled('div', {
//    height: '90rem',
//    background: '$redGradient',
// })

export const DiscountContainer = styled('div', {
   background: '$redGradient',
   maxWidth: 800,
   borderRadius: 20,
   padding: '1rem 2rem 5rem',
   color: '$white',
   fontFamily: 'Archivo',


   h2: {
      textAlign: 'center',
      margin: '2rem 0',
   },

   strong: {
      display: 'block',
      fontSize: '1.2rem',
      marginBottom: '1rem',
   },
})

export const DiscountContent = styled('div', {
   display: 'flex',
   gap: '0.5rem',
})

export const TrademarksContainer = styled('div', {
   h2: {
      marginTop: '2rem',

      fontFamily: 'Archivo',
   }
})

export const TrademarkGroup = styled('div', {
   display: 'flex',
   justifyContent: 'space-around',
   margin: '4rem 0'
})

export const InfoContainer = styled('div', {
   background: '$redGradient2',
   borderRadius: 20,
   padding: 20,
   width: '40rem',
   margin: '-8rem auto 2rem',
   border: '5px solid $white',

   fontFamily: 'Archivo',
   fontWeight: 600,
   color: '$white',

   display: 'flex',
   gap: '4rem',

   h3: {
      margin: ' 0 2rem 2rem',
      fontSize: '1.5rem',   
   },

   p: {
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: '0.8rem',
      marginBottom: '1.5rem',
   },

   div: {
      display: 'flex',
      flexDirection: 'column',

      padding: '1rem 0.5rem',
   }
})
