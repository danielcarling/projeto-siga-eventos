import Link from 'next/link'
import Logo from '../SigaLogo'
import { HeaderContainer } from './styles'
import { useWindowDimensions } from '@/src/utils/windowWidth'


export default function Header() {
   return(
      <HeaderContainer>
         <Logo />


         <nav>
            <Link href={'/home'}>Home</Link>
            <Link href={'/payment'}>Contratar</Link>
            <Link href={'/home/#trademarks'}>Marcas Registradas</Link>
         </nav>

         <div>
            <button>Entrar</button>
         </div>
      </HeaderContainer>
   )
}