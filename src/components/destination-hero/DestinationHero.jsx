// styles
import "./DestinationHero.scss";

import data from "../../data/destination.json";
import { useState } from "react";

const Destination = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(data.destinations[0]);

  return (
    <section className="destination">
      <div className="container">
        <h2 className="destination__title title">
          <b>01</b> Pick your destination
        </h2>
      </div>
      <div className="destination__container container--mini">
        <img
          className="destination__img"
          src={selectedPlanet.images.png}
          alt="moon"
          srcSet={selectedPlanet.images.png2x}
          width={445}
          height={445}
        />
        <div className="destination__content">
          <ul className="destination__tabs list">
            {data.destinations.map(destination => (
              <li
                className={`destination__tab ${selectedPlanet.name === destination.name ? "active" : ""}`}
                key={destination.name}
                onClick={() => setSelectedPlanet(destination)}
              >
                {destination.name}
              </li>
            ))}
          </ul>
          <h3 className="destination__planet-name">{selectedPlanet.name}</h3>
          <p className="destination__desc">{selectedPlanet.description}</p>
          <div className="destination__divider" />
          <div className="destination__planet-info info-planet-destination">
            <div className="info-planet-destination__wrapper">
              <h4 className="info__planet-destination__title">avg. distance</h4>
              <p className="info-planet-destination__value">{selectedPlanet.distance}</p>
            </div>
            <div className="info-planet-destination__wrapper">
              <h4 className="info__planet-destination__title">est. travel time</h4>
              <p className="info-planet-destination__value">{selectedPlanet.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
