import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';


function App() {
  const nome = "Jorge"

  return (
    <div className="App">
      <Frase/>
      <Frase/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Pessoa nome={"João"} idade={19} profissao={"Engenheiro de Software"} fot="https://via.placeholder.com/150"/>

    </div>
  );
}

export default App;
