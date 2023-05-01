
import { PayChoiceContainer, PayFormContainer, PayFormSelectors } from "./styles";

export default function PayChoice() {
   return (
      <PayFormContainer>
         <h2>ESCOLHA O MEIO DE PAGAMENTO</h2>

         <PayFormSelectors>
            <label htmlFor="pix">
               <PayChoiceContainer>
                  Pix
                  <input type="radio" name="payOption" id="pix" />
               </PayChoiceContainer>
            </label>

            <label htmlFor="card">
               <PayChoiceContainer>
                  Cartão
                  <input type="radio" name="payOption" id="card" />
               </PayChoiceContainer>
            </label>

            <label htmlFor="bankSlip">
               <PayChoiceContainer>
                  Boleto
                  <input type="radio" name="payOption" id="bankSlip" />
               </PayChoiceContainer>
            </label>

         </PayFormSelectors>
      </PayFormContainer>
   )
}