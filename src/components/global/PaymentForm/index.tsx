import { useState } from "react";
import PayChoice from "../../pages/Payment/PayChoice";
import { FormContentContainer, PaymentContainer, SubmitButton } from "./styles";

export default function PaymentForm() {
   const [cpf, setCpf] = useState("");
   const [tel, setTel] = useState("");
   const [price, setPrice] = useState("");

   const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const cpfValue = event.target.value;

      const cleanedCpf = cpfValue.replace(/\D/g, "");

      const formattedCpf = cleanedCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

      setCpf(formattedCpf);
   };

   const handleTelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const telValue = event.target.value

      const cleanedTel = telValue.replace(/\D/g, "");

      const formattedTel = cleanedTel.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

      setTel(formattedTel)
   }

   const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const priceValue = event.target.value;
    
      // Remove tudo que não é número e converte para centavos
      const cleanedPrice = Number(priceValue.replace(/\D/g, "")) / 100;
    
      // Verifica se o valor inserido é maior que zero antes de formatar
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

            <FormContentContainer>
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

            <FormContentContainer>
               <div>
                  <label htmlFor="price">Valor Total da Contratação:</label>
                  <input
                     type="text"
                     name="price"
                     id="price"
                     value={price}
                     onChange={handlePriceChange}
                     min={0}
                     required
                  />
               </div>

               <div>
                  <label htmlFor="parcels">Quantidade de Parcelas:</label>
                  <input type="number" name="parcels" id="parcels" min={0} required />
               </div>
            </FormContentContainer>

            <PayChoice />

            <SubmitButton type="submit">GERAR PAGAMENTOS</SubmitButton>
         </form>
      </PaymentContainer>
   );
}
