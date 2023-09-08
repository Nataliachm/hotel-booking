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
      // JSON.parse(localStorage.getItem('userData'))
      setUserData([{ ...found.data.user }]);
    } catch (error) {
      return error;
    }
  };

  // const handleSignIn = async () => {
  //   const found = await authenticationUser(email, password);
  //   if (found) {
  //     console.log('Signed in!');
  //     return;
  //   }
  //   console.log('Wrong credentials :(');
  // };
  // mainHotelConfig
  const openModal = (hotel) => {
    setSelectedHotelForModal(hotel);
    setShowModal(true);
  };
  const closeModal = () => {
    setSelectedHotelForModal(null);
    setShowModal(false);
  };
  // const handleConfirm = () => {
  //   closeModal();
  //   deleteHotelAdminPageByIdFunction(id)
  // };
  // formHotelRegistration
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
  // const handleSubmitInfoCreateHotel = async () => {
  //   try {
  //     const response = await createHotelsAdmin(formDataCreateHotel);
  //     console.log('hotelcreado: ', response);
  //   } catch (error) {
  //     console.error('error al crear el hotel: ', error);
  //   }
  // };
  const handleFormSubmit = async (event, id) => {
    event.preventDefault();
    const newHotel = {
      ...formDataCreateHotel,
      images: imageHotelCloudinary,
    };
    try {
      const response = await
      (id ? updateHotelAdminPageById(id, newHotel) : createHotelsAdmin(newHotel));
      console.log('hotelcreado: ', response);
      navigate('/hotel-config');
    } catch (error) {
      console.error('error al crear el hotel: ', error);
    }
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
  };
  const getAllHotelsAdminPageData = async () => {
    try {
      const response = await getAllHotelsAdminPage();
      // console.log('hotelestraidos: ', response);
      return response;
    } catch (error) {
      // console.error('error al traer hotel: ', error);
      return error;
    }
  };
  const getHotelAdminPageDataById = async (id) => {
    try {
      const response = await getHotelAdminPageById(id);
      console.log('hotelByID: ', response);
      return response;
    } catch (error) {
      console.error('error al traer hotelById: ', error);
      return error;
    }
  };
  const deleteHotelAdminPageByIdFunction = async (id) => {
    try {
      const response = await deleteHotelAdminPageById(id);
      console.log('deleteHotelById: ', response);
      return response;
    } catch (error) {
      console.error('error al borrar hotelById: ', error);
      return error;
    }
  };

  const handleConfirm = async () => {
    try {
      if (selectedHotelForModal) {
        const hotelId = selectedHotelForModal.id;
        const response = await deleteHotelAdminPageByIdFunction(hotelId);
        console.log('hotel borrado ', response);
        closeModal();
        setHotels((prevHotels) => {
          return prevHotels.map(
            (hotel) => { return (hotel.id === hotelId ? { ...hotel, isDeleted: true } : hotel); },
          );
        });
      }
    } catch (error) {
      console.error('error al borrar ', error);
    }

    // deleteHotelAdminPageByIdFunction(hotelId);
  };
  // console.log(selectedHotelForModal.id);

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
        // mainHotelConfig
        openModal,
        closeModal,
        selectedHotelForModal,
        setSelectedHotelForModal,
        showModal,
        setShowModal,
        handleConfirm,
        // formHotelRegistration
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
        // deleteHotelAdminPageByIdFunction,
      }}
    >
      {isLoading ? <Loading /> : children }
    </AppContext.Provider>

  );
};
