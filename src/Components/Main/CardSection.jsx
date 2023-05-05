import * as S from "./MainContentStyles";

export default function CardSection(props) {
  return (
    <S.CardContainer reverseOrder={props.reverseOrder}>
      <S.Image src={props.imageSrc} alt={props.imageAlt} />
      <S.InfoContainer
        textColor={props.textColor}
        backgroundStyle={props.backgroundStyle}
      >
        <S.Packages>
          <S.TituloCard>
            <S.Linha></S.Linha>
            <h4>VIAGENS NACIONAIS</h4>
          </S.TituloCard>
          <S.Quote widthQuote={props.widthQuote}>{props.tituloCard}</S.Quote>
          <S.Description
            dangerouslySetInnerHTML={{ __html: props.textoCard }}
          ></S.Description>
          <S.MainButton
            color={props.color}
            BgColor={props.BgColor}
            buttonWidth="11vw"
            buttonColor={props.buttonColor}
            textColor={props.buttonTextColor}
          >
            AGENDAR
          </S.MainButton>
        </S.Packages>
      </S.InfoContainer>
    </S.CardContainer>
  );
}
