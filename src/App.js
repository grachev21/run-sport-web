import Costs from "./components/Costs/Costs";


const App = () => {

  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Холодильник',
      amount: 999.99
    },
    {
      date: new Date(2021, 2, 12),
      description: 'Холодильник',
      amount: 999.99
    },
    {
      date: new Date(2021, 2, 12),
      description: 'Холодильник',
      amount: 999.99
    }
  ];


  return (
    <div>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
