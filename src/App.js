import './App.css';
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Barranquilla" />
     <footer>This project was coded by <a href='https://poetic-valkyrie-295501.netlify.app' target='_blank' rel='noreferrer'>Nathalie Donado</a> and is <a href='https://github.com/nat-jpg/minimal-weather-react' target='_blank' rel='noreferrer'>open-sourced on GitHub.</a> </footer>
    </div>
  );
}

export default App;
