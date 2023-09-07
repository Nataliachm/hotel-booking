/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAllHotels, verifyUserEmail, registerUser, getUserByEmail, editUserProfile, editUserImage,
} from '../service/Hotel.controller';
import Loading from '../components/Loading';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [imageIsLoading, setImageIsLoading] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState([{}]);
  const [userEditId, setUserEditId] = useState(null);
  const [formUserData, setFormUserData] = useState({});

  const [imageUser, setImageUser] = useState('https://icon-library.com/images/persona-icon/persona-icon-25.jpg');
  const fileInputRef = useRef(null);

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

  // const handleSignIn = async () => {
  //   const found = await authenticationUser(email, password);
  //   if (found) {
  //     console.log('Signed in!');
  //     return;
  //   }
  //   console.log('Wrong credentials :(');
  // };

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
        imageUser,
        fileInputRef,
        handleUserImageChange,
        imageIsLoading,
      }}
    >
      {isLoading ? <Loading /> : children }
    </AppContext.Provider>
  );
};
