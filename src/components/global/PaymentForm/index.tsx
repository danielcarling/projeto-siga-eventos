import { useState } from "react";
import PayChoice from "../../pages/Payment/PayChoice";
import { FormContentContainer, PaymentContainer, SubmitButton } from "./styles";
import { useWindowDimensions } from "@/src/utils/windowWidth";

export default function PaymentForm() {
   const [cpf, setCpf] = useState("");
   const [tel, setTel] = useState("");
   const [price, setPrice] = useState("");

   const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const cpfValue = event.target.value;

      const cleanedCpf = cpfValue.replace(/\D/g, "");

      // formata para o modelo de cpf caso o tamanho seja menor ou igual a 11
      if (cleanedCpf.length <= 11) {
         const formattedCpf = cleanedCpf
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')

         setCpf(formattedCpf)

         // formata para o modelo de cnpj caso seja maior
      } else if (cleanedCpf.length > 11) {
         const formattedCnpj = cleanedCpf
            .replace(/(\d{2})(\d{3})(\d{3})(\d)/, '$1.$2.$3/$4')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')

         setCpf(formattedCnpj)
      }
   };

   const handleTelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const telValue = event.target.value

      const cleanedTel = telValue.replace(/\D/g, "");
      const limitedTelNumber = cleanedTel.slice(0, 11);

      const formattedTel = limitedTelNumber
         .replace(/(\d)/, '($1')
         .replace(/(\d{2})(\d)/, ('$1) $2'))
         .replace(/(\d{5})/, '$1-')

      setTel(formattedTel)
   }

   const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const priceValue = event.target.value;

      const cleanedPrice = Number(priceValue.replace(/\D/g, "")) / 100;

      if (cleanedPrice > 0) {
         const formattedPrice = cleanedPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
         setPrice(formattedPrice);
      } else {
         setPrice("");
      }
   };

   return (
      <PaymentContainer>
         <h2>PAGAMENTO</h2>

         <form action="POST">
            <label htmlFor="name">Nome do Cliente:</label>
            <input type="text" name="name" id="name" required />

            <FormContentContainer 
               mobile={useWindowDimensions()}
            >
               <div>
                  <label htmlFor="userId">CPF ou CNPJ:</label>
                  <input
                     type="text"
                     name="userId"
                     id="userId"

                     value={cpf}
                     onChange={handleCpfChange}
                     required
                  />
               </div>

               <div>
                  <label htmlFor="phoneNumber">Telefone do Cliente:</label>
                  <input
                     type="tel"
                     name="phoneNumber"
                     id="phoneNumber"
                     value={tel}
                     onChange={handleTelChange}
                     required />
               </div>
            </FormContentContainer>

            <label htmlFor="email">Email do Cliente:</label>
            <input
               type="email"
               name="email"
               id="email"
               required
            />

            <h2>VALOR DA CONTRATAÇÃO</h2>

            <FormContentContainer
               mobile={useWindowDimensions()}
            >
               <div>
                  <label htmlFor="price">Valor Total da Contratação:</label>
                  <input
                     type="text"
                     name="price"
                     id="price"
                     value={price}
                     onChange={handlePriceChange}
                     required
                  />
               </div>

               <div>
                  <label htmlFor="parcels">Quantidade de Parcelas:</label>
                  {/* <input type="number" name="parcels" id="parcels" min={0} required /> */}
                  <select name="parcels" id="parcels">
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                     <option value="6">6</option>
                     <option value="7">7</option>
                     <option value="8">8</option>
                     <option value="9">9</option>
                     <option value="10">10</option>
                     <option value="11">11</option>
                     <option value="12">12</option>
                  </select>
               </div>
            </FormContentContainer>

            <PayChoice />

            <SubmitButton type="submit">GERAR PAGAMENTOS</SubmitButton>
         </form>
      </PaymentContainer>
   );
}
