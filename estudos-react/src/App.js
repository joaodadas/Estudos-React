import './App.css';
import HelloWord from './components/HelloWord';

function App() {
  const name = 'Matheus'

  return (
    <div className="App">
      <h1>Olá React</h1>
      <p>Olá {name}</p>
      <HelloWord/>
    </div>
  );
}

export default App;
