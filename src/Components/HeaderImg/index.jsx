import styled from "styled-components";
import { ContainerHeader } from "../../Styles/Form";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Default from "../../../assets/Img/FondoCalderon.png";
import fondoComex from "../../../assets/Fondos/fondoComex.png";
import fondoCentral from "../../../assets/Fondos/fondoCentral.png";
import LogoComex from "../../../assets/Img/LogoComex.png";
import LogoCentral from "../../../assets/Img/LogoCentral.png";

const HeaderImg = () => {
  const r = document.querySelector(":root");
  const { configState } = useSelector((store) => store);
  const { selected } = configState;

  useEffect(() => {
    !selected || selected === "Comexport"
      ? (r.style.setProperty("--PrimaryColor", "#4c607f"),
        (document.body.style.backgroundImage = `url('${fondoComex}')`))
      : (r.style.setProperty("--PrimaryColor", "#F68A20"),
        (document.body.style.backgroundImage = `url('${fondoCentral}')`));
  }, [selected]);
  return (
    <ContainerHeader>
      <Header>
        <Title>
          {selected === "" && <FooterImage src={Default} alt="Cargando" />}
          {selected === "Comexport" && <FooterImage src={LogoComex} />}
          {selected === "Central" && <FooterImage src={LogoCentral} />}
        </Title>
      </Header>
    </ContainerHeader>
  );
};

export default HeaderImg;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: flex;
    padding: 0;
  }
`;

export const Title = styled.h1`
  text-align: center;
  width: 90%;
  margin-bottom: 1rem;
  border-bottom: 4px solid var(--PrimaryColor);
`;

export const FooterImage = styled.img`
  width: 100%;
  &:first-child {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 720px) {
    width: initial;
    height: 5.5rem;
    &:first-child {
      margin-bottom: 0;
    }
  }
`;
