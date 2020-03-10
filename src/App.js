import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'

class App extends React.Component {
  render() {
    return(
      <div className="container-lg">
        <Header />
      </div>
    );
  }
}

export default App;
