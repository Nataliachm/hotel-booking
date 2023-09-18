import { useContext } from 'react';
import { AppContext } from '../../store/AppContext';
import ImageLoading from '../ImageLoading';
import './PersonCard.scss';

const PersonCard = (props) => {
  const store = useContext(AppContext);
  const {
    userData, fileInputRef, handleUserImageChange, imageIsLoading,
  } = store;
  const { btn2, userName } = props;

  return (
    <div className="person">
      <div className="person__card">
        <div className="profile-img-container">
          {imageIsLoading ? (
            <ImageLoading />
          ) : (
            <>
              <button
                type="button"
                className="profile-img-button"
                onClick={() => {
                  return fileInputRef.current.click();
                }}
              >
                <img
                  src={
                    userData[0]?.user_img
                    || 'https://icon-library.com/images/persona-icon/persona-icon-25.jpg'
                  }
                  alt="profileImg"
                  className="profile-img"
                />
              </button>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleUserImageChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
            </>
          )}
        </div>
        <div className="person__card__info">
          <div>
            <h2 className="card__name">{userName}</h2>
          </div>
          <div>
            <h3 className="email">{localStorage.email}</h3>
          </div>
        </div>
        <div className="person__card__additional-info">
          <div>
            <a href="/profile-config-user" className="additional-link">
              Profile
            </a>
          </div>
          <div>
            <a href="/" className="additional-link">
              {btn2}
            </a>
          </div>
          <div>
            <a href="/user-booked-rooms" className="additional-link">
              Bookings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
