import React, { Component } from "react";
import Axios from "axios";
import { navigate } from "@reach/router";

class Data extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleClick = event => {
    console.log(this.props.uid);
    Axios.delete(`http://localhost:4000/api/projects/${this.props.uid}`).then(
      res => {
        console.log("done");
      }
    );
  };

  gotoEdit = e => {
    navigate(`/updateuser/${this.props.uid}`);
  };

  urlClick = event => {
    window.open(this.props.url);
  };

  render() {
    return (
      <div className="card m-2 ">
        <li className="card-body d-flex flex-column align-items-center">
          <img src={this.props.imageUrl} className="card-img-top mb-3" />
          <p className="card-title">Project name: {this.props.name}</p>
          <p className="card-text">Author: {this.props.author}</p>
          <button
            className="btn btn-primary"
            onClick={this.urlClick}
          >More info</button>
        </li>
      </div>
    );
  }
}

export default Data;
