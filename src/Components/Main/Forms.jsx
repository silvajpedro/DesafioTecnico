import * as S from "./MainContentStyles";

export default function Forms() {
  return (
    <S.Forms>
      <S.FormContainer>
        <S.FormTitlle>Fale conosco</S.FormTitlle>
        <S.FormInput
          type="email"
          placeholder="Diga o seu melhor email"
          required
        ></S.FormInput>
        <S.FormInput type="text" placeholder="Assunto" required></S.FormInput>
        <S.FormTextarea
          placeholder="Escreva a sua mensagem"
          required
        ></S.FormTextarea>
        <S.MainButton buttonWidth="fit-content">ENVIAR</S.MainButton>
      </S.FormContainer>
    </S.Forms>
  );
}
