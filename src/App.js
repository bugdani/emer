import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderMenu from "./components/Header";
import FooterMenu from "./components/Footer";
import QuienesSomos from "./pages/QuienesSomos";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import Consultores from "./pages/Consultores";
import Alquiler from "./pages/Alquiler";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderMenu />
        <Switch>
          <Route path="/" component={QuienesSomos} exact />
          <Route path="/Servicios" component={Servicios} exact />
          <Route path="/Contacto" component={Contacto} exact />
          <Route path="/Consultores" component={Consultores} exact />
          <Route path="/Alquiler" component={Alquiler} exact />
        </Switch>
        <FooterMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
