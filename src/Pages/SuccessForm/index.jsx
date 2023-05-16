import styled from "styled-components";
import { useSelector } from "react-redux";
import Comex from "../../../assets/Img/LogoComex.png";
import Central from "../../../assets/Img/LogoCentral.png";

const SuccessForm = () => {
  const { configState } = useSelector((store) => store);
  const { selected } = configState;

  return (
    <>
      <FormSuccess>
        <div className="Iam">
          <p>Formulario Enviado Con Éxito</p>
          <b>
            <div className="innerIam">
              SOMOS CENTRALFILE
              <br />
              Su Aliado en
              <br />
              Soluciones Informáticas
              <br />
              Digitalización
              <br />
              MailRoom
            </div>
          </b>
        </div>
      </FormSuccess>
      <FormSuccess2>
        {selected === "Comexport" ? (
          <FooterImage src={Comex} />
        ) : (
          <FooterImage src={Central} />
        )}
      </FormSuccess2>
      ;
    </>
  );
};

export default SuccessForm;

export const FormSuccess = styled.form`
  background-color: var(--PrimaryColor);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-bottom: 0.25rem;

  @media (max-width: 767px) {
    width: 80vw;
    height: 110vw;

    .innerIam{
        margin: 1rem 0 0 0;
    }
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    top: 10%;
    margin: 0 auto 2.5rem;
    padding: 2.5rem 5rem;
  }

  .Iam {
    padding: 1.3rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font: normal 40px/50px Montserrat, sans-serif;
    color: var(--ColorWhite);
    width: 100%;
  }
  .Iam p {
    height: 50px;
    float: left;
    font-size: 2.8rem;
    font-weight: 600;
    margin: 0 0 3.5rem 0;
  }
  .Iam b {
    float: left;
    overflow: hidden;
    position: relative;
    height: 50px;
  }

  .Iam .innerIam {
    display: flex;
    display: inline-block;
    color: #ce6700;
    position: relative;
    white-space: nowrap;

    /*animation*/
    -webkit-animation: move 5s;
    -moz-animation: move 5s;
    -ms-animation: move 5s;
    -o-animation: move 5s;
    animation: move 5s;
    /*animation-iteration-count*/
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    /*animation-delay*/
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    -ms-animation-delay: 1s;
    -o-animation-delay: 1s;
    animation-delay: 1s;
  }
  @keyframes move {
    0% {
      top: 0px;
    }
    20% {
      top: -50px;
    }
    40% {
      top: -100px;
    }
    60% {
      top: -150px;
    }
    80% {
      top: -200px;
    }
  }

  @-webkit-keyframes move {
    0% {
      top: 0px;
    }
    20% {
      top: -50px;
    }
    40% {
      top: -100px;
    }
    60% {
      top: -150px;
    }
    80% {
      top: -200px;
    }
  }
  @-moz-keyframes move {
    0% {
      top: 0px;
    }
    20% {
      top: -50px;
    }
    40% {
      top: -100px;
    }
    60% {
      top: -150px;
    }
    80% {
      top: -200px;
    }
  }
  @-o-keyframes move {
    0% {
      top: 0px;
    }
    20% {
      top: -50px;
    }
    40% {
      top: -100px;
    }
    60% {
      top: -150px;
    }
    80% {
      top: -200px;
    }
  }
  @keyframes move {
    0% {
      top: 0px;
    }
    20% {
      top: -50px;
    }
    40% {
      top: -100px;
    }
    60% {
      top: -150px;
    }
    80% {
      top: -200px;
    }
  }
`;

export const FormSuccess2 = styled.form`
  background-color: #c5d6ff;
  width: 100%;
  height: 25vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.25rem;

  @media screen and (min-width: 720px) {
    width: 80%;
    margin: 0 auto 2.5rem;
  }

  @media screen and (min-width: 1024px) {
    width: 100%;
    top: 10%;
    margin: 0 auto 2.5rem;
    padding: 2.5rem 5rem;
  }
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
