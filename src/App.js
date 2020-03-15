import React from "react";
import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css"
import Header from "./components/Header";
import GetData from './components/GetData';
import AddProject from './components/AddProject';

class App extends React.Component {
  render() {
    return (
      <div className="container-lg">
        
        <Header/>
        <GetData />

        <Router>
        <AddProject path="/addproject"/>
        </Router>
        
      </div>
    );
  }
}

export default App;
