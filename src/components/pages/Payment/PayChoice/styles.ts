import { styled } from "@stitches/react"

export const PayFormContainer = styled('div', {
   marginTop: '2rem',

   h2: {
      fontSize: '1.5rem',
      fontWeight: 800,
      textAlign: 'center',
   },
})

export const PayFormSelectors = styled('div', {
   display: 'flex',
   justifyContent: 'space-around',

   div: {
      color: 'Black',
      background: '$white',
      width: '7rem',
      height: '7rem',
      borderRadius: 8,

      textAlign: 'center',
   }
})

export const PayChoiceContainer = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
})

export const PixSelected = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',

   wordBreak: 'break-all',
   textAlign: 'center',
   fontFamily: 'Inter',

   strong: {
      margin: '1rem 0',
      fontSize: '1.1rem',
   },

   img: {
      marginBottom: '1rem',
   },
   
   span: {
      
   },
})

export const CardSelected = styled('div', {
   fontFamily: 'Archivo',
   marginTop: '1.5rem',

   p: {
      textAlign: 'center',
      fontSize: '1.2rem',
      marginBottom: '1.5rem',
   }
})

export const CardNumberAndName = styled('div', {
   display: 'flex',
   flexDirection: 'column',

   label: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
   }
})

export const CardYear = styled('div', {

})

export const CardInfoContainer = styled('div', {
   display: 'flex',
   justifyContent: 'center',
   gap: '1rem',
})

export const CardInfo = styled('div', {
   display: 'flex',
   flexDirection: 'column',

   justifyContent: 'flex-end',
})

export const BankSlipSelected = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '1rem',

   marginTop: '2rem',

   a: {
      background: '$white',
      padding: '1rem 1.5rem',
      textDecoration: 'none',
      borderRadius: 10,

      width: '12rem',

      color: 'black',
      fontWeight: 700,
   }
})