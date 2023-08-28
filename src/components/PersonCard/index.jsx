import React from 'react';
import './PersonCard.scss';

export const PersonCard = (props) => {
  const { img, btn2 } = props;
  return (
    <div className="person">
      <div className="person__card">
        <div>
          <img src={img} alt="Foto de perfil" className="profile-img" />
        </div>
        <div className="person__card__info">
          <div>
            <h2 className="card__name">Nombre del usuario</h2>
          </div>
          <div>
            <h3 className="email">{localStorage.email}</h3>
          </div>
        </div>
        <div className="person__card__additional-info">
          <div>
            <a href="enlace1.html" className="additional-link">
              Profile
            </a>
          </div>
          <div>
            <a href="enlace2.html" className="additional-link">
              {btn2}
            </a>
          </div>
          <div>
            <a href="enlace3.html" className="additional-link">
              Bookings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
