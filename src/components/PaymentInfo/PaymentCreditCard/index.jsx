import React, { useState } from 'react';
import './PaymentCreditCard.scss';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles.scss';
import FormInput from '../../FormInput';

const PaymentCreditCard = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleInputFocus = (evt) => {
    setState((prev) => {
      return { ...prev, focus: evt.target.name };
    });
  };

  return (
    <div className="PaymentCreditCard__container">
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form className="creditCard-data">
        <FormInput
          labelText="Card number"
          type="tel"
          name="number"
          placeholder="1234 5678 9101 1213"
          pattern="[\d| ]{16,22}"
          maxLength="19"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <FormInput
          labelText="Name on card"
          type="text"
          name="name"
          placeholder="Ex. John Due"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <div className="security-data">
          <FormInput
            labelText="Expiry date"
            type="tel"
            name="expiry"
            placeholder="01 / 23"
            pattern="\d\d/\d\d"
            required
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <FormInput
            labelText="Security code"
            type="tel"
            name="cvc"
            placeholder="CVC"
            pattern="\d{3}"
            required
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
      </form>
    </div>
  );
};

export default PaymentCreditCard;
