import styled from "styled-components";
// ESTILIZAÇÃO DOS CARDS
export const Image = styled.img`
  width: 50%;
`;
// CONTAINER QUE ENGLOBA A IMAGEM E O TEXTO DO LADO
export const CardContainer = styled.section`
  display: flex;
  flex-direction: ${({ reverseOrder }) => reverseOrder || "row"};
`;
// CONTAINER QUE TA AS INFORMAÇÕES
export const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ backgroundStyle }) =>
    backgroundStyle || "linear-gradient(to bottom, #005bd5, #002e6b)"};
  color: ${({ textColor }) => textColor || "#fff"};
`;

// ESTILIZAÇÃO DOS PACOTES
export const Packages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 43vw;
  height: 41vh;
  /* border: solid red; */
`;
// CAIXA COM UMA LINHA E O TITULO COM O NOME 'VIAGENS NACIONAIS'
export const TituloCard = styled.div`
  width: 20vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 3px;
  }
`;
// LINHA QUE TEM AO LADO DO NOME 'VIAGENS NACIONAIS'
export const Linha = styled.span`
  width: 4vw;
  height: 0.1vh;
  border: 1px solid;
`;

export const Quote = styled.h5`
  width: ${({ widthQuote }) => widthQuote || "37vw"};
  font-size: 3rem;
  font-weight: 900;
`;

export const Description = styled.p`
  width: 37vw;
  font-size: 1rem;
  font-weight: 200;
`;
// ESTILIZAÇÃO DE TODOS OS BOTÕES QUE ESTÃO NA MAIN
export const MainButton = styled.button`
  padding: 1.5vh 1.5vw;
  width: ${({ buttonWidth }) => buttonWidth};
  color: ${({ textColor }) => textColor || "#fff"};
  border: 1px solid ${({ buttonColor }) => buttonColor || "#fff"};
  border-radius: 25px;
  backdrop-filter: ${({ BgBlur }) => `blur(${BgBlur})`};
  background-color: transparent;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 3px;
  cursor: pointer;
  transition: ease-in-out 0.3s;

  :hover {
    transform: ${(props) => props.Scale};
    background: ${(props) => props.BgColor || "#fff"};
    color: ${(props) => props.color || "#005bd5"};
    outline: none;
  }

  &:active {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    background-color: #0044a5;
  }
`;
// ESTILIZAÇÃO DA CAIXA ONDE VAI AS FOTOS DAS CIDADES
export const Cities = styled.div`
  width: 25%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

// ESTILO DO MURAL DE EXPERIÊNCIAS

export const Mural = styled.section`
  padding: 11vh 15vw 8vh 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SubTitlle = styled.p`
  color: #8b8b8b;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const Titlle = styled.h6`
  width: 35vw;
  color: #8b8b8b;
  font-size: 3rem;
  text-align: center;
`;

export const Infos = styled.div`
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  flex-wrap: wrap;
`;

export const Photos = styled.img`
  height: 40vh;
`;
// ESTILIZAÇÃO DO CARD QUE CONTEM ALGUMAS INFORMAÇÕES ADICIONAIS
export const InfoCard = styled.div`
  margin-top: 6vh;
  width: 22%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.BgColor || "#EEEEEE"};
  cursor: pointer;
  transition: ease-in-out 0.5s;

  :hover {
    transform: scale(1.1);
  }

  img {
    height: 15vh;
  }

  p {
    width: 9vw;
    color: ${(props) => props.textColor || "#fff"};
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
  }
`;

// ESTILO DO FORMULARIO

export const Forms = styled.form`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #005bd5;
`;

export const FormContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  gap: 2vh;
`;

export const FormTitlle = styled.legend`
  margin-bottom: 3vh;
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

export const FormInput = styled.input`
  width: 35vw;
  padding: 2vh 1vw;
  border: none;
  border-radius: 25px;
  outline: none;
  font-weight: 200;
`;

export const FormTextarea = styled.textarea`
  width: 35vw;
  height: 15vh;
  padding: 2vh 1vw;
  border: none;
  border-radius: 16px;
  outline: none;
  resize: none;
  font-weight: 200;
`;
