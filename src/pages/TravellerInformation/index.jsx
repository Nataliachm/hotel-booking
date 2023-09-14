import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseSummary from '../../components/PurchaseSummary';
import TravellerInfo from '../../components/TravellerInfo';
import './TravellerInformation.scss';
import { getRoom } from '../../service/Hotel.controller';

const TravellerInformation = () => {
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
        <div className="TravellerInformation__container">
          <div className="container">
            <PurchaseSummary bookRoom={bookRoom} bookInfo={roomInfo} />
          </div>
          <div className="container">
            <TravellerInfo bookRoom={bookRoom} />
          </div>
        </div>
      )}
    </div>
  );
};
export default TravellerInformation;
