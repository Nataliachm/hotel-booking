import './PaymentInfo.scss';
import { useState } from 'react';
import FormButton from '../FormButton';
import PaymentForm from './PaymentCreditCard';
import PaymentPSE from './PaymentPSE';

export default function PaymentInfo() {
  const [isCard, setIsCard] = useState(true);

  const handleClick = (value) => {
    setIsCard(value);
  };

  return (
    <div>
      <div className="PaymentInfo__container">
        <h2>Payment methods</h2>
        <div className="container-icons">
          <button
            type="button"
            className={`container-icon ${isCard ? 'active' : ''}`}
            onClick={() => {
              handleClick(true);
            }}
          >
            <img
              className="icon"
              alt="card"
              src="data:image/png;base64,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"
            />
          </button>
          <button
            type="button"
            className={`container-icon ${isCard ? '' : 'active'}`}
            onClick={() => {
              handleClick(false);
            }}
          >
            <img
              className="icon"
              alt="pse"
              src="data:image/png;base64,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"
            />
          </button>
        </div>
        {isCard ? <PaymentForm /> : <PaymentPSE />}
        <FormButton>PAY NOW</FormButton>
      </div>
    </div>
  );
}
