import { useState } from "react";
import cx from "classnames";
import { useNavigate } from "react-router-dom";

import destinations from "../../data/destination.json";

import "./Destination.scss";
import { Seo } from "../../layouts/seo";

const Destination = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(destinations[0]);

  const setPlanetDestination = planet => {
    navigate(`?name=${planet.name}`);
    setSelected(planet);
  };

  return (
    <Seo title={`Space Tourism | ${selected.name}`}>
      <main>
        <section className="destination slide-up">
          <div className="container">
            <h2 className="destination__title title">
              <b>01</b> Pick your destination
            </h2>
          </div>
          <div className="destination__container container--mini">
            {destinations.map(destination => (
              <img
                className={cx("destination__img", selected.name === destination.name ? "slide-up" : "sr-only")}
                src={destination.images.png}
                alt={destination.name}
                srcSet={`${destination.images.png} 1x, ${destination.images.png2x} 2x`}
                width={445}
                height={445}
                key={destination.name}
              />
            ))}
            {destinations.map(destination => (
              <div
                className={cx("destination__content", selected.name === destination.name ? "fade-in" : "sr-only")}
                key={destination.travel}
              >
                <ul className="destination__tabs list">
                  {destinations.map(destination => (
                    <li
                      className={cx("destination__tab", selected.name === destination.name && "active")}
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
                    <h4 className="info-planet-destination__title">avg. distance</h4>
                    <p className="info-planet-destination__value">{destination.distance}</p>
                  </div>
                  <div className="info-planet-destination__wrapper">
                    <h4 className="info-planet-destination__title">est. travel time</h4>
                    <p className="info-planet-destination__value">{destination.travel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Seo>
  );
};

export default Destination;
