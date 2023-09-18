import React, { useState, useContext, useEffect } from 'react';
import './Header.scss';
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { AppContext } from '../../store/AppContext';

function Header() {
  const store = useContext(AppContext);
  const {
    userData, handleSignOut, setUserData,
  } = store;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleUserMenuClick = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setUserData([JSON.parse(localStorage.getItem('userData'))]);
    }
  }, []);

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
          {(JSON.parse(localStorage.getItem('userData')))
          && (
          <>
            <div className="container-header__information">
              <div className="container-header__user-info">
                <div className="container-header__user-image">
                  <img src={userData[0].user_img || 'https://icon-library.com/images/persona-icon/persona-icon-25.jpg'} alt="" />
                </div>
                <div className="container-header__user-data">
                  <p>{userData[0]?.user_name || 'Unknown'}</p>
                  <p>{localStorage.getItem('email') || ''}</p>
                </div>
              </div>
              <FontAwesomeIcon
                className="close"
                icon={faXmark}
                onClick={handleUserMenuClick}
                size="2x"
              />
            </div>
            <hr />
            <Link to="/profile-config-user" onClick={handleUserMenuClick}>Profile</Link>
            <a href="/" onClick={handleSignOut}>Log out</a>
          </>
          )}
          {!(JSON.parse(localStorage.getItem('userData')))
          && (
          <>
            <FontAwesomeIcon
              className="close"
              icon={faXmark}
              onClick={handleUserMenuClick}
              size="2x"
            />
            <hr />
            <Link to="/login" onClick={handleUserMenuClick}>Log in</Link>
            <a href="/login" onClick={handleUserMenuClick}>Register</a>

          </>
          )}
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
          <a href="/">Home</a>
          <a href="/hotel-config">Hotels</a>
          <a href="/">Rooms</a>
        </div>
      </header>
    </div>
  );
}

export default Header;
