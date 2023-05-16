import styled from "styled-components";
import { ContainerHeader } from "../../Styles/Form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { setFormValueModel } from "../../Redux/States/ConfigData";
import { setSelectedCategory, setCenterCostSelected } from "../../Redux/States/CabinetData";

const SelectType = () => {
  const dispatch = useDispatch();
  const { cabinetState, configState } = useSelector((store) => store);
  const { AllDataForm, selectedCategory } = cabinetState;
  const { FormDataValue, selectedBusiness } = configState;
  const [buyType, setBuyType] = useState([]);
  const [categoryType, setCategoryType] = useState([]);
  const [centerCost, setCenterCost] = useState([]);
  const [selectedBuys, setSelectedBuys] = useState(null);
  const [Categoryselected, setCategorySelected] = useState(null);
  const [CenterSelection, setCenterSelection] = useState(null);

  useEffect(() => {
    const ObjectType = [];
    const ObjectCategory = [];
    const ObjectCenterCost = [];
    if (JSON.stringify(AllDataForm) != "{}") {
      AllDataForm?.indiceLista.forEach((ind, i) => {
        ind.listElements?.forEach((end, i) => {
          if (ind.indexName == "TIPO DE COMPRA") {
            const item = {
              indexCode: ind.indexCode,
              element: end,
            };
            ObjectType.push(item);
          }
        });
        setBuyType(ObjectType);

        ind.listElements?.forEach((end, i) => {
          if (ind.indexName == "CATEGORIZACIÓN COMPRA") {
            const item = {
              indexCode: ind.indexCode,
              element: end,
            };
            ObjectCategory.push(item);
          }
        });
        setCategoryType(ObjectCategory);

        ind.listElements?.forEach((end, i) => {
          if (ind.indexName == "CENTRO DE COSTOS") {
            const item = {
              indexCode: 38,
              element: end,
            };
            ObjectCenterCost.push(item);
          }
        });
        setCenterCost(ObjectCenterCost);
      });
    }
  }, [AllDataForm]);

  const onCountryTypeBuy = (e) => {
    setSelectedBuys(e.value);

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

  const onCountryTypeCategory = (e) => {
    setCategorySelected(e.value);

    if (e.value != undefined) {
      FormDataValue.forEach((item, i) => {
        if (item.indexCode === e.value.indexCode) {
          item.metadataValue = e.value.element;
          return item;
        }
      });
      dispatch(setFormValueModel(FormDataValue));
    }
    dispatch(setSelectedCategory(e.value.element));
  };

  const onCenterCostSelection = (e) => {
    setCenterSelection(e.value);

    if (e.value != undefined) {
      FormDataValue.forEach((item, i) => {
        if (item.indexCode === e.value.indexCode) {
          item.metadataValue = e.value.element;
          return item;
        }
      });
      dispatch(setFormValueModel(FormDataValue));
    }

    const obj = {
      numOfForm: 1,
      cost: 0.0,
      businessName: selectedBusiness,
      categoryBuy: selectedCategory,
      costCenter: e.value.element,
    };
    dispatch(setCenterCostSelected(e.value.element, obj));
  }

  return (
    <ContainerHeader>
      <Header>
        <p>Seleccione Tipo De Compra</p>
        <div className="p-inputgroup">
          <Dropdown
            value={selectedBuys}
            options={buyType}
            onChange={onCountryTypeBuy}
            optionLabel="element"
            placeholder="Seleccione Una Opcion"
          />
        </div>
      </Header>
     
      <Header>
        <p>Seleccione Categoria De Compra</p>
        <div className="p-inputgroup">
          <Dropdown
            value={Categoryselected}
            options={categoryType}
            onChange={onCountryTypeCategory}
            optionLabel="element"
            placeholder="Seleccione Una Opcion"
            filter
          />
        </div>
      </Header>

      <Header>
        <p>Seleccione Departamento Consumidor</p>
        <div className="p-inputgroup">
          <Dropdown
            value={CenterSelection}
            options={centerCost}
            onChange={onCenterCostSelection}
            optionLabel="element"
            placeholder="Seleccione Una Opcion"
            filter
          />
        </div>
      </Header>
    </ContainerHeader>
  );
};

export default SelectType;

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
