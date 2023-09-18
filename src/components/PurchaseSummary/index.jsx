import { useContext } from 'react';
import { AppContext } from '../../store/AppContext';

import './PurchaseSummary.scss';

const PurchaseSummary = ({ bookInfo, bookRoom }) => {
  const store = useContext(AppContext);
  const {
    formatter,
  } = store;
  const basePrice = bookInfo.new_price;

  const promoDiscount = bookInfo.previous_price - bookInfo.new_price;

  const tax = bookInfo.new_price * 0.019;

  const total = basePrice + tax - promoDiscount;

  const checkIn = new Date(bookRoom.check_in).toISOString().split('T')[0];

  const checkOut = new Date(bookRoom.check_out).toISOString().split('T')[0];

  const checkInTime = new Date(bookInfo.hotel.check_in).toLocaleTimeString(
    'es-ES',

    { hour: '2-digit', minute: '2-digit' },
  );

  const checkOutTime = new Date(bookInfo.hotel.check_out).toLocaleTimeString(
    'es-ES',

    { hour: '2-digit', minute: '2-digit' },
  );

  return (
    <div className="PurchaseSummary__container">
      <h2>Booking Summary</h2>

      <section className="container__hotel section">
        <img className="roomImage" src={bookInfo.room_img} alt="roomImage" />

        <div>
          <h3>{bookInfo?.hotel.hotel_name}</h3>

          <p>
            {bookInfo?.hotel.city.name_city}

            {', '}

            {bookInfo?.hotel.city.country.country_name}
          </p>
        </div>
      </section>

      <section className="container__date section">
        <div>
          <h3>Check In</h3>

          <p>{checkIn}</p>
        </div>

        <div className="right-align">
          <h3>Check Out</h3>

          <p>{checkOut}</p>
        </div>

        <div>
          <h3>Check In Time</h3>

          <p>{checkInTime}</p>
        </div>

        <div className="right-align">
          <h3>Check Out Time</h3>

          <p>{checkOutTime}</p>
        </div>
      </section>

      <section className="container__summary section">
        <p className="summary">
          {bookRoom.guests}

          {' Guest'}

          {', '}

          {bookInfo.room_name}
        </p>

        <button className="button-edit" type="button">
          Edit
        </button>
      </section>

      <section className="container__payment section">
        <h3>Payment Details</h3>

        <div className="prices">
          <div className="price-item">
            <span>Base Price</span>

            <span>
              {'+ '}

              {basePrice}
            </span>
          </div>

          <div className="price-item">
            <span>Promo Discount</span>

            <span>
              {'- '}

              {promoDiscount}
            </span>
          </div>

          <div className="price-item">
            <span>Tax & Service Fees</span>

            <span>
              {'+ '}

              {tax}
            </span>
          </div>
        </div>
      </section>

      <section className="container__payment-total section">
        <span>Payable Amount</span>

        <span>

          {`
                    ${formatter.format(total)}`}
                    &nbsp;USD
        </span>
      </section>
    </div>
  );
};

export default PurchaseSummary;
