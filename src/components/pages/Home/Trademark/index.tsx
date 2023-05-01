import Image from "next/image";
import telaBranca from '../../../../assets/tela-branca.jpg'
import { TrademarkImg } from "./styles";

export default function Trademark() {
   return(
      <TrademarkImg>
         <Image src={telaBranca} width={150} height={150} alt="" />
      </TrademarkImg>
   )
}