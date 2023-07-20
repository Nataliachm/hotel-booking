import { CardCarrousel } from '../CardCarrousel';
import './MainHome.scss';

const MainHome = () => {
  return (
    <div className="main">
      <div className="main__corrousel">
        <div className="main__wrap-corrousel">
          <CardCarrousel />
        </div>
      </div>
      <div className="main__destination" />
      <div className="main__information" />
      <div className="main__blogs" />
    </div>
  );
};

export default MainHome;
