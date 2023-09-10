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
    const response = await axiosInstance.get('/api/hotel');
    const productData = await response.json();
    return await productData.data;
  } catch (error) {
    return error;
  }
};

export const getHotel = async (hotelId) => {
  try {
    const response = await axiosInstance(`/api/hotel/${hotelId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const verifyUserEmail = async (email) => {
  try {
    const emailUser = {
      email,
    };
    const response = await axios.post(
      'http://localhost:8080/api/user/verify',
      emailUser
    );
    // return await response?.data?.emailUser?.email === email;
    return response;
  } catch (error) {
    return error;
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
    return (await response?.data?.emailUser?.email) === email;
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

export const getUserByEmail = async (emailPerson) => {
  try {
    const emailUser = {
      emailPerson,
    };
    const response = await axios.post(
      'http://localhost:8080/api/user/get-info-user',
      emailUser
    );
    // return await response?.data?.emailUser?.email === email;
    return response;
  } catch (error) {
    return error;
  }
};

export const editUserProfile = async (userToken, userInfo) => {
  try {
    const headers = {
      Authorization: `Bearer ${userToken}`,
      'Content-Type': 'application/json', // Especificamos que estamos enviando datos en formato JSON
    };
    const data = {
      ...userInfo,
    };
    const response = await axios.put(
      'http://localhost:8080/api/user/get-info-user',
      data,
      { headers }
    );
    // return await response?.data?.emailUser?.email === email;
    return response;
  } catch (error) {
    return error;
  }
};

export const pay = async (paymentMethod) => {
  const response = await axios.post('http://localhost:8080/api/payment', {
    paymentMethod,
    amount: Math.floor(100 * 100),
  });
  return response;
};
