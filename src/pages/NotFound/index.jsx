import React from 'react';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="NotFound__wrapper">
      <div className="container-notFound">
        <div className="container-notFound__image">
          <img
            src="https://web-sastre.com/wp-content/uploads/error-404-despues-migrar-restaurar-pagina-web-wordpress-01.png "
            alt="Traveller car"
          />
        </div>
        <div className="container-notFound__text">
          <h2>Error 404: Page not found</h2>
          <p>
            The page you are looking for does not exist. Please check the URL or
            navigate to another page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
