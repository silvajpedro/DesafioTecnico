import styled from "styled-components";
import HeaderBg from "../../assets/headerBg.png";
import { startTransition } from "react";

// ESTILIZAÇÃO DO CONTAINER HEADER
export const Header = styled.header`
  height: 85vh;
  background-image: url(${HeaderBg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
`;
// CONTAINER ONDE FICOU A LOGO E A NAVBAR (FOI COLOCADO EM UM CONTAINER APARTE PARA FACILITAR A ESTILIZAZÇÃO)
export const Container = styled.section`
  height: 7vh;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  color: #005bd5;
  gap: 0.7vw;
  cursor: default;

  h1 {
    font-weight: 900;
    font-size: 1.8rem;
    ::selection {
      background-color: #fff;
      color: #005bd5;
    }
  }

  h2 {
    width: 6vw;
    font-size: 0.7rem;
    ::selection {
      background-color: #fff;
      color: #005bd5;
    }
  }
`;
// ESTILIZAÇÃO DA NAVBAR
export const Navegation = styled.nav`
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarUl = styled.ul`
  width: 17vw;
  display: flex;
  justify-content: space-between;
  /* border: solid blue; */

  a {
    font-size: 0.75rem;
    color: #005bd5;
    padding: 1vh;

    :hover {
      border-bottom: 1px solid;
    }
  }
`;
// ESTILIZAÇÃO DOS DOIS BUTÕES UTILIZADOS NA HEADER
export const HeaderButton = styled.button`
  width: 8.5vw;
  padding: 1.5vh 1.5vw;
  color: #fff;
  background-color: #005bd5;
  border-radius: 15px;
  border: none;
  font-weight: 700;
  font-size: 0.625rem;
  letter-spacing: 3px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:active {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    background-color: #0044a5;
  }
`;
// ESTILIZAÇÃO DO CONTAINER FEITO PARA FACILITAR CENTRALIZAR A BARRA DE PESQUISA
export const ContainerHeader = styled.div`
  height: 77vh;
  display: flex;
  justify-content: center;
  padding: 0 4vw;
  gap: 3vh;
  flex-direction: column;

  p {
    width: 34vw;
    font-weight: 700;
    font-size: 2.7rem;
    color: #005bd5;
  }
`;

export const SearchBar = styled.input`
  width: 25vw;
  text-transform: uppercase;
  padding: 1.5vh 0;
  border-radius: 20px;
  border: none;
  outline: none;
  text-indent: 1.5vw;
  caret-color: #005bd5;
  background-color: #fff;

  ::placeholder {
    font-size: 0.7rem;
    font-weight: 200;
    text-transform: none;
  }
`;
