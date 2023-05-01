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