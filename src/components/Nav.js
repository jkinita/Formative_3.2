import React from "react";

class Nav extends React.Component {
  render() {
    return <nav class="navbar navbar-light bg-light fixed-bottom">
        <button className="btn btn-success">Add item</button>
        <button className="btn btn-outline-primary">Update</button>
        <button className="btn btn-outline-danger">Remove</button>
    </nav>;
  }
}

export default Nav;
