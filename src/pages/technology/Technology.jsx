// styles
import "./Technology.scss";

import { technology } from "../../data/technology.json";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import useParams from "../../helpers/useParams";

const Technology = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = technology.find(item => item.name === searchParams.get("name"));
  const [selectedTechnology, setSelectedTechnology] = useState(selected || technology[0]);

  const handleSetTechnology = tech => {
    setSearchParams(useParams(searchParams, "name", tech.name));
    setSelectedTechnology(tech);
  };

  return (
    <section className="technology">
      <div className="container">
        <h2 className="technology__title title">
          <b>03</b> SPACE LAUNCH 101
        </h2>
        <div className="technology__container">
          <div className="technology__inner">
            <ul className="technology__tabs list">
              {technology.map((item, idx) => (
                <li
                  className={`technology__tab ${selectedTechnology.name === item.name ? "active" : ""}`}
                  key={item.name}
                  onClick={() => handleSetTechnology(item)}
                >
                  {idx + 1}
                </li>
              ))}
            </ul>
            <div className="technology__content">
              <span className="technology__terminology">the temrinology…</span>
              <h2 className="technology__name">{selectedTechnology.name}</h2>
              <p className="technology__desc">{selectedTechnology.description}</p>
            </div>
          </div>
          <img
            className="technology__img technology__img--portrait"
            src={selectedTechnology.images.portrait}
            alt={selectedTechnology.name}
            srcSet={selectedTechnology.images.portrait2x}
          />
          <img
            className="technology__img technology__img--landscape"
            src={selectedTechnology.images.landscape}
            alt={selectedTechnology.name}
            srcSet={selectedTechnology.images.landscape2x}
          />
        </div>
      </div>
    </section>
  );
};

export default Technology;
