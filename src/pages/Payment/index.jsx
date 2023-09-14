import './Payment.scss';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseSummary from '../../components/PurchaseSummary';
import PaymentCreditCard from '../../components/PaymentCreditCard';
import { getRoom } from '../../service/Hotel.controller';

const stripePromise = loadStripe(
  'pk_test_51NgUkUEMcBBlCSl2Z6jMTm8SHDBXo9SbjxJARHB8Eg2PxqZhF94Wn10IYoLt5y9EC6jcQCzur8YUKwm1SxhPrNyj00GkK8tfLs'
);
const Payment = () => {
  const { roomId } = useParams();
  const [roomInfo, setRoomInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [bookRoom, setBookRoom] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await getRoom(roomId);
      setRoomInfo(response);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    const bookRoomData = JSON.parse(localStorage.getItem('filterInfo'));
    if (bookRoomData) {
      setBookRoom(bookRoomData);
    }
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="Payment__container">
          <div className="container">
            <PurchaseSummary bookRoom={bookRoom} bookInfo={roomInfo} />
          </div>
          <div className="container">
            <Elements stripe={stripePromise}>
              <PaymentCreditCard bookRoom={bookRoom} />
            </Elements>
          </div>
        </div>
      )}
    </div>
  );
};
export default Payment;
