import styled from "styled-components";
import { ContainerHeader } from "../../Styles/Form";

const InfoData = () => {
  const requiredChar = "*";
  return (
    <ContainerHeader>
      <ContainerInfo>
        <ContentLine>
          <Introducction>
            El presente formulario permite que se genere un requerimiento o
            instrumento de <strong> cotización, aprobación, o compra, </strong>
            <strong>
              {" "}
              es importante llenar toda la información para que su proceso se efectue lo antes posible,{" "}
            </strong>
            por registro interno todos los instrumentos legales tendrán un
            administrador aprovador
            <strong>
              {" "}
              por lo que es necesario que coloque los nombres y correo
              correctamente.
            </strong>
          </Introducction>
          <AditionalInformation>
            Todos los campos {requiredChar} son obligatorios
          </AditionalInformation>
        </ContentLine>
      </ContainerInfo>
    </ContainerHeader>
  );
};

export default InfoData;

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

const AditionalInformation = styled.span`
  margin-bottom: 1rem;
  font-weight: bold;
`;
