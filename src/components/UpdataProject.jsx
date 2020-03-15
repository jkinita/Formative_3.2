import React, { Component } from "react";
import Axios from 'axios';

class UpdateProject extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
    
    this.myRef = React.createRef();
  }

  componentDidMount() {
      Axios.get(`http://localhost:4000/api/projects/${this.props.uid}`).then(res => {
          this.setState({ user: res.data });
      });
  }

  editProject = e => {
    e.preventDefault();

    var formData = new FormData(this.myRef.current);

    var dataToSend = {
      name: formData.get("name"),
      imageUrl: formData.get("imageUrl"),
      author: formData.get("author"),
      url: formData.get("url"),
    };

    Axios.put(
        `http://localhost:4000/api/projects/${this.props.uid}`,
        dataToSend
      ).then(res => {
        console.log(res);
      });
    };

    render() {
        const{ name, imageUrl, author, url, } = this.state.user;
        return (
          <div className="p-3">
            <h2 className="text-center m-2">Add user</h2>
    
            <form className="special" onSubmit={this.editPerson} ref={this.myRef}>
              <label>Project Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="form-control"
              ></input>
    
              <label>Image url</label>
              <input
                type="text"
                name="imageUrl"
                defaultValue={imageUrl}
                className="form-control"
              ></input>
    
              <label>Author name</label>
              <input
                type="text"
                name="author"
                defaultValue={author}
                className="form-control"
              ></input>
    
              <label>Project url</label>
              <input
                type="text"
                name="url"
                defaultValue={url}
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
    
    export default UpdateProject;