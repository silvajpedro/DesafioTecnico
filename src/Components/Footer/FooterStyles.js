import styled from "styled-components";

// ESTILIZAÇAO DO CONTAINER FOOTER
export const Footer = styled.footer`
  height: 30vh;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const LogoGudi = styled.img`
  height: 5vh;
`;
// CAIXA ONDE ESTÃO AS PERGUNTAS FREQUENTES (FIZ EM TANGS DE ÂNCORA PORQUE ADCIONARIA O LINK DO REDICIONAMENTO PARA ONDE ESSAS PERGUNTAS SERIAM RESPONDIDAS)
export const FAQSection = styled.div`
  display: flex;
  flex-direction: column;
  color: #005bd5;
  gap: 1vh;

  a {
    color: #005bd5;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

export const Title = styled.h6`
  margin-bottom: 1.5vh;
  font-size: 1.1rem;
  font-weight: 800;
`;
