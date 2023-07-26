import { CardCarrousel } from '../CardCarrousel';
import './MainHome.scss';
import CardDestination from '../CardDestination';

const MainHome = () => {
  return (
    <div className="main">
      <div className="main__corrousel">
        <div className="main__wrap-corrousel">
          <CardCarrousel />
        </div>
      </div>
      <div className="main__destination">
        <CardDestination />
      </div>
      <div className="main__information" />
      <div className="main__blogs" />
    </div>
  );
};

export default MainHome;
