import NewCost from './components/NewCost/NewCost.js';
import Costs from "./components/Costs/Costs";


const App = () => {

  const costs = [
    {
      id: 'c1',
      date: new Date(2021, 3, 22),
      description: 'Куртка',
      amount: 992349
    },
    {
      id: 'c2',
      date: new Date(2021, 2, 23),
      description: 'Холодильник',
      amount: 2234
    },
    {
      id: 'c3',
      date: new Date(2020, 2, 22),
      description: 'Холодильник',
      amount: 98798
    }
  ];

  const addCostHandler = (cost) => {
    console.log(cost, 'App')

  }

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
