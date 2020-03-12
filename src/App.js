import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Data from './components/Data'

class App extends React.Component {
  render() {
    return (
      <div className="container-lg">
      <h1>Hello Worldy</h1>
        <h1>working on branch 2</h1>
        <h1>Busy working on branch 2, at home</h1>
        <Header />
        <Data />
      </div>
    );
  }
}

export default App;
