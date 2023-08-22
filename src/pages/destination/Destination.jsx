// styles
import "./Destination.scss";

import destinations from "../../data/destination.json";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useParams from "../../helpers/useParams";

const Destination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = destinations.find(item => item.name === searchParams.get("name"));
  const [selectedPlanet, setSelectedPlanet] = useState(selected || destinations[0]);

  const setPlanetDestination = planet => {
    setSearchParams(useParams(searchParams, "name", planet.name));
    setSelectedPlanet(planet);
  };

  return (
    <section className="destination slide-up">
      <div className="container">
        <h2 className="destination__title title">
          <b>01</b> Pick your destination
        </h2>
      </div>
      <div className="destination__container container--mini">
        {destinations.map(destination => (
          <img
            className={`destination__img ${selectedPlanet.name === destination.name ? "slide-up" : "visually-hidden"}`}
            src={destination.images.png}
            alt={destination.name}
            srcSet={destination.images.png2x}
            width={445}
            height={445}
            key={destination.name}
          />
        ))}
        {destinations.map(destination => (
          <div
            className={`destination__content ${selectedPlanet.name === destination.name ? "fade-in" : "visually-hidden"}`}
            key={destination.travel}
          >
            <ul className="destination__tabs list">
              {destinations.map(destination => (
                <li
                  className={`destination__tab ${selectedPlanet.name === destination.name ? "active" : ""}`}
                  key={destination.name}
                  onClick={() => setPlanetDestination(destination)}
                >
                  {destination.name}
                </li>
              ))}
            </ul>
            <h3 className="destination__planet-name">{destination.name}</h3>
            <p className="destination__desc">{destination.description}</p>
            <div className="destination__divider" />
            <div className="destination__planet-info info-planet-destination">
              <div className="info-planet-destination__wrapper">
                <h4 className="info__planet-destination__title">avg. distance</h4>
                <p className="info-planet-destination__value">{destination.distance}</p>
              </div>
              <div className="info-planet-destination__wrapper">
                <h4 className="info__planet-destination__title">est. travel time</h4>
                <p className="info-planet-destination__value">{destination.travel}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destination;
