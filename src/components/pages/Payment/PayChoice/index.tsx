import { useState } from "react";
import { BankSlipSelected, CardInfo, CardInfoContainer, CardNumberAndName, CardSelected, PayChoiceContainer, PayFormContainer, PayFormSelectors, PixSelected } from "./styles";
import Image from "next/image";
import QrCodeImg from '../../../../assets/qrcode.png'
import Link from "next/link";

export default function PayChoice() {
   const [checked, setChecked] = useState('');
   const [cardNumber, setCardNumber] = useState('');

   const handleCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const cardNumberValue = event.target.value;
      const cleanedCardNumber = cardNumberValue.replace(/\D/g, "");
    
      const limitedCardNumber = cleanedCardNumber.slice(0, 16);
    
      const formattedCardNumber = limitedCardNumber
        .replace(/(\d{4})(\d)/, "$1 $2")
        .replace(/(\d{4})(\d)/, "$1 $2")
        .replace(/(\d{4})(\d)/, "$1 $2")
        .replace(/(-\d{4})\d+?$/, "$1");
    
      setCardNumber(formattedCardNumber);
    };

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
               {/* <button>Copiar</button> */}
            </PixSelected>
         )}

         {checked === 'card' && (
            <CardSelected>
               <p>Insira as informações do seu cartão de crédito para continuar</p>

               <CardNumberAndName>
                  <label htmlFor="cardNumber">
                     Número do cartão:
                     <input 
                        type="text" 
                        name="cardNumber" 
                        id="cardNumber"
                        value={cardNumber}
                        onChange={handleCardChange}
                        required
                     />
                  </label>
                  <label htmlFor="cardName">
                     Nome impresso no cartão:
                     <input 
                        type="text" 
                        name="cardName" 
                        id="cardName"
                        required
                     />
                  </label>
               </CardNumberAndName>

               <CardInfoContainer>
                  <CardInfo>
                     <label htmlFor="expirationMonth">
                        Data de vencimento:
                     </label>
                     <select
                        name="expirationMonth"
                        id="expirationMonth"
                        required>
                        <option value="" disabled selected>Mês</option>
                        <option value="01">Janeiro</option>
                        <option value="02">Fevereiro</option>
                        <option value="03">Março</option>
                        <option value="04">Abril</option>
                        <option value="05">Maio</option>
                        <option value="06">Junho</option>
                        <option value="07">Julho</option>
                        <option value="08">Agosto</option>
                        <option value="09">Setembro</option>
                        <option value="10">Outubro</option>
                        <option value="11">Novembro</option>
                        <option value="12">Dezembro</option>
                     </select>
                  </CardInfo>
                  <CardInfo>
                     <select
                        name="expirationYear"
                        id="expirationYear"
                        required>
                        <option value="" disabled selected>Ano</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                        <option value="2031">2031</option>
                        <option value="2032">2032</option>
                        <option value="2033">2033</option>
                        <option value="2034">2034</option>
                     </select>
                  </CardInfo>
                  <CardInfo>
                     <label htmlFor="cvv">
                        CVV
                     </label>
                     <input
                        type="number"
                        name="cvv"
                        id="cvv"
                        max={999}
                        required
                     />
                  </CardInfo>
               </CardInfoContainer>

            </CardSelected>
         )}

         {checked === 'bankSlip' && (
            <BankSlipSelected>
               <strong>Cliqui no botão abaixo para gerar o boleto:</strong>
               <Link href={'#'}>GERAR BOLETO</Link>
            </BankSlipSelected>
         )}
      </PayFormContainer>
   )
}
