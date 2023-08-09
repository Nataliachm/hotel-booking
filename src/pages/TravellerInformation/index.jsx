import PurchaseSummary from '../../components/PurchaseSummary';
import './TravellerInformation.scss';

const TravellerInformation = () => {
  return (
    <div className="TravellerInformation__container">
      <div className="container__hotel">
        <PurchaseSummary />
      </div>
      <form className="container__traveller">
        <h2>Traveller Information</h2>
        <label htmlFor="name">
          First Name
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="First Name"
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            placeholder="Last Name"
          />
        </label>
        <label htmlFor="emailAddress">
          Email Address
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            required
            placeholder="Email Address"
          />
        </label>
        <span>Booking confirmation will be sent to this email ID.</span>
        <label htmlFor="contactInfo">
          Contact Info
          <input type="number" id="contactInfo" name="contactInfo" required />
        </label>
        <label htmlFor="specialRequest">
          Special Request
          <input type="text" id="specialRequest" name="specialRequest" />
        </label>
      </form>
    </div>
  );
};
export default TravellerInformation;
