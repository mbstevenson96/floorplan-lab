import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";

const FloorPlan = (props) => {
  return ( 
    <div>
      <Bedroom bedroomNo= '1' />
      <Kitchen />
      <Bedroom bedroomNo= '2' />
      <LivingRoom />
      <Bedroom bedroomNo= '3' />
    </div>
  );
}

export default FloorPlan;