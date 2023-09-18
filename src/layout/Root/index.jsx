/* eslint-disable import/no-extraneous-dependencies */
// import { Outlet, useNavigation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterControl from '../../components/FilterControl';
import { AppContextProvider } from '../../store/AppContext';
import DisableComponent from '../../HOC/DisableComponent';
import EnableComponent from '../../HOC/EnableComponent';
// eslint-disable-next-line react/function-component-definition
const Root = () => {
  return (
    <AppContextProvider>

      <DisableComponent disablePaths={['/login', '/login-password', '/login-Password', '/login-register-password']}>
        <Header />
      </DisableComponent>

      <EnableComponent enablePaths={['/']}>
        <FilterControl />
      </EnableComponent>
      <main>
        <Outlet />
      </main>

      <DisableComponent disablePaths={['/login', '/login-password', '/login-Password', '/login-register-password']}>
        <Footer />
      </DisableComponent>

    </AppContextProvider>
  );
};
export default Root;
