import './PaymentCreditCard.scss';
import {
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../FormInput';
import FormButton from '../FormButton';
import Modal from '../Modal';
import {
  pay as apiPay,
  createBookedRoom,
} from '../../service/Hotel.controller';

const PaymentCreditCard = ({ bookRoom }) => {
  const [updateModal, setUpdateModal] = useState({ show: false, msg: '' });
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const createPaymentMethod = async () => {
    let paymentMethodResponse;
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
        setUpdateModal({ show: true, msg: error.message });
      }

      paymentMethodResponse = paymentMethod;
    } catch (error) {
      setUpdateModal({
        show: true,
        msg: 'Oops, something went wrong with your card info, no worries, we didn´t debit any money from your account',
      });
    }
    return paymentMethodResponse;
  };

  const pay = async (paymentMethod) => {
    try {
      const data = {
        guests: bookRoom.guests,
        check_in: bookRoom.check_in,
        check_out: bookRoom.check_out,
        userId: bookRoom.userId,
        roomId: bookRoom.roomId,
      };
      await apiPay(paymentMethod);
      const response = await createBookedRoom(data);
      navigate(`/success-payment/${response?.createdBookedRoom.id}`);
    } catch (error) {
      setUpdateModal({ show: true, msg: error?.response?.data?.message });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const paymentMethod = await createPaymentMethod();
    if (paymentMethod) {
      pay(paymentMethod);
    }
  };

  return (
    <div className="PaymentCreditCard__container">
      <h2>Payment</h2>
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

        <FormButton type="submit">PAY NOW</FormButton>
      </form>
      <Modal showModal={updateModal.show} handleShowModal={setUpdateModal}>
        <h2>{updateModal.msg}</h2>
      </Modal>
    </div>
  );
};

export default PaymentCreditCard;
