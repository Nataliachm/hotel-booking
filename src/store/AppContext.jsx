/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAllHotels, verifyUserEmail, registerUser,
} from '../service/Hotel.controller';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleHotel = async () => {
    const allHotels = await getAllHotels();
    setHotels(allHotels);
  };

  const handleEmail = async () => {
    // setEmail(emailGuest);
    const found = await verifyUserEmail(email);
    // console.log('Este es el valor de found', found);
    if (found) {
      return navigate('/login-Password');
    }
    return navigate('/login-register-password');
  };

  const handleRegisterUser = async () => {
    try {
      const found = await registerUser(email, password);
      console.log(found.data.dataUser);
      const { token } = found.data.dataUser;
      localStorage.setItem('email', email);
      localStorage.setItem('token', token);

      return navigate('/profile-config-user');
    } catch {
      return navigate('/login');
    }
    // console.log('Este es el valor de found', found);
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
        // handleVotes,
        // handleValueTotal,
        // totalVotos,
        // tipoTotal,
        // handleCheckBox,
        // candidatesShow,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
