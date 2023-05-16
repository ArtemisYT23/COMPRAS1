import styled from "styled-components";
import axios from "axios";
import HeaderImg from "../../Components/HeaderImg";
import InfoData from "../../Components/InfoData";
import SelectBusiness from "../../Components/SelectBusiness";
import SelectType from "../../Components/SelectType";
import SelectAplicant from "../../Components/SelectAplicant";
import DetailRequirement from "../../Components/DetailRequirement";
import InfoDataError from "../../Components/InfoDataError";
import FileRequirement from "../../Components/FileRequirement";
import InfoAplicant from "../../Components/InfoAplicant";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getBusinessData } from "../../Redux/States/CabinetData";
import { Instance } from "../.././Config/axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { RoutesForm } from "../../Models/routes";

const InitialForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { configState, cabinetState } = useSelector((store) => store);
  const {
    FormDataValue,
    selected,
    Requirement,
    CotizationOne,
    CotizationTwo,
    CotizationThree,
  } = configState;
  const { activeState, selectedCategory, selectedCenter } = cabinetState;
  const [activeButton, setActiveButton] = useState(false);
  const [filesContainer, setFilesContainer] = useState([]);

  useEffect(() => {
    dispatch(getBusinessData());
  }, []);

  const Checked = [
    { id: 31 },
    { id: 33 },
    { id: 34 },
    { id: 35 },
    { id: 36 },
    { id: 38 },
    { id: 39 },
  ];

  const ValidateError = () => {
    const Validate = [];
    FormDataValue.forEach((form, i) => {
      Checked.forEach((check, i) => {
        if (check.id == form.indexCode) {
          if (form.metadataValue != null) {
            Validate.push(form);
          }
        }
      });
    });

    const valid = () => {
      if (Validate.length == Checked.length) {
        setActiveButton(true);
      }
    };
    if (Validate.length != Checked.length) {
      toast.error("Campos requeridos Faltastes");
    }

    {
      Requirement != null ? valid() : toast.error("Requerimiento Vacio");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormDataValue);
    axios({
      url: `${Instance}documentmetadata`,
      method: "PUT",
      data: FormDataValue,
      headers: {
        Accept: "application/json",
      },
    })
      .then(function (response) {
        if (response.status == 200) {
          console.log(response.data);
          filesSubmit(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Error Al Enviar Los Datos");
      });
  };

  const filesSubmit = (documentId) => {
    const path = Requirement.name;
    const Uri = path.split(".");

    const path1 = CotizationOne?.name;
    const Uri1 = path1?.split(".");

    const path2 = CotizationTwo?.name;
    const Uri2 = path2?.split(".");

    const path3 = CotizationThree?.name;
    const Uri3 = path3?.split(".");

    const formSave = new FormData();
    formSave.append("DocumentCode", documentId);
    configState.Requirement &&
      formSave.append(
        "Archivos",
        configState.Requirement,
        `REQUERIMIENTO.${Uri[1]}`
      );
    if (CotizationOne) {
      configState.CotizationOne &&
        formSave.append(
          "Archivos",
          configState.CotizationOne,
          `COTIZACION 1.${Uri1[1]}`
        );
    }
    if (CotizationTwo) {
      configState.CotizationTwo &&
        formSave.append(
          "Archivos",
          configState.CotizationTwo,
          `COTIZACION 2.${Uri2[1]}`
        );
    }
    if (CotizationThree) {
      configState.CotizationThree &&
        formSave.append(
          "Archivos",
          configState.CotizationThree,
          `COTIZACION 2.${Uri3[1]}`
        );
    }

    axios({
      url: `${Instance}file`,
      method: "PUT",
      data: formSave,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        if (response.status == 200) {
          setFilesContainer([]);
          navigate(`/${RoutesForm.SUCCESS}`);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <HeaderImg />
      <InfoData />
      <SelectBusiness />
      {selected != "" ? (
        <>
          <SelectType />

          {activeState == true && selectedCenter != "" ? (
            <>
              <SelectAplicant />
              <DetailRequirement />
              <FileRequirement />
              <InfoAplicant />
              {activeButton ? (
                <>
                  <ButtonActive onClick={(e) => handleSubmit(e)}>
                    Enviar
                  </ButtonActive>
                </>
              ) : (
                <ButtonValidate onClick={ValidateError}>Validar</ButtonValidate>
              )}
            </>
          ) : (
            <></>
          )}

          {activeState == false && selectedCenter != "" ? (
            <InfoDataError />
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default InitialForm;

const ButtonActive = styled.button`
  width: 100%;
  height: 50px;
  background-color: var(--PrimaryColor);
  color: #fff;
  border: none;
  border-radius: 13px;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ButtonValidate = styled.button`
  width: 100%;
  height: 50px;
  background-color: #132238;
  color: #fff;
  border: none;
  border-radius: 13px;
  font-size: 1.5rem;
  cursor: pointer;
`;
