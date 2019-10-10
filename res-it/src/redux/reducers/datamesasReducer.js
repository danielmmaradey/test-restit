import isEmpty from "../../validation/is-empty";

import {
  GET_DATA_MESAS,
  ERROR_DATA_MESAS,
  PUT_DATA_MESAS,
  DELETE_DATA_MESAS,
  POST_DATA_MESAS
} from "../types";

const initialState = {
  isLoadedDataMesas: false,
  isLoadedDataMesasError: false,
  Reload: false,
  mesas: {},
  error: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_MESAS:
      return {
        ...state,
        isLoadedDataMesas: !isEmpty(action.payload),
        isLoadedDataMesasError: false,
        mesas: action.payload,
        Reload: false,
        error: ""
      };
    case POST_DATA_MESAS:
      return {
        ...state,
        Reload: true
      };
    case PUT_DATA_MESAS:
      return {
        ...state,
        Reload: true
      };
    case DELETE_DATA_MESAS:
      const mesas = state.mesas.result;
      const result = mesas.filter(mesa => mesa.id !== action.payload);
      return {
        ...state,
        Reload: false,
        mesas: { result }
      };
    case ERROR_DATA_MESAS:
      return {
        ...state,
        isLoadedDataMesas: false,
        isLoadedDataMesasError: true,
        mesas: {},
        error: "error"
      };
    default:
      return state;
  }
}
