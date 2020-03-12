import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Data from './components/Data'
import Nav from "./components/Nav"

class App extends React.Component {
  render() {
    return (
      <div className="container-lg">
        <Header />
        <Data />
        <Nav />
      </div>
    );
  }
}

export default App;
