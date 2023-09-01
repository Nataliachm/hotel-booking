/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAllHotels, verifyUserEmail, registerUser, getUserByEmail,
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
      }}
    >
      {isLoading ? <Loading /> : children }
    </AppContext.Provider>
  );
};
