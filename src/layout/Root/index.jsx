// import { Outlet, useNavigation } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterControl from '../../components/FilterControl';
import { AppContextProvider } from '../../store/AppContext';

// eslint-disable-next-line react/function-component-definition
const Root = () => {
  const navigate = useNavigate(); // Get the useNavigate function

  return (
    <AppContextProvider navigate={navigate}>

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
