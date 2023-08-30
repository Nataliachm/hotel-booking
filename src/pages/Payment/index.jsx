import './Payment.scss';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PurchaseSummary from '../../components/PurchaseSummary';
import PaymentCreditCard from '../../components/PaymentCreditCard';

const stripePromise = loadStripe(
  'pk_test_51NgUkUEMcBBlCSl2Z6jMTm8SHDBXo9SbjxJARHB8Eg2PxqZhF94Wn10IYoLt5y9EC6jcQCzur8YUKwm1SxhPrNyj00GkK8tfLs'
);
const Payment = () => {
  return (
    <div className="Payment__container">
      <div className="container">
        <PurchaseSummary />
      </div>
      <div className="container">
        <Elements stripe={stripePromise}>
          <PaymentCreditCard />
        </Elements>
      </div>
    </div>
  );
};
export default Payment;
