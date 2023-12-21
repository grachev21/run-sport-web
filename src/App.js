import NewCost from './components/NewCost/NewCost.js';
import Costs from "./components/Costs/Costs";


const App = () => {

  const costs = [
    {
      date: new Date(2021, 3, 22),
      description: 'Куртка',
      amount: 992349
    },
    {
      date: new Date(2021, 2, 23),
      description: 'Холодильник',
      amount: 2234
    },
    {
      date: new Date(2020, 2, 22),
      description: 'Холодильник',
      amount: 98798
    }
  ];


  return (
    <div>
      <NewCost />
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
