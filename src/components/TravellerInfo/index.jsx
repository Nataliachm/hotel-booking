import React, { useEffect, useState } from 'react';
import './TravellerInfo.scss';
import PhoneInput from 'react-phone-number-input';
import { useNavigate } from 'react-router-dom';
import FormButton from '../FormButton';
import FormInput from '../FormInput';

const DEFAULT_FORM_INFO = {
  firstName: '',
  lastName: '',
  emailAddress: '',
  contact: '',
  specialRequest: '',
  promo: '',
};

export default function TravellerInfo({ bookRoom }) {
  const navigate = useNavigate();
  const handleBookRoom = async () => {
    navigate(`/payment/${bookRoom.roomId}`);
  };
  const [formInfo, setFormInfo] = useState(DEFAULT_FORM_INFO);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const areRequiredFieldsFilled = () => {
    const requiredFields = ['firstName', 'lastName', 'emailAddress', 'contact'];

    return requiredFields.every((field) => {
      return formInfo[field];
    });
  };

  useEffect(() => {
    setIsButtonDisabled(!areRequiredFieldsFilled());
  }, [formInfo]);

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
          onChange={(e) => {
            const firstName = e.target.value;
            setFormInfo((oldInfo) => {
              return { ...oldInfo, firstName };
            });
          }}
        />
        <FormInput
          labelText="Last Name"
          type="text"
          id="lastName"
          name="lastName"
          required
          placeholder="Last Name"
          onChange={(e) => {
            const lastName = e.target.value;
            setFormInfo((oldInfo) => {
              return { ...oldInfo, lastName };
            });
          }}
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
          onChange={(e) => {
            const emailAddress = e.target.value;
            setFormInfo((oldInfo) => {
              return { ...oldInfo, emailAddress };
            });
          }}
        />
        <span className="helper-text">
          Booking confirmation will be sent to this email ID.
        </span>
      </div>
      <span className="traveller-info-item">
        <span>Contact Info</span>
        <PhoneInput
          required
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
          onChange={(e) => {
            const specialRequest = e.target.value;
            setFormInfo((oldInfo) => {
              return { ...oldInfo, specialRequest };
            });
          }}
        />
      </label>
      <FormInput
        buttonText="APPLY"
        labelText="Have a coupon code?"
        type="text"
        id="promo"
        name="promo"
        placeholder="Promo Code"
        onChange={(e) => {
          const promo = e.target.value;
          setFormInfo((oldInfo) => {
            return { ...oldInfo, promo };
          });
        }}
      />
      <FormButton onClick={handleBookRoom} disabled={isButtonDisabled}>
        PAY NOW
      </FormButton>
    </form>
  );
}
