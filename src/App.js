import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
