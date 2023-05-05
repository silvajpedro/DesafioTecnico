import * as S from "./FooterStyles";
import LogoGudi from "../../assets/LogoGudi.svg";

export default function Footer() {
  return (
    <S.Footer>
      <S.FAQSection>
        <a href="#topo">
          <S.LogoGudi src={LogoGudi} alt="Logo Güdi: o bom da vida é viver" />
        </a>
        <a href="#sobre">Sobre nós </a>
        <a href="#mural">Mural de memórias</a>
        <a href="#eventos">Eventos Gudi</a>
        <a href="#blog">Nosso blog</a>
      </S.FAQSection>
      <S.FAQSection>
        <S.Title>Contato</S.Title>
        <a href="#chat">Chat Virtual</a>
        <a href="#sac">SAC Online</a>
        <a href="#ouvidoria">Ouvidoria</a>
        <a href="#faq">FAQ</a>
      </S.FAQSection>
      <S.FAQSection>
        <S.Title>Benefícios</S.Title>
        <a href="#conta">Conta digital </a>
        <a href="#milhas"> Gudi Viaje com Milhas</a>
        <a href="#c6">C6 Átomos</a>
        <a href="#idjovem">iD Jovem</a>
      </S.FAQSection>
      <S.FAQSection>
        <S.Title>Lugares</S.Title>
        <a href="#omelhor">O melhor do Brasil </a>
        <a href="#cidades">Cidades frequentes</a>
        <a href="#turistar">Pontos turísticos</a>
        <a href="#restaurantes">Restaurantes</a>
      </S.FAQSection>
      <S.FAQSection>
        <S.Title>Curiosidades</S.Title>
        <a href="#cutura">Cultura e tradições</a>
        <a href="#pratos">Pratos típicos</a>
        <a href="#mitos">Mitos brasileiros </a>
        <a href="#carnaval">Carnaval</a>
      </S.FAQSection>
    </S.Footer>
  );
}
