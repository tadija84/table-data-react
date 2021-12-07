import React from "react";

class Worker extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   }

  render() {
    return (
      <div>
        <h4>{this.props.worker.name}</h4>
      </div>
    );
  }
}

export { Worker };
