import './MainHotel.scss';
import hotels from './hotels';

const MainHotel = () => {
  return (
    <div className="MainHotel__container">
      {hotels.map((hotel) => {
        return (
          <div className="card" key={hotel.id}>
            <div className="card__digital">
              <div className="card__digital--img">
                {hotel.status && (
                  <div className="card__digital--Recommended">
                    {hotel.status}
                  </div>
                )}
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
                  <h6>{hotel.review}</h6>
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
          </div>
        );
      })}
    </div>
  );
};

export default MainHotel;
