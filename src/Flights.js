import React from "react";

class Flight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h5>
        {this.props.flight.num} {this.props.flight.from} {this.props.flight.to}{" "}
        {this.props.flight.from_date} {this.props.flight.to_date}
      </h5>
    );
  }
}

export { Flight };
