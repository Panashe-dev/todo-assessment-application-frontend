import axios from 'axios';
import qs from 'qs';
import {BACKEND_API_GATEWAY_URL } from '../constants/TodoConstants';


export const postTodoApi = (todoRequestBody) => {
    const axiosConfig = getAxiosConfig();
    const responseData = axios.post(`${BACKEND_API_GATEWAY_URL}/todo`, todoRequestBody, axiosConfig).then((response) => {
      return response.data;
    });
    return responseData;
  };


  const getAxiosConfig = () => {
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const accessToken = JSON.parse(localStorage.getItem('userInfo'));
  if (accessToken.token) {
    axiosConfig.headers.Authorization = `Bearer  ${accessToken.token}`;
  }
    return axiosConfig;
  };

  export const getAllTodoApi = async () => {
    const axiosConfig = getAxiosConfig();
    const responseData = axios.get(`${BACKEND_API_GATEWAY_URL}/todo/all`, axiosConfig).then((response) => {
      return response.data;
    });
    return responseData;
  };

  export const postLoginApi=async (loginRequestBody)=>{

   
    const axiosConfig = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Authorization': 'Basic ' + loginRequestBody,
        'Content-Type': 'application/json'
      
      }
    };
    
   
    const responseData = await axios
      .post(`${BACKEND_API_GATEWAY_URL}/auth/authenticate`, loginRequestBody, axiosConfig)
      .then((response) => {
        return response.data;
      });
    return responseData;


  }

  export const todoUpdateApi=async (todoUpdateBody)=>{
    const axiosConfig = getAxiosConfig();
    const responseData = axios.patch(`${BACKEND_API_GATEWAY_URL}/todo/update/${todoUpdateBody.id}`, todoUpdateBody,axiosConfig).then((response) => {
      return response.data;
    });
    return responseData;
  }

  export const deleteTodoApi=async (todoId) =>{
    const axiosConfig = getAxiosConfig();
    const responseData = axios.delete(`${BACKEND_API_GATEWAY_URL}/todo/delete-by-id/${todoId}`,axiosConfig).then((response) => {
      return response.data;
    });
    return responseData;
  }

