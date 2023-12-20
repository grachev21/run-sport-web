import './CostItems.css';
import CostDate from './CostDate';
import Card from '../UI/Card';


const CostItem = (props) => {

  const changeDescriptionHandler = () => {
    

  }

    return (
    // Card - стилизуещий компонент
    <Card className='cost-item'> 
      <CostDate date={props.date}/>
        <div className='cost-item__description'>
            <h2>{props.description}</h2>
            <div className='cost-item__price'>${props.amount}</div>
        </div>
      <button
      onClick={changeDescriptionHandler}>
        Изменить описание
      </button>
    </Card>
    );
}


export default CostItem
