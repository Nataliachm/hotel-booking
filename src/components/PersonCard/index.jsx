import React from 'react';
import './PersonCard.scss';

const PersonCard = (props) => {
  return (
    <div className="person">
      <div className="person__card">
        <div>
          <img src={props.img} alt="Foto de perfil" className="profile-img" />
        </div>
        <div className="person__card__info">
          <div>
            <h2 className="card__name">Nombre del usuario</h2>
          </div>
          <div>
            <h3 className="email">correo@example.com</h3>
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
              {props.btn2}
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
