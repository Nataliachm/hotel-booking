import { CardCarrousel } from '../CardCarrousel';

const MainHome = () => {
  return (
    <div className="main">
      <div className="main__corrousel">
        <CardCarrousel />
      </div>
      <div className="main__destination" />
      <div className="main__information" />
      <div className="main__blogs" />
    </div>
  );
};

export default MainHome;
