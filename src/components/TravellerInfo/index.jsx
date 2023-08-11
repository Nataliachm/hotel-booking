import React, { useState } from 'react';
import './TravellerInfo.scss';
import PhoneInput from 'react-phone-number-input';
import FormButton from '../FormButton';
import FormInput from '../FormInput';

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
        <FormInput
          labelText="First Name"
          type="text"
          id="name"
          name="name"
          required
          placeholder="First Name"
        />
        <FormInput
          labelText="Last Name"
          type="text"
          id="lastName"
          name="lastName"
          required
          placeholder="Last Name"
        />
      </div>
      <div>
        <FormInput
          labelText="Email Address"
          type="email"
          id="emailAddress"
          name="emailAddress"
          required
          placeholder="Email Address"
        />
        <span className="helper-text">
          Booking confirmation will be sent to this email ID.
        </span>
      </div>
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
      <FormInput
        buttonText="APPLY"
        labelText="Have a coupon code?"
        type="text"
        id="promo"
        name="promo"
        placeholder="Promo Code"
      />
      <FormButton>PAY NOW</FormButton>
    </form>
  );
}
