import { CoreInstance, Instance } from "../../Config/axios";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const initialState = {
    AllDataForm: {},
    FileType: [],
    activeState: false,
    selectedCategory: "",
    selectedCenter: "",
}

const GET_ALL_DATA_FORM = "GET_ALL_DATA_FORM";
const GET_ALL_DATA_FORM_ERRORS = "GET_ALL_DATA_FORM_ERRORS";
const GET_ALL_FILETYPE = "GET_ALL_FILETYPE";
const GET_ALL_FILETYPE_ERRORS = "GET_ALL_FILETYPE_ERRORS";
const GET_STATE_ACTIVE_BY_FORM = "GET_STATE_ACTIVE_BY_FORM";
const GET_STATE_ACTIVE_BY_FORM_ERRORS = "GET_STATE_ACTIVE_BY_FORM_ERRORS";
const SET_CATEGORY_SELECTED_BUY = "SET_CATEGORY_SELECTED_BUY";
const SET_CENTER_COST_SELECTED = "SET_CENTER_COST_SELECTED";


export default function CabinetDataReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DATA_FORM:
        case GET_ALL_DATA_FORM_ERRORS:
        case GET_ALL_FILETYPE:
        case GET_ALL_FILETYPE_ERRORS:
        case GET_STATE_ACTIVE_BY_FORM:
        case GET_STATE_ACTIVE_BY_FORM_ERRORS:
        case SET_CATEGORY_SELECTED_BUY:
        case SET_CENTER_COST_SELECTED:
            return action.payload;
        default:
            return state;
    }
}

//Comprobar estado de presupuesto para saber si puede ingresar al formulario
export const getStateByActiveResponse = (action) => async (dispatch, getState) => {
    console.log(action);
    const { cabinetState } = getState();
    axios({
        url: `${Instance}checkbudget`,
        method: "PUT",
        data: action,
        headers: {
            Accept: "application/json",
        },
    })
        .then(function (response) {
            if (response.status == 200) {
                dispatch({
                    type: GET_STATE_ACTIVE_BY_FORM,
                    payload: { ...cabinetState, activeState: response.data }
                })
            }
        }).catch(function (error) {
            console.error(error);
            dispatch({
                type: GET_STATE_ACTIVE_BY_FORM_ERRORS,
                payload: { ...cabinetState, activeState: false }
            })
        })
}

//traer todos los datos
export const getBusinessData = () => async (dispatch, getState) => {
    const { cabinetState } = getState();
    try {
        const res = await CoreInstance.get("getdatafirstform");
        if (res.status === 200) {
            dispatch({
                type: GET_ALL_DATA_FORM,
                payload: { ...cabinetState, AllDataForm: res.data },
            });
        }
    } catch (error) {
        console.log(error);
        toast.error('ERROR INTERNO, COMUNIQUESE CON SOPORTE')
        dispatch({
            type: GET_ALL_DATA_FORM_ERRORS,
            payload: {
                ...cabinetState,
                AllDataForm: {}
            },
        });
    }
};



//Traer todos los tipos de Archivos
export const getTypefileData = () => async (dispatch, getState) => {
    try {
        const res = await CoreInstance.get("filetype");
        const { cabinetState } = getState();
        if (res.status === 200) {
            dispatch({
                type: GET_ALL_FILETYPE,
                payload: { ...cabinetState, FileType: res.data },
            });
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_FILETYPE_ERRORS,
            payload: {
                ...cabinetState,
                FileType: []
            },
        });
    }
}

export const setSelectedCategory = (category) => async (dispatch, getState) => {
    const { cabinetState } = getState();
    dispatch({
        type: SET_CATEGORY_SELECTED_BUY,
        payload: { ...cabinetState, selectedCategory: category }
    })
}

export const setCenterCostSelected = (center, action) => async (dispatch, getState) => {
    const { cabinetState } = getState();
    dispatch({
        type: SET_CENTER_COST_SELECTED,
        payload: { ...cabinetState, selectedCenter: center }
    })
    dispatch(getStateByActiveResponse(action));
}