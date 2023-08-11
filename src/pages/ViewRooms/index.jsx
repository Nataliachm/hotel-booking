import React from 'react';
import './ViewRooms.scss';
import { HeaderViewRooms } from '../../components/HeaderViewRooms';
import HeaderMainRooms from '../../components/HeaderMainRooms';
import MainRooms from '../../components/MainRooms';

const ViewRooms = () => {
  return (
    <>

      <div>
        <HeaderViewRooms />
      </div>
      <main className="principal-container-main-views">
        <HeaderMainRooms />
        <MainRooms />
      </main>
    </>
  );
};

export default ViewRooms;
