import styled from "styled-components";
import { ContainerHeader } from "../../Styles/Form";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { setFormValueModel } from "../../Redux/States/ConfigData";

const DetailRequirement = () => {
  const dispatch = useDispatch();
  const { cabinetState, configState } = useSelector((store) => store);
  const { AllDataForm, requirementText } = cabinetState;
  const { FormDataValue } = configState;
  const [deparments, setDeparments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  useEffect(() => {
    const ObjectDeparment = [];
    if (JSON.stringify(AllDataForm) != "{}") {
      AllDataForm?.indiceLista.forEach((ind, i) => {
        ind.listElements?.forEach((end, index) => {
          if (ind.indexName == "DEPARTAMENTO CONSUMIDOR") {
            const item = {
              indexCode: ind.indexCode,
              element: end,
            };
            ObjectDeparment.push(item);
          }
        });
      });
      setDeparments(ObjectDeparment);
    }
  }, [AllDataForm]);

  const onCountryDeparment = (e) => {
    setSelectedDepartment(e.value);
    if (e.value != undefined) {
      FormDataValue.forEach((item, i) => {
        if (item.indexCode === e.value.indexCode) {
          item.metadataValue = e.value.element;
          return item;
        }
      });
      dispatch(setFormValueModel(FormDataValue));
    }
  };

  const handleChangeRequirement = (e) => {
    FormDataValue.forEach((item, i) => {
      if (item.indexCode === 39) {
        item.metadataValue = e.target.value;
        return item;
      }
    });
    dispatch(setFormValueModel(FormDataValue));
  };

  return (
    <ContainerHeader>
      {/* <Header>
        <p>Seleccionar Departamento Consumidor</p>
        <div className="p-inputgroup">
          <Dropdown
            value={selectedDepartment}
            options={deparments}
            onChange={onCountryDeparment}
            optionLabel="element"
            placeholder="Seleccione Una Opcion"
            filter
          />
        </div>
      </Header> */}
      <Header>
        <p>Motivo Del Requerimiento</p>
        <div className="p-inputgroup">
          <InputTextarea
            id="39"
            value={requirementText}
            onChange={(e) => handleChangeRequirement(e)}
            placeholder="Escriba el requerimiento..."
            autoResize={true}
          />
        </div>
      </Header>
    </ContainerHeader>
  );
};

export default DetailRequirement;

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
