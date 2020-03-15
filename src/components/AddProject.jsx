import React, { Component } from "react";

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="p-3">
        <h2 className="text-center m-2">Add user</h2>

        <form className="mb-5" action="http://localhost:4000/api/projects" method="POST">
          <label>Project Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
          ></input>

          <label>Image url</label>
          <input
            type="text"
            name="imageUrl"
            className="form-control"
          ></input>

          <label>Author name</label>
          <input
            type="text"
            name="author"
            className="form-control"
          ></input>

          <label>Portfolio url</label>
          <input
            type="text"
            name="url"
            className="form-control"
          ></input>

          <input
            type="submit"
            value="Add project"
            className="btn btn-success mt-3"
          ></input>
        </form>
      </div>
    );
  }
}

export default AddProject;
