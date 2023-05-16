import styled from "styled-components";
import { ContainerHeader } from "../../Styles/Form/";
import { InputText } from "primereact/inputtext";
import {
  ActiveCotizationUploader,
  saveCotizationOne,
  saveCotizationTwo,
  saveCotizationThree,
} from "../../Redux/States/ConfigData";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const InfoAplicant = () => {
  const dispatch = useDispatch();
  const { configState } = useSelector((store) => store);
  const { activeCotization } = configState;
  const [activeCot, setActiveCot] = useState(false);
  const [activeCot2, setActiveCot2] = useState(false);

  const saveUploaderCotizationOne = async (event) => {
    if (event.target.files[0] != undefined) {
      const file = event.target.files[0];
      dispatch(saveCotizationOne(file));
    }
  };

  const saveUploaderCotizationTwo = async (event) => {
    if (event.target.files[0] != undefined) {
      const file = event.target.files[0];
      dispatch(saveCotizationTwo(file));
    }
  };

  const saveUploaderCotizationThree = async (event) => {
    if (event.target.files[0] != undefined) {
      const file = event.target.files[0];
      dispatch(saveCotizationThree(file));
    }
  };

  const handleActiveCotization = () => {
    dispatch(ActiveCotizationUploader(true));
  };

  const handleInactiveCotization = () => {
    dispatch(ActiveCotizationUploader(false));
    setActiveCot(false);
    setActiveCot2(false);
  };

  return (
    <ContainerHeader>
      <ContainerInfo>
        <ContentLine>
          <Introducction>
            <strong>
              Si cuenta con una cotización previa puede adjuntarla en este
              apartado
            </strong>
          </Introducction>
          {activeCotization ? (
            <ButtonActive onClick={() => handleInactiveCotization()}>
              Cancelar
            </ButtonActive>
          ) : (
            <ButtonActive onClick={() => handleActiveCotization()}>
              Adjuntar
            </ButtonActive>
          )}
        </ContentLine>
      </ContainerInfo>

      {activeCotization ? (
        <Header>
          <p>
            COTIZACIONES*{" "}
            <ButtonAdd onClick={() => setActiveCot(true)}>Añadir</ButtonAdd>
          </p>

          <div className="p-inputgroup">
            <InputText
              type="file"
              accept=".xlsx, .csv, .pdf "
              onInput={(e) => saveUploaderCotizationOne(e)}
            />
          </div>
        </Header>
      ) : (
        <></>
      )}

      {activeCot ? (
        <Header>
          <p>
            {" "}
            <ButtonAdd onClick={() => setActiveCot2(true)}>Añadir</ButtonAdd>
            <ButtonCancel onClick={() => setActiveCot(false)}>
              Cancelar
            </ButtonCancel>
          </p>

          <div className="p-inputgroup">
            <InputText
              type="file"
              accept=".xlsx, .csv, .pdf "
              onInput={(e) => saveUploaderCotizationTwo(e)}
            />
          </div>
        </Header>
      ) : (
        <></>
      )}

      {activeCot2 ? (
        <Header>
          <p>
            {" "}
            <ButtonCancel onClick={() => setActiveCot2(false)}>
              Cancelar
            </ButtonCancel>
          </p>

          <div className="p-inputgroup">
            <InputText
              type="file"
              accept=".xlsx, .csv, .pdf "
              onInput={(e) => saveUploaderCotizationThree(e)}
            />
          </div>
        </Header>
      ) : (
        <></>
      )}
    </ContainerHeader>
  );
};

export default InfoAplicant;

const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.25rem;
`;

const ContentLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 6px solid var(--thirdColor);
  padding: 1rem;
  border-radius: 13px;
`;

const Introducction = styled.p`
  text-align: center;
  text-decoration-style: solid;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 4px solid var(--PrimaryColor);
`;

const ButtonActive = styled.button`
  width: 150px;
  height: 30px;
  background-color: var(--PrimaryColor);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ButtonAdd = styled.button`
  width: 110px;
  height: 30px;
  margin: 0 0 0 1rem;
  background-color: var(--PrimaryColor);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ButtonCancel = styled.button`
  width: 110px;
  height: 30px;
  margin: 0 0 0 1rem;
  background-color: #fff;
  color: var(--PrimaryColor);
  border: 1px solid var(--PrimaryColor);
  border-radius: 5px;
  cursor: pointer;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  padding: 1.3rem;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    p {
      width: 90%;
    }

    div {
      margin: 1rem 0 0 0;
    }
  }
  div {
    margin: 1rem 0 0 0;
  }

  p {
    width: 90%;
    text-align: center;
    text-decoration-style: solid;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 4px solid var(--PrimaryColor);
    font-weight: bold;
  }
`;
