import './CostItems.css';
import CostDate from './CostDate';
import Card from '../UI/Card';
import React, { useState } from 'react';


const CostItem = (props) => {

  // useState можно использовать тлько в корневой функции
  const [description, setDescription] = useState(props.description)


  const changeDescriptionHandler = () => {
    // Изменяем значение
    setDescription('New Text')
  };

    return (
    // Card - стилизуещий компонент
    <Card className='cost-item'> 
      <CostDate date={props.date}/>
        <div className='cost-item__description'>
            <h2>{description}</h2>
            <div className='cost-item__price'>${props.amount}</div>
        </div>
      <button
      onClick={changeDescriptionHandler}>
        Изменить описание
      </button>
    </Card>
    );
};


export default CostItem
