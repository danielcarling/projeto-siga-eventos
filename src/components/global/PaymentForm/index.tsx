import PayChoice from "../../pages/Payment/PayChoice";
import { FormContentContainer, PaymentContainer, SubmitButton } from "./styles";

export default function PaymentForm() {
   return(
   <PaymentContainer>
      <h2>PAGAMENTO</h2>

      <form action="POST">
         <label htmlFor="name">Nome do Cliente:</label>
         <input type="text" name="name" id="name" required />

         <FormContentContainer>
            <div>
               <label htmlFor="userId">CPF ou CNPJ:</label>
               <input type="text" name="userId" id="userId" required />
            </div>

            <div>
               <label htmlFor="phoneNumber">Telefone do Cliente:</label>
               <input type="tel" name="phoneNumber" id="phoneNumber" required />
            </div>
         </FormContentContainer>

         <label htmlFor="email">Email do Cliente:</label>
         <input type="email" name="email" id="email" required />

         <h2>VALOR DA CONTRATAÇÃO</h2>

         <FormContentContainer>
            <div>
               <label htmlFor="price">Valor Total da Contratação:</label>
               <input type="number" name="price" id="price" min={0} required />
            </div>

            <div>
               <label htmlFor="parcels">Quantidade de Parcelas:</label>
               <input type="number" name="parcels" id="parcels"  min={0} required />
            </div>
         </FormContentContainer>

         <PayChoice />

         <SubmitButton type="submit">
            GERAR PAGAMENTOS
         </SubmitButton>
      </form>
   </PaymentContainer>
   )
}