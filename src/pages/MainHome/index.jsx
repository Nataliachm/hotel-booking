import { CardCarrousel } from '../../components/CardCarrousel';
import './MainHome.scss';
import CardDestination from '../../components/CardDestination';
import { CardInformation } from '../../components/CardInformation';
import TitleHome from '../../components/TitleHome';
import CardBlog from '../../components/CardBlog';
import SubscribeHome from '../../components/SubscribeHome';

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
      <div className="main__blogs">
        <CardBlog />
      </div>
      <div className="main__subscribe">
        <SubscribeHome />
      </div>
    </div>
  );
};

export default MainHome;
