import './App.css';
import { Header } from "./components/Header";
import { Description } from "./components/Description";
import { Board } from "./components/Board/";

function App() {
  return [
    <div className="App">
      <Header />
    </div>,
    <div className="App">
      <Description />
    </div>,
    <div className="App">
      <Board />
    </div>
  ];
}

export default App;
