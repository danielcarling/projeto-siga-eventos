import { HeaderWrapper } from "./styles";

import logoImg from '../../../assets/logo.svg'
import Image from "next/image";
import { Container } from "@/src/styles/global";

export default function Header() {
   return(
      <Container>
         <HeaderWrapper>
            <Image src={logoImg} width={130} height={52} alt="" />
         </HeaderWrapper>
      </Container>
   )
}