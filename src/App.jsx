import "./App.css";
import Item from "./components/Item";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <h2>React + Vite 2023</h2>
      <Item />
      <Item />
    </div>
  );
}

export default App;
