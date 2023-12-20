import CostItem from './CostItems';
import './Costs.css'
import Card  from '../UI/Card';


const Costs = (props) => {
  
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
