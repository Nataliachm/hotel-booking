import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../store/AppContext';
import './MainHotelConfig.scss';
import PersonCard from '../../components/PersonCard';
import ConfirmationModal from '../../components/ConfirmationModal';

const MainHotelConfig = () => {
  const store = useContext(AppContext);
  const navigate = useNavigate();
  const {
    showModal,
    selectedHotelForModal,
    openModal,
    closeModal,
    handleConfirm,
    getAllHotelsAdminPageData,
    selectedHotelId,
    getRoomsByIdHotel,
    formatter,
    setIsLoading,
  } = store;
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const response = await getAllHotelsAdminPageData();

      setHotels(response);
    };
    setIsLoading(true);
    fetchHotels();
    setIsLoading(false);
  }, []);
  const ratingToStars = (rating) => {
    switch (rating) {
      case 'one':
        return 1;
      case 'two':
        return 2;
      case 'three':
        return 3;
      case 'four':
        return 4;
      case 'five':
        return 5;
      default:
        return 0;
    }
  };
  const handleDeleteHotel = (hotel) => {
    openModal(hotel);
  };
  useEffect(() => {
    if (selectedHotelId) {
      getRoomsByIdHotel();
    }
  }, [selectedHotelId, getRoomsByIdHotel]);

  return (
    <div className="MainHotelConfig__container">
      {showModal && selectedHotelForModal && (
        <ConfirmationModal
          imageSrc={selectedHotelForModal.hotel_img}
          onConfirm={async () => {
            await handleConfirm();
            closeModal();
            const updatedHotels = await getAllHotelsAdminPageData();
            setHotels(updatedHotels);
          }}
          onCancel={closeModal}
          hotelName={selectedHotelForModal.hotel_name}
          nameDelete="this hotel"
        />
      )}
      <PersonCard
        btn2="Hotels"
        img="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
      />
      <div className="MainHotelConfig__container--button">
        <button
          onClick={() => {
            return navigate('/form-hotel-registration');
          }}
          type="button"
        >
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
                    <img src={hotel.hotel_img} alt={`hotel ${hotel.id}`} />
                    <div className="card__digital--heartIcon">
                      <i className="far fa-heart" />
                    </div>
                  </div>
                </div>
                <div className="card__text">
                  <div className="card__text--titles">
                    <div>
                      <h2>{hotel.hotel_name}</h2>
                    </div>
                    <div>
                      <h6>
                        <i className="fas fa-map-marker-alt" />
                        &nbsp;
                        {hotel.city?.name_city}
                      </h6>
                    </div>
                  </div>
                  <div className="card__text--paragraph">
                    <p>{hotel.description}</p>
                  </div>
                  <div className="card__text--review">
                    <div className="star-icons">
                      <i
                        className={` fa-star star-icon ${
                          ratingToStars(hotel.hotel_rating) >= 1
                            ? 'fas filled'
                            : 'far'
                        }`}
                      />
                      <i
                        className={` fa-star star-icon ${
                          ratingToStars(hotel.hotel_rating) >= 2
                            ? 'fas filled'
                            : 'far'
                        }`}
                      />
                      <i
                        className={` fa-star star-icon ${
                          ratingToStars(hotel.hotel_rating) >= 3
                            ? 'fas filled'
                            : 'far'
                        }`}
                      />
                      <i
                        className={` fa-star star-icon ${
                          ratingToStars(hotel.hotel_rating) >= 4
                            ? 'fas filled'
                            : 'far'
                        }`}
                      />
                      <i
                        className={` fa-star star-icon ${
                          ratingToStars(hotel.hotel_rating) >= 5
                            ? 'fas filled'
                            : 'far'
                        }`}
                      />
                    </div>
                    <div>
                      <h6>
                        {`${hotel.hotel_rating} 
                        stars`}
                      </h6>
                    </div>
                  </div>
                  <div className="card__text--price">
                    <div>
                      <h5>
                        {`
                  ${formatter.format(hotel.previous_price)}`}
                  &nbsp;USD
                      </h5>
                    </div>
                    <div>
                      <span>
                        {`
                    ${formatter.format(hotel.new_price)
                    }`}
                    &nbsp;USD
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card__botons">
                  <div>
                    <button
                      className="btn1"
                      type="button"
                      onClick={() => {
                        return navigate(
                          `/form-hotel-registration?id=${hotel.id}`,
                        );
                      }}
                    >
                      <i className="fas fa-cog" />
                      &nbsp; Edit Hotel
                    </button>
                  </div>
                  <div>
                    <button className="btn2" type="button" onClick={() => { return navigate(`/admin-room-edit?id=${hotel.id}`); }}>
                      <i className="fas fa-cog" />
                      &nbsp; Edit Rooms
                    </button>
                  </div>
                  <div>
                    <button
                      className="btn3"
                      type="button"
                      onClick={() => {
                        return handleDeleteHotel(hotel);
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
