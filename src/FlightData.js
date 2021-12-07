import React from "react";

class FlightData extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h4>Plane number: {this.props.flight.plane}</h4>
        <h4>Duration: {this.props.flight.duration}</h4>
        <h4>Origin gate: {this.props.flight.from_gate}</h4>
        <h4>Destination gate: {this.props.flight.to_gate}</h4>
      </div>
    );
  }
}

export { FlightData };
