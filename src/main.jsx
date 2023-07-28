import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './index.css';
// import Header from './components/Header';
// import MainHome from './components/MainHome';
// // import MainHotel from './components/MainHotel';
// import Footer from './components/Footer';
import './styles/base/base.scss';
import './styles/base/reset.scss';
import './styles/abstract/variables.scss';
import './styles/abstract/mixins.scss';
// import FilterControl from './components/FilterControl';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
