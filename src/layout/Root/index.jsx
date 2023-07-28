// import { Outlet, useNavigation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterControl from '../../components/FilterControl';

// eslint-disable-next-line react/function-component-definition
const Root = () => {
  return (
    <>
      <Header />
      <FilterControl />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>

  );
};
export default Root;
