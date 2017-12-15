import React, { Component } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import {Switch, Route} from "react-router-dom";
import AddCustomer from "./customer/AddCustomer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <AddCustomer/>
        </Switch>
      </div>
    );
  }
}

export default App;
