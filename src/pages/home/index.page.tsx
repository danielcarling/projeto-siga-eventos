import Header from "@/src/components/global/Header";
import { Container } from "@/src/styles/pages/app";
import { DiscountContainer, DiscountContent, InfoContainer, InfoHeader, TrademarkGroup, TrademarksContainer } from "./styles";
import Image from "next/image";
import telaBranca from "../../assets/tela-branca.jpg"
import Trademark from "@/src/components/pages/Home/Trademark";
import PageInfo from "@/src/components/global/PageInfo";
import PaymentForm from "@/src/components/global/PaymentForm";
import Logo from "@/src/components/global/SigaLogo";
import { useWindowDimensions } from "@/src/utils/windowWidth";

export default function Home() {
   return (
      <Container>
         <Header />
         <PageInfo />

         <DiscountContainer
            mobile={useWindowDimensions()}
         >
            <h2>TÍTULO DO DESCONTO</h2>

            <DiscountContent
               mobile={useWindowDimensions()}
            >
               <Image src={telaBranca} width={400} alt="" />
               <div>
                  <strong>Descrição:</strong>
                  <p>a</p>
                  <p>a</p>
                  <p>a</p>
                  <p>a</p>
                  <p>a</p>
                  <p>a</p>
                  <p>a</p>
                  <p>a</p>
                  <p>a</p>
                  <p>a</p>
                  <p>a</p>
                  <p>a</p>
               </div>
            </DiscountContent>
         </DiscountContainer>

         <TrademarksContainer>
            <h2 id="trademarks">Marcas Registradas:</h2>

            <TrademarkGroup>
               <Trademark />
               <Trademark />
               <Trademark />
               <Trademark />
            </TrademarkGroup>
         </TrademarksContainer>

         <PaymentForm />

         <InfoContainer
            mobile={useWindowDimensions()}
         >
            <InfoHeader
               mobile={useWindowDimensions()}
            >
               <h3>Informações:</h3>
               <Logo />
            </InfoHeader>
            <div>
               <strong>Localização:</strong>
               <p>aaaa</p>

               <strong>WhatsApp:</strong>
               <p>aaaa</p>

               <strong>Mais Informações:</strong>
               <p>aaa</p>
            </div>
         </InfoContainer>
      </Container>
   )
}