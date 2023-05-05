import * as S from "./MainContentStyles";

export default function CitiesPreview(props) {
  return (
    <S.Cities imageUrl={props.imageUrl}>
      <S.MainButton
        BgColor="none"
        color="#fff"
        Scale="scale(1.1)"
        BgBlur="50px"
      >
        {props.cityName}
      </S.MainButton>
    </S.Cities>
  );
}
