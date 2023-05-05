import BabyAndDad from "../../assets/BabyAndDad.png";
import Kids from "../../assets/Kids.png";
import Besties from "../../assets/Besties.png";
import Adventure from "../../assets/Adventure.png";
import Ciclist from "../../assets/Ciclist.png";
import Girls from "../../assets/Girls.png";
import * as S from "./MainContentStyles";

import Mapa from "../../assets/Mapa.svg";
import Destinos from "../../assets/Destinos.svg";
import Coco from "../../assets/Coco.svg";
import Cardapio from "../../assets/Cardapio.svg";

export default function Mural() {
  return (
    <S.Mural id="mural">
      <S.SubTitlle>use a hashtag #brasilisverigudi</S.SubTitlle>
      <S.Titlle>Nosso mural de Experiências</S.Titlle>
      <S.Infos>
        <S.Photos src={BabyAndDad} alt="Um pai brincando com o filho bebê" />
        <S.Photos src={Kids} alt="Crianças pulando" />
        <S.Photos
          src={Besties}
          alt="Um homem com seu melhor amigo (seu cachorro)"
        />
        <S.Photos src={Adventure} alt="Um aventureiro tirando uma self" />
        <S.Photos src={Ciclist} alt="Uma ciclista no meio da estrada" />
        <S.Photos src={Girls} alt="Quatro mulheres tirando uma self" />
        <S.InfoCard textColor="#005BD5">
          <img src={Mapa} alt="Trajetos" />
          <p>O melhor do Brasil</p>
        </S.InfoCard>
        <S.InfoCard BgColor="#005BD5">
          <img src={Destinos} alt="Paisagem" />
          <p>Cidades mais frequentadas</p>
        </S.InfoCard>
        <S.InfoCard textColor="#005BD5">
          <img src={Coco} alt="Coco" />
          <p>Pontos turísticos</p>
        </S.InfoCard>
        <S.InfoCard BgColor="#005BD5">
          <img src={Cardapio} alt="Cardapio" />
          <p>Restaurantes</p>
        </S.InfoCard>
      </S.Infos>
    </S.Mural>
  );
}
