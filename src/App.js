import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PatientDashboard } from "./components/patient/Dashboard";
import { PatientAccount } from "./components/patient/Account";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/patient" render={() => <PatientDashboard />} />
          <Route
            exact
            path="/patient/account"
            render={() => <PatientAccount />}
          />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
