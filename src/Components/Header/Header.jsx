import * as S from "./HeaderStyles";

export default function Header() {
  return (
    <S.Header id="topo">
      <S.Container>
        <S.HeaderTitle>
          {/* COLOQUEI UMA TAG <h1> POIS ACHEI INTERESSANTE A PÁGINA TER UM TÍTULO PRINCIPAL COM O NOME DA MESMA. */}
          <h1>Güdi</h1>
          <h2>O bom da vida é viver</h2>
        </S.HeaderTitle>
        <S.Navegation>
          <S.NavbarUl>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Benefícios</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </S.NavbarUl>
          <S.HeaderButton>AGENDAR</S.HeaderButton>
        </S.Navegation>
      </S.Container>
      <S.ContainerHeader>
        <p>Para qual estado você deseja ir?</p>
        <S.SearchBar type="search" placeholder="Pesquisar" list="cityes" />
        <datalist id="cityes">
          <option value="RIO DE JANEIRO" />
          <option value="RIO DAS OSTRAS" />
          <option value="CALDAS NOVAS" />
          <option value="AMAZÔNAS" />
        </datalist>
        <S.HeaderButton>BUSCAR</S.HeaderButton>
      </S.ContainerHeader>
    </S.Header>
  );
}
