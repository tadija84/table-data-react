import React from "react";
import { Worker } from "./Worker";
import {Flight} from "./Flights";
import {FlightData} from "./FlightData";

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      workers: [],
      flights: [],
      flightData: {},
    };
      this.setFlights = this.setFlights.bind(this);
      this.setFlightData = this.setFlightData.bind(this);     
  }
  
  componentDidMount() { 
    fetch("https://interview-mock.herokuapp.com/api/workers")
    .then((response) => response.json())
    .then((workersNames) => {
      this.setFlights(workersNames[0].id);
      this.setState({ workers: workersNames })});  
  }
  setFlights(index) {
    fetch("https://interview-mock.herokuapp.com/api/workers/"+index)
      .then((response) => response.json())
      .then((response) => {
      this.setFlightData(response[0]);
      this.setState({ flights: response })});
  }
  setFlightData(flight){
    console.log("ahahaha");
    this.setState({flightData:{"plane":flight.plane, "duration":flight.duration,"from_gate":flight.from_gate,"to_gate":flight.to_gate}})
    }

  render() {
    return (
      <div className="Main_table">
      <div className="Worker">
        {this.state.workers.map((worker) => (
          <div key={worker.id} onClick={() => this.setFlights(worker.id)}>
            {" "}
            <Worker worker={worker} />
          </div>
        ))}
      </div>
      <div className="Flights">
        {this.state.flights.map((flight) => (
          <div key={flight.num} onClick={() => this.setFlightData(flight)}>
            {" "}
            <Flight flight={flight} />
          </div>
        ))}
      </div>
      <div className="FlightData">    
          <div >           
            <FlightData flight={this.state.flightData} />
          </div>     
      </div>
      </div>
    );
  }
}

export default Table;
