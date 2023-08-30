/* eslint-disable import/no-extraneous-dependencies */
// import { Outlet, useNavigation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterControl from '../../components/FilterControl';
import { AppContextProvider } from '../../store/AppContext';

// eslint-disable-next-line react/function-component-definition
const Root = () => {
  return (
    <AppContextProvider>

      <Header />
      <FilterControl />
      <main>
        <Outlet />
      </main>
      <Footer />

    </AppContextProvider>
  );
};

export default Root;
