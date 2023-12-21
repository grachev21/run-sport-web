import React, { useState } from 'react';
import './CostForm.css'


const CostForm = () => {

  // Начальное состояние для input укажем в виде пустой строки
  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');


  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value)
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value)
  };

  // Эта функция принимает данные из формы
  const submitHandler = (event) => {
    // Предотвращает дефолтное поведение браузера.
    // Теперь при нажатии на кнопку, браузер не будет 
    // обновляться
    event.preventDefault();

    const costData = {
      name: inputName,
      amount: inputAmount,
      date: new Date(inputDate)
    };
    console.log(costData);
  };

    return (
    <form onSubmit={submitHandler}>
      <div className='new-cost__controls'>
        <div className='new-cost__control'>
          <label>Название</label>
          <input type='text' onChange={nameChangeHandler} />
        </div>
        <div className='new-cost__control'>
          <label>Сумма</label>
          <input type='number' onChange={amountChangeHandler} min='0.01' step='0.01'/>
        </div>
        <div className='new-cost__control'>
          <label>Дата</label>
          <input type='date' onChange={dateChangeHandler} min='2019-01-01' step='2022-12-31'/>
        </div>
        <div className='new-cost__actions'>
          <button type='submit'>Добавить расходы</button>
        </div>
      </div>
    </form>
    );
};

export default CostForm;



// onChange принимает информацию не только из input но из input 
// где есть дата
