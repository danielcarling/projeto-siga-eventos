import { styled } from "@stitches/react"

export const PaymentContainer = styled('div', {
   background: '$redGradient',
   maxWidth: 800,
   margin: 'auto',
   borderRadius: 20,
   padding: '2.5rem 2rem',
   color: '$white',
   fontFamily: 'Archivo',
   
   h2: {
      fontSize: '1.5rem',
      marginBottom: '1.5rem'
   },

   form: {
      display: 'flex',
      flexDirection: 'column'
   },

   label: {
      marginBottom: 8,
   },

   input: {
      height: '2rem',
      marginBottom: 15,
   },
})

export const FormContentContainer = styled('div', {
   display: 'flex',
   gap: '2.5rem',
   
   div: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
   },
})

export const SubmitButton = styled('button', {
   display: 'flex',
   
   margin: '4rem auto 12rem',
   padding: '0.5rem',
   borderRadius: 6,
   border: 0,

   fontWeight: '800',
   fontSize: '1.2rem',
   
   '&:hover': {
      background: '#dddcdc',
      cursor: 'pointer',
   }
})