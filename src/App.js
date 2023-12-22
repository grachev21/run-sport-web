import React, {useState} from 'react';
import NewCost from './components/NewCost/NewCost.js';
import Costs from "./components/Costs/Costs";


  const INITIAL_COSTS = [
    {
      id: 'c1',
      date: new Date(2021, 3, 22),
      description: 'Куртка',
      amount: 992349
    },
    {
      id: 'c2',
      date: new Date(2021, 2, 23),
      description: 'Банки',
      amount: 2234
    },
    {
      id: 'c3',
      date: new Date(2020, 2, 22),
      description: 'Холодильник',
      amount: 98798
    },
  ];

const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS);


  // Эта функция запускается каждый раз когда добавляется
  // новый расход
  const addCostHandler = (cost) => {
    // Добавляем новый расход
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });

  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
