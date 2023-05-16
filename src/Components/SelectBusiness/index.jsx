import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import styled from "styled-components";
import { ContainerHeader } from "../../Styles/Form";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormValueModel,
  SelectedBusinessAction,
} from "../../Redux/States/ConfigData";
import toast, { Toaster } from "react-hot-toast";

const SelectBusiness = () => {
  const dispatch = useDispatch();

  const { cabinetState, configState } = useSelector((store) => store);
  const { AllDataForm } = cabinetState;
  const { FormDataValue } = configState;
  const [business, setBusiness] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  useEffect(() => {
    const formData = [];
    if (JSON.stringify(AllDataForm) != "{}") {
      AllDataForm?.indiceLista.forEach((ind, i) => {
        const elementForm = {
          indexCode: ind.indexCode,
          column: ind.column,
          indexName: ind.indexName,
          metadataValue: null,
        };
        formData.push(elementForm);
       
      });
      
      dispatch(setFormValueModel(formData));
    }
  }, [AllDataForm]);

  useEffect(() => {
    const ObjectBusiness = [];
    if (JSON.stringify(AllDataForm) != "{}") {
      AllDataForm?.indiceLista.forEach((ind, i) => {
        ind.listElements?.forEach((end, index) => {
          if (ind.indexName == "EMPRESA") {
            const item = {
              indexCode: ind.indexCode,
              element: end,
            };
            ObjectBusiness.push(item);
          }
        });
      });
      setBusiness(ObjectBusiness);
    }
  }, [AllDataForm]);

  const hoy = new Date();

  const onBusinessChange = (e) => {
    setSelectedBusiness(e.value);

    if (e.value != undefined) {
      FormDataValue.forEach((item, i) => {
        if (item.indexCode === e.value.indexCode) {
          item.metadataValue = e.value.element;
          dispatch(SelectedBusinessAction(e.value.element));
          return item;
        }
      });
      dispatch(setFormValueModel(FormDataValue));
    }
  };

  return (
    <ContainerHeader>
      <Header>
        <div className="p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-calendar"></i>
          </span>
          <span className="p-float-label">
            <InputText
              id="inputgroup"
              type="text"
              value={hoy.toLocaleDateString()}
              disabled
            />
          </span>
        </div>
        <div className="p-inputgroup">
          <Dropdown
            value={selectedBusiness}
            options={business}
            onChange={onBusinessChange}
            optionLabel="element"
            placeholder="Seleccion Una Empresa"
          />
        </div>
      </Header>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          duration: 3500,
          style: {
            background: "var(--PrimaryColor)",
            color: "#fff",
          },
        }}
      />
    </ContainerHeader>
  );
};

export default SelectBusiness;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  padding: 1rem;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;

    div {
      margin: 0 0 1rem 0;
    }
    div:nth-child(1) {
      margin: 1rem 0 0 0;
    }
  }
`;
