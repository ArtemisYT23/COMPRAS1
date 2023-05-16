import styled from "styled-components";
import { ContainerHeader } from "../../Styles/Form";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { setFormValueModel } from "../../Redux/States/ConfigData";
import "../../Styles/Button/centerForm.css";

const SelectAplicant = () => {
  const dispatch = useDispatch();
  const { cabinetState, configState } = useSelector((store) => store);
  const { AllDataForm } = cabinetState;
  const { FormDataValue } = configState;
  const [aplicant, setAplicant] = useState([]);
  const [email, setEmail] = useState("");
  const [selectedAplicant, setSelectedAplicant] = useState(null);

  useEffect(() => {
    const ObjectAplicant = [];
    if (JSON.stringify(AllDataForm) != "{}") {
      AllDataForm?.indiceLista.forEach((ind, i) => {
        AllDataForm?.entidadSolicitante.forEach((end, i) => {
          if (ind.indexName == "SOLICITANTE") {
            const item = {
              indexCode: ind.indexCode,
              aplicant: end.nombreSolicitante,
              emailIndex: 36,
              emailAplicant: end.correoSolicitante,
            };
            ObjectAplicant.push(item);
          }
        });
      });
      setAplicant(ObjectAplicant);
    }
  }, [AllDataForm]);

  const onCountryAplicant = (e) => {
    setSelectedAplicant(e.value);
    if (e.value != undefined) {
      setEmail(e.value.emailAplicant);
      FormDataValue.forEach((item, i) => {
        if (item.indexCode === e.value.indexCode) {
          item.metadataValue = e.value.aplicant;
          return item;
        }
        if (item.indexCode === e.value.emailIndex) {
          item.metadataValue = e.value.emailAplicant;
          return item;
        }
      });
      dispatch(setFormValueModel(FormDataValue));
    }
  };

  return (
    <ContainerHeader>
      <Header>
        <p>Seleccionar Solicitante</p>
        <div className="p-inputgroup">
          <Dropdown
            value={selectedAplicant}
            options={aplicant}
            onChange={onCountryAplicant}
            optionLabel="aplicant"
            placeholder="Seleccione Una Opcion"
            filter
          />
        </div>
      </Header>
      <Header>
        <p>Email Del Solicitante</p>
        <div className="p-inputgroup">
          <InputText value={email} disabled={true} className="input-form" />
        </div>
      </Header>
    </ContainerHeader>
  );
};

export default SelectAplicant;

const Header = styled.div`
  width: 100%;
  display: flex;
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

  p {
    text-align: center;
    text-decoration-style: solid;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 4px solid var(--PrimaryColor);
    margin: 0 1rem 0 0;
    font-weight: bold;
  }
`;
