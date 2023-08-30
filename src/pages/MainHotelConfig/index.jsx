import React, { useState } from 'react';
import './MainHotelConfig.scss';
import PersonCard from '../../components/PersonCard';
import hotels from '../MainHotel/hotels';
import ConfirmationModal from '../../components/ConfirmationModal';

const MainHotelConfig = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (hotel) => {
    setSelectedHotel(hotel);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedHotel(null);
    setShowModal(false);
  };

  const handleConfirm = () => {
    closeModal();
  };

  return (
    <div className="MainHotelConfig__container">
      {showModal && selectedHotel && (
        <ConfirmationModal
          imageSrc={selectedHotel.img}
          onConfirm={handleConfirm}
          onCancel={closeModal}
          hotelName={selectedHotel.name}
          nameDelete="this hotel"
        />
      )}
      <PersonCard
        btn2="Hotels"
        img="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
      />
      <div className="MainHotelConfig__container--button">
        <button type="button">
          <i className="fas fa-plus-circle" />
          &nbsp; Add Hottel
        </button>
      </div>
      <div className="cardConfig">
        {hotels.length > 0 ? (
          hotels.map((hotel) => {
            return (
              <div className="card" key={hotel.id}>
                <div className="card__digital">
                  <div className="card__digital--img">
                    <img src={hotel.img} alt={`hotel ${hotel.id}`} />
                    <div className="card__digital--heartIcon">
                      <i className="far fa-heart" />
                    </div>
                  </div>
                </div>
                <div className="card__text">
                  <div className="card__text--titles">
                    <div>
                      <h2>{hotel.name}</h2>
                    </div>
                    <div>
                      <h6>
                        <i className="fas fa-map-marker-alt" />
                        &nbsp;
                        {hotel.city}
                      </h6>
                    </div>
                  </div>
                  <div className="card__text--paragraph">
                    <p>{hotel.description}</p>
                  </div>
                  <div className="card__text--review">
                    <div className="star-icons">
                      <i className="fas fa-star star-icon filled" />
                      <i className="fas fa-star star-icon filled" />
                      <i className="fas fa-star star-icon filled" />
                      <i className="fas fa-star star-icon filled" />
                      <i className="far fa-star star-icon" />
                    </div>
                    <div>
                      <h6>{hotel.stars}</h6>
                    </div>
                  </div>
                  <div className="card__text--price">
                    <div>
                      <h5>
                        {`$
                  ${hotel.previousPrice}`}
                      </h5>
                    </div>
                    <div>
                      <span>
                        {`$
                    ${hotel.newPrice}`}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card__etiquets">
                  <div>
                    <h4>{hotel.labels1}</h4>
                  </div>
                  <div>
                    <h4>{hotel.labels2}</h4>
                  </div>
                </div>
                <div className="card__botons">
                  <div>
                    <button className="btn1" type="button">
                      <i className="fas fa-cog" />
                      &nbsp; Edit Hotel
                    </button>
                  </div>
                  <div>
                    <button className="btn2" type="button">
                      <i className="fas fa-cog" />
                      &nbsp; Edit Rooms
                    </button>
                  </div>
                  <div>
                    <button
                      className="btn3"
                      type="button"
                      onClick={() => {
                        return openModal(hotel);
                      }}
                    >
                      <i className="fas fa-trash-alt" />
                      &nbsp; Delete Hotel
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No hay datos de hoteles disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default MainHotelConfig;
