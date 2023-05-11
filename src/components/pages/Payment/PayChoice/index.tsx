import { useState } from "react";
import { CardSelected, PayChoiceContainer, PayFormContainer, PayFormSelectors, PixSelected } from "./styles";
import Image from "next/image";
import QrCodeImg from '../../../../assets/qrcode.png'

export default function PayChoice() {
   const [checked, setChecked] = useState('');

   return (
      <PayFormContainer>
         <h2>ESCOLHA O MEIO DE PAGAMENTO</h2>

         <PayFormSelectors>
            <label htmlFor="pix">
               <PayChoiceContainer>
                  Pix
                  <input
                     type="radio"
                     name="payOption"
                     id="pix"
                     checked={checked === 'pix'}
                     onChange={() => setChecked('pix')}
                     required
                  />
               </PayChoiceContainer>
            </label>

            <label htmlFor="card">
               <PayChoiceContainer>
                  Cartão
                  <input type="radio"
                     name="payOption"
                     id="card"
                     checked={checked === 'card'}
                     onChange={() => setChecked('card')}
                     required
                  />
               </PayChoiceContainer>
            </label>

            <label htmlFor="bankSlip">
               <PayChoiceContainer>
                  Boleto
                  <input type="radio"
                     name="payOption"
                     id="bankSlip"
                     checked={checked === 'bankSlip'}
                     onChange={() => setChecked('bankSlip')}
                     required
                  />
               </PayChoiceContainer>
            </label>

         </PayFormSelectors>

         {checked === 'pix' && (
            <PixSelected>
               <strong>Para pagar com o Pix, você pode escanear o QR Code ou copiar e colar a chave Pix.</strong>
               <Image 
                  src={QrCodeImg} 
                  width={150} 
                  alt="" 
               />
               <span>00020126270014BR.GOV.BCB.PIX0105teste5204000053039865802BR5905teste6005teste62070503***6304FE0D</span>
            </PixSelected>
         )}

         {checked === 'card' && (
            <CardSelected>
               <strong>Insira as informações do seu cartão de crédito para continuar:</strong>

               
            </CardSelected>
         )}

         {checked === 'bankSlip' && (
            <CardSelected>
               <h1>Texto 3</h1>
            </CardSelected>
         )}
      </PayFormContainer>
   )
}
