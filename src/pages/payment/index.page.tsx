import Header from '@/src/components/global/Header'
import PageInfo from '../../components/global/PageInfo'
import Logo from '../../components/global/SigaLogo'
import { Container } from '../../styles/pages/app'
import PaymentForm from '@/src/components/global/PaymentForm'
import Info from '../../components/pages/Payment/Aside'
import Image from 'next/image'
import telaBranca from '../../assets/tela-branca.jpg'
import { EventContainer, EventGroup, EventInfo, EventsPage, LocationContainer, LogoContainer } from './styles'


interface Event {
   name: string;
   location: string;
 }
 const events: Event[] = [
   {
     name: "SIMAP",
     location: "SINOP - MT",
   },
   {
      name: "EVENTO ABC",
      location: "SINOP - MT"
   },
   {
     name: "SIMAP",
     location: "SINOP - MT",
   },
   {
      name: "EVENTO ABC",
      location: "SINOP - MT"
   },
   {
     name: "SIMAP",
     location: "SINOP - MT",
   },
   {
      name: "EVENTO ABC",
      location: "SINOP - MT"
   },
 ];

export default function Payment() {
   return (
      <Container>
         <Header />
         <PageInfo />

         <PaymentForm />

         <Info />

         <LogoContainer>
            <Logo />
         </LogoContainer>

         <EventsPage>
            <h2>Gestão de Clientes:</h2>

            <EventGroup>
               <>
                  {events.map((event) => (
                     <EventContainer key={event.name}>
                        <Image src={telaBranca} width={200} height={200} alt="" />
                        <EventInfo>
                           <strong>{event.name}</strong>
                           <LocationContainer>
                              <span>{event.location}</span>
                           </LocationContainer>
                        </EventInfo>
                     </EventContainer>
                  ))}
               </>
            </EventGroup>
         </EventsPage>
      </Container>
   )
}