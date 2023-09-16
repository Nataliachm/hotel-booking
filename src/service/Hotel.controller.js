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
    const response = await axios.post('http://localhost:8080/api/user/get-info-user', emailUser);
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
    const response = await axios.put('http://localhost:8080/api/user', data, { headers });
    // return await response?.data?.emailUser?.email === email;
    return response;
  } catch (error) {
    return error;
  }
};

export const editUserImage = async (userToken, userImage) => {
  try {
    const headers = {
      Authorization: `Bearer ${userToken}`,
      'Content-Type': 'application/json', // Especificamos que estamos enviando datos en formato JSON
    };
    const data = {
      user_img: userImage,
    };
    const response = await axios.put('http://localhost:8080/api/user/image', data, { headers });
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

export const createHotelsAdmin = async (hotelsData) => {
  try {
    const response = await axios.post('http://localhost:8080/api/hotel', hotelsData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllHotelsAdminPage = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/hotel');
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getHotelAdminPageById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/hotel/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateHotelAdminPageById = async (id, hotelData) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/hotel/${id}`, hotelData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteHotelAdminPageById = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/api/hotel/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const createRoomsAdmin = async (hotelId, roomData) => {
  try {
    const response = await axios.post(`http://localhost:8080/api/room?hotelId=${hotelId}`, roomData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllRoomsAdminPage = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/room');
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getRoomsByHotelId = async (hotelId) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/hotel/${hotelId}/rooms`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateRoomAdminPageById = async (id, roomData) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/room/${id}`, roomData);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getRoomAdminPageById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/room/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteRoomAdminPageById = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/api/room/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createInclusionsRooms = async (inclusionRoomsData) => {
  try {
    const response = await axios.post('http://localhost:8080/api/inclusion_room', inclusionRoomsData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllInclusionsRooms = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/inclusion_room');
    return response;
  } catch (error) {
    return error;
  }
};

export const getInclusionsRoomsById = async (roomId) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/inclusion_room/${roomId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateInclusionsRoomsById = async (id, roomId) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/inclusion_room/${id}`, roomId);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllAmenitiesRooms = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/amenities_room');
    console.log('response amenities: ', response);
    return response;
  } catch (error) {
    return error;
  }
};

export const getAmenitiesRoomsById = async (roomId) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/amenities_room/${roomId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateAmenitiesRoomsById = async (id, roomId) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/amenities_room/${id}`, roomId);
    return response.data;
  } catch (error) {
    return error;
  }
};
