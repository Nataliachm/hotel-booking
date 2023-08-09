import React, { useState } from 'react';
import './TravellerInfo.scss';
import PhoneInput from 'react-phone-number-input';

const DEFAULT_FORM_INFO = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  specialRequest: '',
};

export default function TravellerInfo() {
  const [formInfo, setFormInfo] = useState(DEFAULT_FORM_INFO);
  return (
    <form className="TravellerInfo__container">
      <h2>Traveller Information</h2>
      <div className="names">
        <label htmlFor="name" className="traveller-info-item">
          <span>First Name</span>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="First Name"
          />
        </label>
        <label htmlFor="lastName" className="traveller-info-item">
          <span>Last Name</span>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            placeholder="Last Name"
          />
        </label>
      </div>
      <label htmlFor="emailAddress" className="traveller-info-item">
        <span>Email Address</span>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          required
          placeholder="Email Address"
        />
        <span className="helper-text">
          Booking confirmation will be sent to this email ID.
        </span>
      </label>
      <span className="traveller-info-item">
        <span>Contact Info</span>
        <PhoneInput
          defaultCountry="CO"
          id="contactInfo"
          placeholder="Phone number"
          value={formInfo.contact}
          onChange={(contact) => {
            return setFormInfo((oldInfo) => {
              return { ...oldInfo, contact };
            });
          }}
        />
      </span>
      <label htmlFor="specialRequest" className="traveller-info-item">
        <span>Special Request</span>
        <textarea
          type="text"
          id="specialRequest"
          name="specialRequest"
          rows={4}
          placeholder="e.g.. early check-in, airport transfer"
        />
      </label>
      <label htmlFor="promo" className="promo traveller-info-item">
        <span>Have a coupon code?</span>
        <div className="promo__field">
          <input type="text" id="promo" placeholder="Promo Code" />
          <button type="button" className="apply-btn">
            APPLY
          </button>
        </div>
      </label>
      <button type="button" className="pay-btn">
        PAY NOW
      </button>
    </form>
  );
}
