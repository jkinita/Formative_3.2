import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Data from './components/Data'

class App extends React.Component {
  render() {
    return (
      <div className="container-lg">
        <Header />
        <Data />
      </div>
    );
  }
}

export default App;
