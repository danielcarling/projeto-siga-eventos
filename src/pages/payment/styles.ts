import { styled } from "@stitches/react";

export const LogoContainer = styled('div', {
   display: 'flex',
   justifyContent: 'center',

   margin: '3rem 0',
})

export const EventsPage = styled('div', {
   h2: {
      fontFamily: 'Archivo',
      color: '$white',
      backgroundColor: '$red500',

      display: 'inline',
      padding: '0.5rem',
      borderRadius: 8,
   },
})

export const EventContainer = styled('div', {
   
   img: {
      borderRadius: 20,
   },

   variants: {
      mobile: {
         yes: {
            margin: '1.5rem 2rem',

            img: {
               width: '7rem',
               height: '7rem',
            },

            strong: {
               fontSize: '1.2rem',
            },

            span: {
               fontSize: '.8rem',
            }
         },
         no: {
            margin: '4rem 0 6rem',
         }
      }
   }

})

export const EventInfo = styled('div', {
   display: 'flex',
   flexDirection: 'column',

   strong: {
      fontFamily: 'Archivo',
      fontWeight: 600,
      fontSize: '2rem',
      color: '$red500',
   },

   span: {
      font: '500 1rem Inter',
      color: '$white',
      background: '$red500',
      padding: '0 1.5rem',
      borderRadius: 15,
   },
})

export const LocationContainer = styled('div', {
   
})

export const EventGroup = styled('div', {
   display: 'flex',
   flexWrap: 'wrap',
   justifyContent: 'space-around',
})
   