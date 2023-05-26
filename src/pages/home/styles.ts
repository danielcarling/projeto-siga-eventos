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

   variants: {
      mobile: {
         yes: {
            h2: {
               fontSize: '1.2rem',
            }
         },
         no: {

         }
      }
   }
})

export const DiscountContent = styled('div', {
   display: 'flex',
   flexWrap: 'wrap',
   gap: '0.5rem',

   variants: {
      mobile: {
         yes: {
            img: {
               maxWidth: '100%',
               height: 'auto',
            }
         },
         no: {

         }
      }
   }
})

export const TrademarksContainer = styled('div', {
   h2: {
      marginTop: '2rem',

      fontFamily: 'Archivo',
   }
})

export const TrademarkGroup = styled('div', {
   display: 'flex',
   gap: '1rem',
   flexWrap: 'wrap',
   justifyContent: 'space-around',
   margin: '4rem 0'
})

export const InfoContainer = styled('div', {
   background: '$redGradient2',
   borderRadius: 20,
   padding: 20,
   maxWidth: '40rem',
   margin: '-8rem auto 2rem',
   border: '5px solid $white',

   fontFamily: 'Archivo',
   fontWeight: 600,
   color: '$white',

   display: 'flex',
   flexWrap: 'wrap',
   gap: '3rem',



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
   },

   variants: {
      mobile: {
         yes: {
            maxWidth: '30rem',
         },

         no: {

         }
      }
   }
})

export const InfoHeader = styled('div', {
   h3: {
      fontSize: '1.5rem',
   },

   img: {

   },

   variants: {
      mobile: {
         yes: {
            textAlign: 'center',
            margin: 'auto',

            h3: {
               fontSize: '1.2rem',
               marginBottom: '1rem',
            }
         },

         no: {
            h3: {
               margin: ' 0 2rem 2rem',
            }
         }
      }
   }
})
