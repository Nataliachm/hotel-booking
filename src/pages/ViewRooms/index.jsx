import React, { useEffect, useState } from 'react';
import './ViewRooms.scss';
import { useParams } from 'react-router-dom';
import { HeaderViewRooms } from '../../components/HeaderViewRooms';
import HeaderMainRooms from '../../components/HeaderMainRooms';
import MainRooms from '../../components/MainRooms';
import { getHotel } from '../../service/Hotel.controller';
import Loading from '../../components/Loading';

const ViewRooms = () => {
  const { hotelId } = useParams();
  const [hotelInfo, setHotelInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getHotelInfo = async () => {
      try {
        setLoading(true);
        const response = await getHotel(hotelId);
        setHotelInfo(response);
      } finally {
        setLoading(false);
      }
    };
    getHotelInfo();
  }, [hotelId]);

  const { imgs, rooms, ...rest } = hotelInfo;
  const images = (imgs || []).map((element, index) => {
    return { id: index, url: element };
  });

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {images.length !== 0 ? <HeaderViewRooms images={images} /> : null}
          {rest.length !== 0 ? (
            <main className="principal-container-main-views">
              <HeaderMainRooms hotelInfo={rest} />
              <MainRooms rooms={rooms} hotelInfo={rest} />
            </main>
          ) : null}
        </>
      )}
    </div>
  );
};

export default ViewRooms;
