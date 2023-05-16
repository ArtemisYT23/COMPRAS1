import styled from "styled-components";
import { ContainerHeader } from "../../Styles/Form";

const InfoDataError = () => {
  return (
    <ContainerHeader>
      <ContainerInfo>
        <ContentLine>
          <Introducction>
            <strong>El Formulario ha sido deshabilitado por: </strong>NO existencia de recursos presupuestarios en la categoría de compra seleccionada. Por favor comunicarse con el Departamento Financiero.
          </Introducction>
        </ContentLine>
      </ContainerInfo>
    </ContainerHeader>
  );
};

export default InfoDataError;

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
