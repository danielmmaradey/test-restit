import axios from "axios";
import { BASE_URL } from "../../exports/Api/Api";

import {
  GET_DATA_MESAS,
  ERROR_DATA_MESAS,
  POST_DATA_MESAS,
  PUT_DATA_MESAS,
  DELETE_DATA_MESAS
} from "../types";

export const GetDataMesas = () => async dispatch => {
  try {
    const response = await axios.get(BASE_URL + "/api/mesas");
    dispatch({
      type: GET_DATA_MESAS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: ERROR_DATA_MESAS,
      payload: error
    });
  }
};

export const PostDataMesas = mesa => async dispatch => {
  try {
    await axios.post(BASE_URL + "/api/mesas", mesa);
    dispatch({
      type: POST_DATA_MESAS,
      payload: mesa
    });
  } catch (error) {
    dispatch({
      type: ERROR_DATA_MESAS,
      payload: error
    });
  }
};

export const DeleteTablasConfig = idmesa => async dispatch => {
  try {
    axios.delete(BASE_URL + "/api/mesa/" + idmesa);
    dispatch({
      type: DELETE_DATA_MESAS,
      payload: idmesa
    });
  } catch (error) {
    dispatch({
      type: ERROR_DATA_MESAS,
      payload: error
    });
  }
};

export const PutDataMesas = (mesa, id) => async dispatch => {
  console.log(mesa, id);
  try {
    await axios.put(BASE_URL + "/api/upmesa/" + id, mesa);
    dispatch({
      type: PUT_DATA_MESAS,
      payload: mesa
    });
  } catch (error) {
    dispatch({
      type: ERROR_DATA_MESAS,
      payload: error
    });
  }
};
