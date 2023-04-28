import Image from "next/image";

import logoImg from '../../../assets/project-logo.png'
import { LogoContainer } from "./styles";

export default function Logo() {
   return(
      <LogoContainer>
         <Image src={logoImg} width={200} alt="" />
      </LogoContainer>
   )
}