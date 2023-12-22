import './Costs.css'
import CostItem from './CostItems';
import Card  from '../UI/Card';
import CostsFilter from './CostsFilter';
import React, { useState } from 'react';


const Costs = (props) => {

  // Хук состояния
  const [selectedYear, setSelectedYear] = useState('2019');

  const yearChangeHandler = (year) => {
    // Передаем значение в новое состояние
    setSelectedYear(year)
  }
  
  // Передаем в CostsFilter начальное значение 
  // selectedYear
  return (
  <div>
    <Card className='costs'>
    <CostsFilter 
        year={selectedYear} 
        onChangeYear={yearChangeHandler}/>

      {/* Это работает так же как цикл */}
      {props.costs.map((cost) => (
        <CostItem 
        date={cost.date}
        description={cost.description}
        amount={cost.amount}/>
      ))}

    </Card>
  </div>
  );
}

export default Costs;
