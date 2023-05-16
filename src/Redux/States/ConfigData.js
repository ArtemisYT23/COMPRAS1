const initialState = {
    FormDataValue: [],
    selected: "",
    selectedBusiness: "",
    //Activar Seccion de Cotizaciones
    activeCotization: false,
    //Archivos
    Requirement: null,
    CotizationOne: null,
    CotizationTwo: null,
    CotizationThree: null,
}

const FORM_VALUE_MODEL_SETDATA = "FORM_VALUE_MODEL_SETDATA";
const SELECTED_BUSINESS_COMEX = "SELECTED_BUSINESS_COMEX";
const SELECTED_BUSINESS_CENTRAL = "SELECTED_BUSINESS_CENTRAL";
const SAVE_FILE_REQUIRED = "SAVE_FILE_REQUIRED";
const SAVE_COTIZATION_ONE = "SAVE_COTIZATION_ONE";
const SAVE_COTIZATION_TWO = "SAVE_COTIZATION_TWO";
const SAVE_COTIZATION_THREE = "SAVE_COTIZATION_THREE";

const ACTIVE_COTIZATION_PART = "ACTIVE_COTIZATION_PART";

export default function ConfigDataReducer(state = initialState, action) {
    switch (action.type) {
        case FORM_VALUE_MODEL_SETDATA:
        case SELECTED_BUSINESS_COMEX:
        case SELECTED_BUSINESS_CENTRAL:
        case SAVE_FILE_REQUIRED:
        case SAVE_COTIZATION_ONE:
        case SAVE_COTIZATION_TWO:
        case SAVE_COTIZATION_THREE:

        case ACTIVE_COTIZATION_PART:
            return action.payload;
        default:
            return state;
    }
}

//Guardar Modelo de Datos Para Formulario
export const setFormValueModel = (form) => async (dispatch, getState) => {
    const { configState } = getState();
    dispatch({
        type: FORM_VALUE_MODEL_SETDATA,
        payload: { ...configState, FormDataValue: form }
    })
}

//Guardar Seleccion de Empresas
export const SelectedBusinessAction = (name) => async (dispatch, getState) => {
    const { configState } = getState();
    if (name == "COMEXPORT_S.A.") {
        dispatch({
            type: SELECTED_BUSINESS_COMEX,
            payload: { ...configState, selected: "Comexport",  selectedBusiness: name }
        });
    }
    if (name != "COMEXPORT_S.A.") {
        dispatch({
            type: SELECTED_BUSINESS_CENTRAL,
            payload: { ...configState, selected: "Central",
            selectedBusiness: name }
        });
    }
}

//Activar Apartado de Subida de Cotizaciones
export const ActiveCotizationUploader = (bool) => async (dispatch, getState) => {
    const { configState } = getState();
    dispatch({
        type: ACTIVE_COTIZATION_PART,
        payload: { ...configState, activeCotization: bool }
    })
}

//Guardar Archivo de Requerimiento 
export const saveFileRequirement = (file) => async (dispatch, getState) => {
    const { configState } = getState();
    dispatch({
        type: SAVE_FILE_REQUIRED,
        payload: { ...configState, Requirement: file}
    })
}

//Guardar Archivo de Cotizacion 1
export const saveCotizationOne = (file) => async (dispatch, getState) => {
    const { configState } = getState();
    dispatch({
        type: SAVE_COTIZATION_ONE,
        payload: { ...configState, CotizationOne: file }
    })
}

//Guardar Archivo de Cotizacion 2
export const saveCotizationTwo = (file) => async (dispatch, getState) => {
    const  { configState } = getState();
    dispatch({
        type: SAVE_COTIZATION_TWO,
        payload: { ...configState, CotizationTwo: file }
    })
}

//Guardar Archivo de Cotizacion 3
export const saveCotizationThree = (file) => async (dispatch, getState) => {
    const { configState } = getState();
    dispatch({
        type: SAVE_COTIZATION_THREE,
        payload: { ...configState, CotizationThree: file }
    })
}

