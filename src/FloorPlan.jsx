import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";

const FloorPlan = (props) => {
  return ( 
    <div>
      <Bedroom bedNum= '1' />
      <Kitchen />
      <Bedroom bedNum= '2' />
      <LivingRoom />
      <Bedroom bedNum= '3' />
    </div>
  );
}

export default FloorPlan;