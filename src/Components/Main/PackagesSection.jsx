import styled from "styled-components";
import CardSection from "./CardSection";
import CitiesPreview from "./CitiesPreview";
import Couple from "../../assets/Couple.png";
import Friends from "../../assets/Friends.png";
import FriendsSwimming from "../../assets/FriendsSwimming.png";
import RioDeJaneiro from "../../assets/RioDeJaneiro.png";
import CaldasNovas from '../../assets/CaldasNovas.png'
import RioDasOstras from '../../assets/RioDasOstras.png'
import Amazonia from '../../assets/Amazonia.png'

const Flex = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Packages() {
  return (
    <section>
      <CardSection
        imageSrc={Couple}
        imageAlt='um casal se olhando feliz com balões ao fundo'
        tituloCard="O clima perfeito, no lugar perfeito"
        textoCard="Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço."
        />
      <CardSection
        imageSrc={Friends}
        imageAlt='amigos felizes dançando numa montanha'
        tituloCard="Curta uma nova vibe entre amigos"
        textoCard="Rachando a conta ou rachando o bico, a melhor hora para curtir é entre amigos. Conheça nossos <b>Planos Multi</b>."
        reverseOrder="Row-Reverse"
        backgroundStyle="#fff"
        textColor="#005BD5"
        buttonColor="#005BD5"
        buttonTextColor="#005BD5"
        BgColor='#005BD5'
        color='#fff'
      />
      <CardSection
        imageSrc={FriendsSwimming}
        imageAlt='amigos de mãos dadas nadando felizes'
        tituloCard="Algumas experiências são inexplicáveis"
        textoCard="Conheça as fontes termais de <b>Caldas Novas, Goiás</b>. Águas quentes, num clima sereno, relaxante e natural."
        widthQuote="45vw"
      />
      <Flex>
        <CitiesPreview cityName="RIO DE JANEIRO" imageUrl={RioDeJaneiro} />
        <CitiesPreview cityName="RIO DAS OSTRAS" imageUrl={RioDasOstras} />
        <CitiesPreview cityName="CALDAS NOVAS" imageUrl={CaldasNovas} />
        <CitiesPreview cityName="AMAZÔNIA" imageUrl={Amazonia} />
      </Flex>
    </section>
  );
}
