import React from "react";
import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css"
import Header from "./components/Header";
import GetData from './components/GetData';
import AddProject from './components/AddProject';
import UpdateProject from './components/UpdataProject'

class App extends React.Component {
  render() {
    return (
      <div className="container-lg">
        
        <Header/>
        <GetData />

        <Router>
        <AddProject path="/addproject"/>
        <UpdateProject path="/updateproject"/>
        </Router>
        
      </div>
    );
  }
}

export default App;
