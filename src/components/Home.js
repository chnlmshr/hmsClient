import hospital from "../images/hospital.jpg";
import { Login } from "./Login";
import { Register } from "./Register";

export const Home = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            HMS
          </a>
          <div>
            <Login />
            <Register />
          </div>
        </div>
      </nav>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-4 my-5">
            <h2 className="md-5">We are here to help</h2>
            <p className="mt-4 text-justify">
              Hamari website number one ab isse jyada nhi likh pa raha achha
              chalo thoda aur likh hi leta hun but ab jyada nhi likh paunga pata
              nhi kya likh raa hun random tokyo denver profesor oslo wagera
            </p>
            <p className="text-justify">
              ok baad me likh lunga bye bye achha chalo ek line aurda nhi likh
              pa raha achha chalo thoda aur likh hi leta hun but ab jyada nhi
              likh paunga pata nhi kya likh raa hun random tokyo denver profesor
              oslo wagera waera
            </p>
          </div>
          <div className="col-2"></div>
          <div className="col-6">
            <img
              src={hospital}
              className="rounded mx-auto d-block"
              alt="hospital"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
