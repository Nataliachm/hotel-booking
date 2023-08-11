import './PurchaseSummary.scss';

const PurchaseSummary = () => {
  return (
    <div className="PurchaseSummary__container">
      <h2>Booking Summary</h2>
      <section className="container__hotel section">
        <img
          className="roomImage"
          src="https://themes.pixelstrap.com/rica/assets/images/hotel/room/1.jpg"
          alt="roomImage"
        />
        <div>
          <h3>Sea View Hotel</h3>
          <p>Mina Road, Bur Dubai, Dubai</p>
        </div>
      </section>
      <section className="container__date section">
        <div>
          <h3>Check In</h3>
          <p>Tue, 18 Sep 2019</p>
        </div>
        <div className="right-align">
          <h3>Check Out</h3>
          <p>Fri, 21 Sep 2019</p>
        </div>
        <div>
          <h3>Check In Time</h3>
          <p>2.00 Pm</p>
        </div>
        <div className="right-align">
          <h3>Check Out Time</h3>
          <p>12.00 Pm</p>
        </div>
      </section>
      <section className="container__summary section">
        <p className="summary">2 Guest, 1 Deluxe Room, 3 Night</p>
        <button className="button-edit" type="button">
          Edit
        </button>
      </section>
      <section className="container__payment section">
        <h3>Payment Details</h3>
        <div className="prices">
          <div className="price-item">
            <span>Base Price</span>
            <span>$2510</span>
          </div>
          <div className="price-item">
            <span>Promo Discount</span>
            <span>- $250</span>
          </div>
          <div className="price-item">
            <span>Tax & Service Fees</span>
            <span>+ $150</span>
          </div>
        </div>
      </section>
      <section className="container__payment-total section">
        <span>Payable Amount</span>
        <span>$2410</span>
      </section>
    </div>
  );
};

export default PurchaseSummary;
