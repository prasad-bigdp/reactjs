import './App.css';
import Counter from './Components/counter';
import CounterClass from './Components/counterClass';

function App() {
  return (
    <div className="App">
      <h1>Counter Application</h1>
      <Counter />
      <CounterClass />
    </div>
  );
}

export default App;
