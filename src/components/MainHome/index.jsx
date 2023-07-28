import { CardCarrousel } from '../CardCarrousel';
import './MainHome.scss';
import CardDestination from '../CardDestination';
import { CardInformation } from '../CardInformation';
import TitleHome from '../TitleHome';

const MainHome = () => {
  return (
    <div className="main">
      <div className="main__corrousel">
        <TitleHome title="Top Offers" />
        <div className="main__wrap-corrousel">
          <CardCarrousel />
        </div>
      </div>
      <div className="main__destination">
        <TitleHome title="Most Popular Destination" />
        <div className="main__card-destination">
          <CardDestination />
        </div>

      </div>
      <div className="main__information">
        <CardInformation />
      </div>
      <div className="main__blogs" />
    </div>
  );
};

export default MainHome;
