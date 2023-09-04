import React, { useState } from 'react';
import './Header.scss';
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleUserMenuClick = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <div className="container-header">
      <header className="header">
        <Link to="/">
          <img
            className="logo"
            src="https://themes.pixelstrap.com/rica/assets/images/icon/footer-logo.png"
            alt="logo"
          />
        </Link>
        <div className="containerIcons">
          <FontAwesomeIcon
            className="menu"
            icon={faBars}
            onClick={handleMenuClick}
          />
          <FontAwesomeIcon
            className="menu"
            icon={faUser}
            onClick={handleUserMenuClick}
          />
        </div>
        <div
          className={
            isUserMenuOpen
              ? 'menu-dropdown'
              : 'menu-dropdown menu-dropdown--closed'
          }
        >
          <FontAwesomeIcon
            className="close"
            icon={faXmark}
            onClick={handleUserMenuClick}
            size="2x"
          />
          <hr />
          <Link to="/login">Iniciar sesión</Link>
          <a href="#">Regístrarte</a>
        </div>
        <div
          className={
            isMenuOpen ? 'menu-dropdown' : 'menu-dropdown menu-dropdown--closed'
          }
        >
          <FontAwesomeIcon
            className="close"
            icon={faXmark}
            onClick={handleMenuClick}
            size="2x"
          />
          <hr />
          <a href="#">COP Peso colombiano</a>
          <a href="#">Español</a>
          <a href="#">Atención al cliente</a>
          <a href="#">Información legal</a>
        </div>
      </header>
    </div>
  );
}

export default Header;
