import { useState } from "react";
import { Helmet } from "react-helmet";
import useParams from "../../helpers/useParams";
import { useSearchParams } from "react-router-dom";

import crew from "../../data/crew.json";
import "./Crew.scss";

const Crew = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCrew, setSelectedCrew] = useState(selected || crew[0]);
  const selected = crew.find(item => item.name === searchParams.get("name"));

  const handleSetCrew = crew => {
    setSearchParams(useParams(searchParams, "name", crew.name));
    setSelectedCrew(crew);
  };

  return (
    <main>
      <section className="crew slide-up">
        <Helmet>
          <title>Space Tourism | {selectedCrew.name}</title>
        </Helmet>

        <div className="container">
          <h2 className="crew__title title">
            <b>02</b> Meet your crew
          </h2>
          <div className="container--mini crew__container">
            {crew.map(item => (
              <div
                key={item.role}
                className={`crew__content ${
                  selectedCrew.name === item.name ? "fade-in" : "visually-hidden"
                }`}
              >
                <h2 className="crew__role">{selectedCrew.role}</h2>
                <h3 className="crew__name">{selectedCrew.name}</h3>
                <p className="crew__bio">{selectedCrew.bio}</p>
                <ul className="crew__paginations list">
                  {crew.map(item => (
                    <li
                      className={`crew__pagination ${
                        selectedCrew.name === item.name ? "active" : ""
                      }`}
                      key={item.name}
                      onClick={() => handleSetCrew(item)}
                    />
                  ))}
                </ul>
              </div>
            ))}
            {crew.map(item => (
              <img
                key={item.name}
                className={`crew__img ${
                  selectedCrew.name === item.name ? "slide-up" : "visually-hidden"
                }`}
                src={item.images.png}
                alt={item.name}
                srcSet={`${item.images.png} 1x, ${item.images.png2x} 2x`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Crew;
