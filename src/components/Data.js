import React, { Component } from "react";
import Axios from "axios";
import { navigate } from '@reach/router';

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

  urlClick = event => {
    window.open(this.props.url);
  };

  gotoEdit = e => {

    navigate(`/updateproject/${this.props.uid}`);

  };

  render() {
    return (
      <div className="card m-2 ">
        <li className="card-body d-flex flex-column align-items-center">
          <img src={this.props.imageUrl} className="card-img-top mb-3" />
          <p className="card-title">Project name: {this.props.name}</p>
          <p className="card-text">Author: {this.props.author}</p>

          <div className="d-flex">
             <button className="btn btn-primary" onClick={this.urlClick}>
            More info
          </button>
          <button className="btn btn-outline-primary mr-4 ml-4" onClick={this.gotoEdit}>Update</button>
          <button className="btn btn-outline-danger" onClick={this.handleClick}>
            Remove
          </button>
          </div>
         
        </li>
      </div>
    );
  }
}

export default Data;
