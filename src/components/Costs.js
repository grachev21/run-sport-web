import CostItem from './CostItems.js';
import './Costs.css'
import Card  from './Card';


function Costs(props) {
  
  return (
    <Card className='costs'>
    <CostItem
        date={props.costs[0].date}
        description={props.costs[0].description}
        amount={props.costs[0].amount}
    />
    </Card>
  );
}

export default Costs;
