/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAllHotels, verifyUserEmail, registerUser, getUserByEmail, createHotelsAdmin,
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
  const [hotelsDataCreateHotel, setHotelsDataCreateHotel] = useState([]);
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
  const handleConfirm = () => {
    closeModal();
  };
  // formHotelRegistration
  const uploadImage = async (event) => {
    const filesa = event.target.files;
    const data = new FormData();
    data.append('file', filesa[0]);
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
    const images = event.target.files;
    const imageUrls = [];
    for (let i = 0; i < images.length; i += 1) {
      const imageUrl = URL.createObjectURL(images[i]);
      imageUrls.push(imageUrl);
    }
    setSelectedImagesFormHotel(imageUrls);
    uploadImage(event);
  };
  const handleSubmitInfoCreateHotel = async () => {
    try {
      const response = await createHotelsAdmin([formDataCreateHotel]);
      console.log('hotelcreado: ', response);
    } catch (error) {
      console.error('error al crear el hotel: ', error);
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newHotel = {
      ...formDataCreateHotel,
      images: imageHotelCloudinary,
    };
    // setHotelsData((prevHotels) => {
    //   return [...prevHotels, newHotel];
    // });
    setHotelsDataCreateHotel([newHotel]);
    // localStorage.setItem('newHotel', JSON.stringify(newHotel));
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

    setSelectedImagesFormHotel([]);
    handleSubmitInfoCreateHotel();
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
  console.log(hotelsDataCreateHotel);
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
      }}
    >
      {isLoading ? <Loading /> : children }
    </AppContext.Provider>

  );
};
