import { styled } from "@stitches/react";

export const HeaderContainer = styled('header', {
   display: 'flex',
   justifyContent: 'space-between',
   margin: '1.5rem',

   nav: {
      display: 'flex',
      gap: 20,

      marginTop: '0.8rem'
   },

   a: {
      textDecoration: 'none',
      color: '#B2322D',

      fontFamily: 'Inter',
      height: '1.2em',
   },

   'a:hover': {
      color: '#6b2421',
   },

   button: {
      width: '7rem',
      height: '3rem',
      borderRadius: 12,

      border: '1px solid #DB3C34',
      color: '#183282',

      transition: '0.2s',

      '&:hover': {
         background: '#dddcdc',
         cursor: 'pointer',
      }
   }
})

export const ImageContainer = styled('div', {
   display: 'flex',
   background: '#EA3F37',
   padding: 11,
   borderRadius: 18,
})
