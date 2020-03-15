import React from "react";
import Axios from "axios";
import Data from "./Data";

class GetData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount = event => {
    this.getData();
  };
  
  getData = event => {
    Axios.get("http://localhost:4000/api/projects").then(res => {
      console.log(res.data);
      this.setState({ data: res.data });
    });
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <ul className="d-flex p-0">
        {this.state.data.map((element, i) => {
            return (
              <Data
                key={i}
                name={element.name}
                imageUrl={element.imageUrl}
                author={element.author}
                url={element.url}
              />
            );
          })}

        </ul>
      </div>
    );
  }
}

export default GetData;