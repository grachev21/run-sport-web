import CostForm from './CostForm.js';
import './NewCost.css';

const NewCost = () => {

    const onSaveCostDataHandler = (inputCostData) => {
        // Извлекаем данные и добавляем id
        const costData = {
            ...inputCostData,
            id:Math.random().toString()
        }
        console.log(costData)
    }
    return (
        <div className='new-cost'>
         <CostForm onSaveCostData={onSaveCostDataHandler} /> 
        </div>
    );
};

export default NewCost;

// onSaveCostData принимает данные из CostForm