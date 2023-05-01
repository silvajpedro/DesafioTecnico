import styled from "styled-components";
import HeaderBg from "../../assets/headerBg.png";

export const Header = styled.header`
  border: 2px solid;
  height: 86vh;
  background-image: url(${HeaderBg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Container = styled.section`
  height: 7vh;
  /* border: solid red; */
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw 0 4vw;
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
    /* border: solid green; */
    ::selection {
      background-color: #fff;
      color: #005bd5;
    }
  }
`;

export const Navegation = styled.nav`
  width: 30vw;
  /* border: solid yellow; */
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

    :hover {
      border-bottom: 1px solid;
    }
  }
`;

export const HeaderButton = styled.button`
  width: 8.5vw;
  padding: 1.5vh 1.5vw;
  color: #fff;
  background-color: #005bd5;
  border-radius: 15px;
  border: none;
  font-weight: 700;
  font-size: 0.625rem;
  /* text-align: center; */
  letter-spacing: 3px;
  cursor: pointer;
`;

export const ContainerHeader = styled.div`
  /* border: solid red; */
  height: 75vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 4vw;

  div {
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    /* border: solid green; */
  }

  p {
    width: 24vw;
    /* border: solid; */
    font-weight: 700;
    font-size: 2.188rem;
    color: #005bd5;
  }

  input {
    width: 20vw;
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
  }
`;
