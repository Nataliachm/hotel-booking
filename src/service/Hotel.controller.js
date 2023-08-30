/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

const url = `${import.meta.env.VITE_APIVITE_API_BASE_URL}`;

const axiosInstance = axios.create({
  baseURL: url,
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

export const getAllHotels = async () => {
  try {
    const response = await axiosInstance('/api/hotel');
    const productData = await response.json();
    return await productData.data;
  } catch (error) {
    return error;
  }
};

export const verifyUserEmail = async (email) => {
  try {
    const emailUser = {
      email,
    };
    const response = await axios.post('http://localhost:8080/api/user/verify', emailUser);
    // const emailVerification = await response.json();
    return await response?.data?.emailUser?.email === email;
  } catch (error) {
    return false;
  }
};

export const authenticationUser = async (email, password) => {
  try {
    const data = {
      email,
      password,
    };
    const response = await axios.post('http://localhost:8080/api/user', data);
    // const emailVerification = await response.json();
    return await response?.data?.emailUser?.email === email;
  } catch (error) {
    return false;
  }
};

export const registerUser = async (email, password) => {
  try {
    const data = {
      email,
      password,
    };
    const response = await axios.post('http://localhost:8080/api/user', data);
    // const emailVerification = await response.json();
    return response;
  } catch (error) {
    return false;
  }
};
