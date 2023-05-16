import styled from "styled-components";
import { ContainerHeader } from "../../Styles/Form";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { saveFileRequirement } from "../../Redux/States/ConfigData";

const FileRequirement = () => {
  const dispatch = useDispatch();

  const saveUploaderRequirement = async (event) => {
    // convert file to base64 encoded
    if (event.target.files[0] != undefined) {
      const file = event.target.files[0];
      dispatch(saveFileRequirement(file));
    }
  };

  return (
    <ContainerHeader>
      <Header>
        <p>REQUERIMIENTO*</p>
        <div className="p-inputgroup">
          <InputText
            type="file"
            accept=".xlsx, .csv, .pdf "
            onInput={(e) => saveUploaderRequirement(e)}
          />
        </div>
      </Header>
    </ContainerHeader>
  );
};

export default FileRequirement;

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
