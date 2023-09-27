import './App.css';
import About from './Components/About';
import Home from './Components/Home';

function App() {
  const tamil="Hey there"
  const arasan= "Hello world"
  return (
    <div className="App">
        <Home Green={tamil} parrot={arasan}/>
        <About/>
      </div>
  );
}

export default App;
