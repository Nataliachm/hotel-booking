import { useEffect, useState } from 'react';
import './MainHotel.scss';
import { useNavigate } from 'react-router-dom';
import useQuery from '../../hooks/useQuery';
import { getAllHotels } from '../../service/Hotel.controller';

const MainHotel = () => {
  const navigate = useNavigate();
  const query = useQuery();

  const handleSelectHotel = (id) => {
    navigate(`/hotel/${id}?${query.toString()}`);
  };

  const filters = query.toString();

  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const fetchHotels = async () => {
      const response = await getAllHotels(filters ? `/?${filters}` : '');
      setHotels(response);
    };
    fetchHotels();
  }, [filters]);

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

  return (
    <div className="MainHotel__container">
      {hotels.map((hotel) => {
        return (
          <div
            onClick={() => {
              return handleSelectHotel(hotel.id);
            }}
            className="card"
            key={hotel.id}
          >
            <div className="card__digital">
              <div className="card__digital--img">
                {hotel.labels && (
                  <div className="card__digital--Recommended">
                    <h4>{hotel.labels}</h4>
                  </div>
                )}
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
                    {hotel.city}
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
                    {`$
                  ${hotel.previous_price}`}
                  </h5>
                </div>
                <div>
                  <span>
                    {`$
                    ${hotel.new_price}`}
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
          </div>
        );
      })}
    </div>
  );
};

export default MainHotel;
