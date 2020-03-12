import React, { Component } from "react";
import WorkImg from '../logo.svg'

class Data extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card m-2 ">
          <li className="card-body d-flex flex-column align-items-center">
          <img src={(WorkImg)} className="card-img-top"/>
              <p className="card-title">Name (website or app name)</p>
              <p className="card-text">Author full name</p>
              <a className="card-link" href="#">url (link to site/author's portfolio) </a>
          </li>
      </div>
      
    );
  }
}

export default Data;