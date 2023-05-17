import Image from "next/image";
import telaBranca from '../../../../assets/tela-branca.jpg'
import { TrademarkImg } from "./styles";
import { useWindowDimensions } from "@/src/utils/windowWidth";

export default function Trademark() {
   return(
      <TrademarkImg
         mobile={useWindowDimensions()}
      >
         <Image src={telaBranca} width={150} height={150} alt="" />
      </TrademarkImg>
   )
}