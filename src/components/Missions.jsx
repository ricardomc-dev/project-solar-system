import React from "react";
import Title from "./Title";
import missions from "../data/missions";
import MissionCard from "./MissionCard";
import './Missions.css'

class Missions extends React.Component {
  render() {
    return (
      <>
        <Title headline="Missões" />
        <div data-testid="missions" id="missions">
          {missions.map((item) => (
            <MissionCard
              key={item.name}
              name={item.name}
              year={item.year}
              country={item.country}
              destination={item.destination}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Missions;
