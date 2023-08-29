// import React, { useState } from 'react';
// import Cards from 'react-credit-cards-2';
// const [state, setState] = useState({
//   number: '',
//   expiry: '',
//   cvc: '',
//   name: '',
//   focus: '',
// });
import './PaymentCreditCard.scss';
import 'react-credit-cards-2/dist/es/styles.scss';
import {
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import FormInput from '../FormInput';
import FormButton from '../FormButton';

const PaymentCreditCard = () => {
  const stripe = useStripe();
  const elements = useElements();

  const transactionErrors = {
    'Your card has insufficient funds.': () => {
      return alert('No tienes fondos suficientes');
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(
          CardNumberElement,
          CardExpiryElement,
          CardCvcElement
        ),
      });

      if (error) {
        console.log(error);
        return;
      }

      const response = await axios.post('http://localhost:8080/api/checkout', {
        paymentMethod,
        amount: Math.floor(100 * 100),
      });

      // eslint-disable-next-line no-alert
      alert('Gracias por tu compra');
      // navigate(/payment-success)
    } catch ({ response }) {
      transactionErrors[response.data.message]();
      // if(response.data.message === 'Your card has insufficient funds.') {
      //   alert('No tienes fondos suficientes')
      // }
    } finally {
      elements
        .getElement(CardNumberElement, CardExpiryElement, CardCvcElement)
        .clear();
    }
  };

  return (
    <div className="PaymentCreditCard__container">
      <h2>Payment</h2>
      {/* <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      /> */}
      <form onSubmit={handleSubmit} className="creditCard-data">
        <FormInput
          labelText="Name on card"
          type="text"
          name="name"
          placeholder="Ex. John Due"
        />
        <div>
          <label htmlFor="cardNumber">
            Card Number
            <CardNumberElement id="cardNumber" className="inputCard" />
          </label>
        </div>
        <div className="container__security-data">
          <div className="security-data">
            <label htmlFor="expiry">Card Expiration</label>
            <CardExpiryElement id="expiry" className="inputCard" />
          </div>
          <div className="security-data">
            <label htmlFor="cvc">cvc</label>
            <CardCvcElement id="cvc" className="inputCard" />
          </div>
        </div>

        <FormButton>PAY NOW</FormButton>
      </form>
    </div>
  );
};

export default PaymentCreditCard;
