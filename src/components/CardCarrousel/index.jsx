// eslint-disable-next-line react/function-component-definition
export const CardCarrousel = () => {
  const informationCards = [
    {
      id: 1,
      title: 'Hotel Booking',
      text: 'Avail Hot Deals On Hotel Booking To Any Place',
      image: '../../../public/imageMain_1.jpg',

    },
    {
      id: 2,
      title: 'Food Order',
      text: 'Complimantary Breakfast. Use Code RICAFOOD',
      image: '../../../public/imageMain_1.jpg',

    },
    {
      id: 2,
      title: 'Food Order',
      text: 'Complimantary Breakfast. Use Code RICAFOOD',
      image: '../../../public/imageMain_1.jpg',

    },
  ];

  return (
    <div className="container">
      <div className="container__image">
        <img src="../../../public/imageMain_1.jpg" alt="" />
      </div>
      <div className="container__text">
        <h3>Text</h3>
        <p>Text</p>
      </div>
    </div>
  );
};

export default CardCarrousel;
