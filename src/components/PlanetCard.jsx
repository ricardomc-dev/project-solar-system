import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card" id="planet-card">
        <h3 data-testid="planet-name" id="planet-name">{ planetName }</h3>
        <img className="imgPlanets" src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

export default PlanetCard;

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
