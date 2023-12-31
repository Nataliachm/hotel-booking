/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

const url = `${import.meta.env.VITE_API_BASE_URL}`;

const axiosInstance = axios.create({
  baseURL: url,
});

export const getAllHotels = async (filters) => {
  try {
    const response = await axiosInstance.get(`/api/hotel${filters}`);
    return response.data;
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

export const getRoom = async (roomId) => {
  try {
    const response = await axiosInstance.get(`/api/room/${roomId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getBookedRoom = async (bookedRoomId) => {
  try {
    const response = await axiosInstance(`/api/booked-room/${bookedRoomId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getbookedRoomsByUserId = async (userId) => {
  try {
    const response = await axiosInstance.get(
      `/api/booked-room/${userId}/bookedRooms`,
    );
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
    const response = await axiosInstance.post(
      '/api/user/verify',
      emailUser,
    );
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
    const response = await axiosInstance.post(
      '/api/user/login',
      data,
    );
    return response;
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
    const response = await axiosInstance.post('/api/user', data);
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
    const response = await axiosInstance.post(
      '/api/user/get-info-user',
      emailUser,
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const editUserProfile = async (userToken, userInfo) => {
  try {
    const headers = {
      Authorization: `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    };
    const data = {
      ...userInfo,
    };

    const response = await axiosInstance.put('/api/user', data, {
      headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const editUserImage = async (userToken, userImage) => {
  try {
    const headers = {
      Authorization: `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    };
    const data = {
      user_img: userImage,
    };
    const response = await axiosInstance.put(
      '/api/user/image',
      data,
      { headers },
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const pay = async (paymentMethod) => {
  const response = await axiosInstance.post('/api/payment', {
    paymentMethod,
    amount: Math.floor(100 * 100),
  });
  return response;
};

export const createHotelsAdmin = async (hotelsData) => {
  try {
    const response = await axiosInstance.post(
      '/api/hotel',
      hotelsData,
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllHotelsAdminPage = async () => {
  try {
    const response = await axiosInstance.get('/api/hotel');
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateHotelAdminPageById = async (id, hotelData) => {
  try {
    const response = await axiosInstance.put(
      `/api/hotel/${id}`,
      hotelData,
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteHotelAdminPageById = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/hotel/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const createRoomsAdmin = async (hotelId, roomData) => {
  try {
    const response = await axiosInstance.post(`/api/room?hotelId=${hotelId}`, roomData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllRoomsAdminPage = async () => {
  try {
    const response = await axiosInstance.get('/api/room');
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getRoomsByHotelId = async (hotelId) => {
  try {
    const response = await axiosInstance.get(`/api/hotel/${hotelId}/rooms`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateRoomAdminPageById = async (id, roomData) => {
  try {
    const response = await axiosInstance.put(`/api/room/${id}`, roomData);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getRoomAdminPageById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/room/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteRoomAdminPageById = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/room/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createInclusionsRooms = async (inclusionRoomsData) => {
  try {
    const response = await axiosInstance.post('/api/inclusion_room', inclusionRoomsData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllInclusionsRooms = async () => {
  try {
    const response = await axiosInstance.get('/api/inclusion_room');
    return response;
  } catch (error) {
    return error;
  }
};

export const getInclusionsRoomsById = async (roomId) => {
  try {
    const response = await axiosInstance.get(`/api/inclusion_room/${roomId}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateInclusionsRoomsById = async (id, roomId) => {
  try {
    const response = await axiosInstance.put(`/api/inclusion_room/${id}`, roomId);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAmenitiesRoomsById = async (roomId) => {
  try {
    const response = await axiosInstance.get(`/api/amenities_room/${roomId || ''}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateAmenitiesRoomsById = async (id, roomId) => {
  try {
    const response = await axiosInstance.put(`/api/amenities_room/${id}`, roomId);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createBookedRoom = async (data) => {
  const response = await axiosInstance.post(
    '/api/booked-room',
    data,
  );
  return response.data;
};
