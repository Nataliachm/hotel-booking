import React from 'react';
import { HeaderViewRooms } from '../../components/HeaderViewRooms';
import HeaderMainRooms from '../../components/HeaderMainRooms';
import MainRooms from '../../components/MainRooms';

const ViewRooms = () => {
  return (
    <>

      <div>
        <HeaderViewRooms />
      </div>
      <div>
        <HeaderMainRooms />
        <MainRooms />
      </div>
    </>
  );
};

export default ViewRooms;
