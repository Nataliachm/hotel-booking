import PurchaseSummary from '../../components/PurchaseSummary';
import PaymentInfo from '../../components/PaymentInfo';
import './Payment.scss';

const Payment = () => {
  return (
    <div className="Payment__container">
      <div className="container">
        <PurchaseSummary />
      </div>
      <div className="container">
        <PaymentInfo />
      </div>
    </div>
  );
};
export default Payment;
