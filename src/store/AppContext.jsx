/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAllHotels,
  verifyUserEmail,
  registerUser,
  getUserByEmail,
  createHotelsAdmin,
  getAllHotelsAdminPage,
  getHotelAdminPageById,
  updateHotelAdminPageById,
  deleteHotelAdminPageById,
} from '../service/Hotel.controller';
import Loading from '../components/Loading';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [hotels, setHotels] = useState([]);
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
    normalPrice: '',
    salePrice: '',
    label1: '',
    label2: '',
    status: '',
  });
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

  const handleInfoUserSave = () => {
    setUserData([formUserData]);
    setUserEditId(null);
    setFormUserData({});
  };

  const handleGetUser = async () => {
    try {
      const found = await getUserByEmail(email || localStorage.getItem('email'));
      localStorage.setItem('userData', JSON.stringify(found.data.user));
      setUserData([{ ...found.data.user }]);
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
  const deleteHotelAdminPageByIdFunction = async (id) => {
    try {
      const response = await deleteHotelAdminPageById(id);
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

  return (
    <AppContext.Provider
      value={{
        handleHotel,
        hotels,
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
      }}
    >
      {isLoading ? <Loading /> : children }
    </AppContext.Provider>

  );
};
