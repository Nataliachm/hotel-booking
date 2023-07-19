// import { Outlet, useNavigation } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainHome from '../../components/MainHome';

// eslint-disable-next-line react/function-component-definition
const Root = () => {
  return (
    <>
      <Header />
      <MainHome />
      <Footer />
    </>

  );
};
export default Root;
