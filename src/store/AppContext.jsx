/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAllHotels,
  verifyUserEmail,
  registerUser,
  getUserByEmail,
  createHotelsAdmin,
  getAllHotelsAdminPage,
  getHotelAdminPageById,
  getRoomAdminPageById,
  updateHotelAdminPageById,
  deleteHotelAdminPageById,
  editUserProfile,
  editUserImage,
  createRoomsAdmin,
  getAllRoomsAdminPage,
  getRoomsByHotelId,
  updateRoomAdminPageById,
  deleteRoomAdminPageById,
  getAllInclusionsRooms,
  getAllAmenitiesRooms,
} from '../service/Hotel.controller';
import Loading from '../components/Loading';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [imageIsLoading, setImageIsLoading] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [roomss, setRoomss] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState([{}]);
  const [userEditId, setUserEditId] = useState(null);
  const [formUserData, setFormUserData] = useState({});
  // mainHotelConfig
  const [selectedHotelForModal, setSelectedHotelForModal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  // formHotelRegistration
  const [imageHotelCloudinary, setImageHotelCloudinary] = useState('');
  const [selectedImagesFormHotel, setSelectedImagesFormHotel] = useState([]);
  const [hotelsDataCreateHotel, setHotelsDataCreateHotel] = useState({});
  const [formDataCreateHotel, setFormDataCreateHotel] = useState({
    index: '',
    name: '',
    country: '',
    city: '',
    address: '',
    phone: '',
    description: '',
    stars: '',
    normalPrice: 0,
    salePrice: 0,
    label1: '',
    label2: '',
    status: '',
  });

  const [imageUser, setImageUser] = useState('https://icon-library.com/images/persona-icon/persona-icon-25.jpg');
  const fileInputRef = useRef(null);
  const [imageCreateRoom, setImageCreateRoom] = useState('');
  const [formValuesCreateRoom, setFormValuesCreateRoom] = useState({
    name: '',
    guests: '',
    normalPrice: 0,
    salePrice: 0,
    amenities: [],
    inclusions: [],
  });
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showModalForRooms, setShowModalForRooms] = useState(false);

  const handleHotel = async () => {
    const allHotels = await getAllHotels();
    setHotels(allHotels);
  };

  const handleEmail = async () => {
    setIsLoading(true);
    const found = await verifyUserEmail(email);
    setIsLoading(false);
    if (found.data.message === 'User has been found successfully') {
      return navigate('/login-Password');
    }
    return navigate('/login-register-password');
  };

  const handleRegisterUser = async () => {
    try {
      setIsLoading(true);
      const found = await registerUser(email, password);
      setIsLoading(false);
      const { token } = found.data.dataUser;
      localStorage.setItem('email', email);
      localStorage.setItem('token', token);

      return navigate('/profile-config-user');
    } catch {
      return navigate('/login');
    }
  };

  const handleUserEdit = (userName) => {
    setUserEditId(userName);

    setFormUserData(
      userData[0],
    );
  };

  const handleInputUserChange = (e) => {
    const { name, value } = e.target;
    setFormUserData(
      {
        ...formUserData,
        [name]: value,
      },
    );
  };

  const handleInfoUserSave = async () => {
    localStorage.removeItem('userData');
    setUserData([formUserData]);
    const token = localStorage.getItem('token');
    await editUserProfile(token, formUserData);
    setUserEditId(null);
    setFormUserData({});
  };

  const handleGetUser = async () => {
    try {
      const infoLocalUser = localStorage.getItem('userData');
      if (!infoLocalUser) {
        const found = await getUserByEmail(email || localStorage.getItem('email'));
        localStorage.setItem('userData', JSON.stringify(found.data.user));
        // JSON.parse(localStorage.getItem('userData'))
        setUserData([{ ...found.data.user }]);
      } else {
        setUserData([JSON.parse(infoLocalUser)]);
      }
    } catch (error) {
      return error;
    }
  };
  const openModal = (hotel) => {
    setSelectedHotelForModal(hotel);
    setShowModal(true);
  };
  const closeModal = () => {
    setSelectedHotelForModal(null);
    setShowModal(false);
  };
  const openModalForRooms = (room) => {
    setSelectedRoom(room);
    setShowModalForRooms(true);
  };

  const closeModalForRooms = () => {
    setSelectedRoom(null);
    setShowModalForRooms(false);
  };

  const handleConfirmForRooms = async () => {
    try {
      if (selectedRoom) {
        const roomId = selectedRoom.id;
        const response = await deleteRoomAdminPageById(roomId);
        closeModalForRooms();
        setRoomss((prevRooms) => {
          return prevRooms.map(
            (room) => { return (room.id === roomId ? { ...room, isDeleted: true } : room); },
          );
        });
        return response;
      }
    } catch (error) {
      return error;
    }
  };

  const uploadImage = async (image) => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'hotelImages');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/drnclewqh/image/upload',
      {
        method: 'POST',
        body: data,
      },
    );
    const file = await res.json();
    setImageHotelCloudinary(file.secure_url);
  };
  const handleImageChange = (event) => {
    const image = event.target.files[0];
    const imageUrl = URL.createObjectURL(image);
    setSelectedImagesFormHotel([imageUrl]);
    uploadImage(image);
  };
  const handleFormSubmit = async (event, id) => {
    event.preventDefault();
    const newHotel = {
      ...formDataCreateHotel,
      images: imageHotelCloudinary,
    };
    try {
      const response = await
      (id ? updateHotelAdminPageById(id, newHotel) : createHotelsAdmin(newHotel));
      navigate('/hotel-config');
      setFormDataCreateHotel({
        index: '',
        name: '',
        country: '',
        city: '',
        address: '',
        phone: '',
        description: '',
        stars: '',
        normalPrice: '',
        salePrice: '',
        label1: '',
        label2: '',
        status: '',
      });
      setImageHotelCloudinary('');
      setSelectedImagesFormHotel([]);
      return response;
    } catch (error) {
      return error;
    }
  };
  const getAllHotelsAdminPageData = async () => {
    try {
      const response = await getAllHotelsAdminPage();
      return response;
    } catch (error) {
      return error;
    }
  };
  const getHotelAdminPageDataById = async (id) => {
    try {
      const response = await getHotelAdminPageById(id);
      return response;
    } catch (error) {
      return error;
    }
  };
  const getRoomAdminPageDataById = async (id) => {
    try {
      const response = await getRoomAdminPageById(id);
      return response;
    } catch (error) {
      return error;
    }
  };
  const getRoomsByIdHotel = async (id) => {
    try {
      const rooms = await getRoomsByHotelId(id);
      return rooms;
    } catch (error) {
      return error;
    }
  };
  const deleteHotelAdminPageByIdFunction = async (id) => {
    try {
      const response = await deleteHotelAdminPageById(id);
      return response;
    } catch (error) {
      return error;
    }
  };
  const deleteRoomAdminPageByIdFunction = async (id) => {
    try {
      const response = await deleteRoomAdminPageById(id);
      return response;
    } catch (error) {
      return error;
    }
  };

  const handleConfirm = async () => {
    try {
      if (selectedHotelForModal) {
        const hotelId = selectedHotelForModal.id;
        const response = await deleteHotelAdminPageByIdFunction(hotelId);
        closeModal();
        setHotels((prevHotels) => {
          return prevHotels.map(
            (hotel) => { return (hotel.id === hotelId ? { ...hotel, isDeleted: true } : hotel); },
          );
        });
        return response;
      }
    } catch (error) {
      return error;
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormDataCreateHotel((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const handleUserImageChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setImageIsLoading(true);
      const data = new FormData();
      data.append('file', selectedFile);
      data.append('upload_preset', 'hotelImages');
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/drnclewqh/image/upload',
        {
          method: 'POST',
          body: data,
        },
      );
      const file = await res.json();
      const token = localStorage.getItem('token');
      await editUserImage(token, file.secure_url);
      localStorage.removeItem('userData');

      const found = await getUserByEmail(email || localStorage.getItem('email'));
      localStorage.setItem('userData', JSON.stringify(found.data.user));
      setUserData([{ ...found.data.user }]);
      setImageIsLoading(false);

      setImageUser(file.secure_url);
    }
  };
  const handleInputChangeCreateRoom = (event) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    if (type === 'checkbox') {
      if (name === 'amenities') {
        if (checked) {
          setFormValuesCreateRoom((prevValues) => {
            return {
              ...prevValues,
              amenities: [...prevValues.amenities, value],
            };
          });
        } else {
          setFormValuesCreateRoom((prevValues) => {
            return {
              ...prevValues,
              amenities: prevValues.amenities.filter((item) => {
                return item !== value;
              }),
            };
          });
        }
      } else if (name === 'inclusions') {
        if (checked) {
          setFormValuesCreateRoom((prevValues) => {
            return {
              ...prevValues,
              inclusions: [...prevValues.inclusions, value],
            };
          });
        } else {
          setFormValuesCreateRoom((prevValues) => {
            return {
              ...prevValues,
              inclusions: prevValues.inclusions.filter((item) => {
                return item !== value;
              }),
            };
          });
        }
      }
    } else {
      setFormValuesCreateRoom((prevValues) => {
        return {
          ...prevValues,
          [name]: value,
        };
      });
    }
  };
  const uploadImageCreateRoom = async (event) => {
    const { files } = event.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'hotelImages');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/drnclewqh/image/upload',
      {
        method: 'POST',
        body: data,
      },
    );
    const file = await res.json();
    setImageCreateRoom(file.secure_url);
  };
  const handleSubmitCreateRoom = async (hotelId, roomId, event) => {
    event.preventDefault();
    const newRoom = {
      ...formValuesCreateRoom,
      imageCreateRoom,
    };
    try {
      let response;
      // const response = await createRoomsAdmin(hotelId, newRoom);
      if (roomId) {
        response = await updateRoomAdminPageById(roomId, newRoom);
        navigate('/hotel-config');
      } else {
        response = await createRoomsAdmin(hotelId, newRoom);
        navigate(`/admin-room-edit?id=${hotelId}`);
      }

      setFormValuesCreateRoom({
        name: '',
        guests: '',
        normalPrice: 0,
        salePrice: 0,
        amenities: [],
        inclusions: [],
      });
      setImageCreateRoom('');
      return response;
    } catch (error) {
      return error;
    }
  };
  const getAllRoomsAdminPageData = async () => {
    try {
      const response = await getAllRoomsAdminPage();
      return response;
    } catch (error) {
      return error;
    }
  };
  const getAllInclusionsRoomPageData = async () => {
    try {
      const response = await getAllInclusionsRooms();
      return response;
    } catch (error) {
      return error;
    }
  };
  const getAllAmenitiesRoomPageData = async () => {
    try {
      const response = await getAllAmenitiesRooms();
      return response;
    } catch (error) {
      return error;
    }
  };
  return (
    <AppContext.Provider
      value={{
        handleHotel,
        hotels,
        roomss,
        handleEmail,
        email,
        setEmail,
        password,
        setPassword,
        handleRegisterUser,
        isLoading,
        userData,
        userEditId,
        formUserData,
        handleUserEdit,
        handleInputUserChange,
        handleInfoUserSave,
        setUserData,
        handleGetUser,
        openModal,
        closeModal,
        selectedHotelForModal,
        setSelectedHotelForModal,
        showModal,
        setShowModal,
        handleConfirm,
        imageHotelCloudinary,
        setImageHotelCloudinary,
        selectedImagesFormHotel,
        setSelectedImagesFormHotel,
        hotelsDataCreateHotel,
        setHotelsDataCreateHotel,
        formDataCreateHotel,
        setFormDataCreateHotel,
        uploadImage,
        handleImageChange,
        handleFormSubmit,
        handleInputChange,
        getAllHotelsAdminPageData,
        getHotelAdminPageDataById,
        imageUser,
        fileInputRef,
        handleUserImageChange,
        imageIsLoading,
        imageCreateRoom,
        setImageCreateRoom,
        formValuesCreateRoom,
        setFormValuesCreateRoom,
        handleInputChangeCreateRoom,
        uploadImageCreateRoom,
        handleSubmitCreateRoom,
        selectedRoom,
        setSelectedRoom,
        showModalForRooms,
        setShowModalForRooms,
        openModalForRooms,
        closeModalForRooms,
        handleConfirmForRooms,
        getAllRoomsAdminPageData,
        getRoomsByIdHotel,
        getRoomAdminPageDataById,
        deleteRoomAdminPageByIdFunction,
        getAllInclusionsRoomPageData,
        getAllAmenitiesRoomPageData,
      }}
    >
      {isLoading ? <Loading /> : children }
    </AppContext.Provider>

  );
};
