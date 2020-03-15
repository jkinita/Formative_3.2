import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import GetData from './components/GetData'
import Nav from "./components/Nav"

class App extends React.Component {
  render() {
    return (
      <div className="container-lg">
        <Header />
        <GetData />
        <Nav />
      </div>
    );
  }
}

export default App;
