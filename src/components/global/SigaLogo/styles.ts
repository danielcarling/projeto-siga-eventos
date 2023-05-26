import { styled } from "@stitches/react";

export const LogoContainer = styled('section', {
   background: '#EA3F37',
   
   borderRadius: 18,

   variants: {
      mobile: {
         yes: {
            padding: 6,

            img: {
               width: '11rem',
               height: 'auto',
            }
         },
         no: {
            padding: 11,
         }
      }
   }
})
