import { Fragment, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import technology from "../../data/technology.json";
import useParams from "../../helpers/useParams";
import "./Technology.scss";

const Technology = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = technology.find(item => item.name === searchParams.get("name"));
  const [selectedTechnology, setSelectedTechnology] = useState(selected || technology[0]);

  const handleSetTechnology = tech => {
    setSearchParams(useParams(searchParams, "name", tech.name));
    setSelectedTechnology(tech);
  };

  return (
    <main>
      <section className="technology slide-up">
        <Helmet>
          <title>Space Tourism | {selectedTechnology.name}</title>
        </Helmet>

        <div className="container">
          <h2 className="technology__title title">
            <b>03</b> SPACE LAUNCH 101
          </h2>
          <div className="technology__container">
            <div className="technology__inner">
              <ul className="technology__tabs list">
                {technology.map((item, idx) => (
                  <li
                    className={`technology__tab ${
                      selectedTechnology.name === item.name ? "active" : ""
                    }`}
                    key={item.name}
                    onClick={() => handleSetTechnology(item)}
                  >
                    {idx + 1}
                  </li>
                ))}
              </ul>
              {technology.map(item => (
                <div
                  className={`technology__content ${
                    selectedTechnology.name === item.name ? "fade" : "visually-hidden"
                  }`}
                  key={item.description}
                >
                  <span className="technology__terminology">the temrinology…</span>
                  <h2 className="technology__name">{selectedTechnology.name}</h2>
                  <p className="technology__desc">{selectedTechnology.description}</p>
                </div>
              ))}
            </div>
            {technology.map(item => (
              <Fragment key={item.name}>
                <img
                  className={`technology__img technology__img--portrait ${
                    selectedTechnology.name === item.name ? "fade-in" : "visually-hidden"
                  }`}
                  src={item.images.portrait}
                  alt={item.name}
                  srcSet={`${item.images.portrait} 1x, ${item.images.portrait2x} 2x`}
                />
                <img
                  className={`technology__img technology__img--landscape ${
                    selectedTechnology.name === item.name ? "slide-up" : "visually-hidden"
                  }`}
                  src={item.images.landscape}
                  alt={item.name}
                  srcSet={`${item.images.landscape} 1x, ${item.images.landscape2x} 2x`}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Technology;
