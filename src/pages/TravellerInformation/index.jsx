import PurchaseSummary from '../../components/PurchaseSummary';
import TravellerInfo from '../../components/TravellerInfo';
import './TravellerInformation.scss';

const TravellerInformation = () => {
  return (
    <div className="TravellerInformation__container">
      <div className="container">
        <PurchaseSummary />
      </div>
      <div className="container">
        <TravellerInfo />
      </div>
    </div>
  );
};
export default TravellerInformation;
