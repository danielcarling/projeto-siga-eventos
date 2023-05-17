import Image from "next/image";

import logoImg from '../../../assets/project-logo.png'
import { LogoContainer } from "./styles";
import { useWindowDimensions } from "@/src/utils/windowWidth";

export default function Logo() {
   return(
      <LogoContainer
         mobile={useWindowDimensions()}
      >
         <Image src={logoImg} width={200} alt="" />
      </LogoContainer>
   )
}