import Link from "next/link";
import { LinkContainer, SiteInfo } from "./styles";

export default function PageInfo() {
   return(
      <SiteInfo>
         <h1>Garanta a exclusividade de sua marca com a SIGAMARCAS</h1>
         
         <span>Levando tranquilidades a Empresários de Sinop e Região</span>
         <LinkContainer>
            <Link href={'/home/#trademarks'}>Marcas Registradas</Link>
            <Link href={'#'}>Falar no WhatsApp</Link>
         </LinkContainer>
      </SiteInfo>
   )
}