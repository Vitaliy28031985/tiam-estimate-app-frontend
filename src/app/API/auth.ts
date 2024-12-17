import axios from 'axios';
import BASE_URL from './base';
import { RegisterDataInterface, LoginDataInterface } from '../interfaces/registerData';


export async function registerApi(data: RegisterDataInterface) {
  try {
    const response = await axios.post(`${BASE_URL}api/auth/register`, data);
    console.log(response); 
    return response; 
  } catch (error) {
    console.error('Error during registration:', error); 
    throw error;
  }
}



export async function loginApi(data: LoginDataInterface) {
    try {
    const response = await axios.post(`${BASE_URL}api/auth/login`, data);
    console.log(response); 
    return response; 
  } catch (error) {
    console.error('Error during login:', error); 
    throw error;
  }
}

