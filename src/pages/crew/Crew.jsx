import { useState } from "react";
import cx from "classnames";
import { useNavigate } from "react-router-dom";

import crew from "../../data/crew.json";

import "./Crew.scss";
import { Seo } from "../../layouts/seo";

const Crew = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(crew[0]);

  const handleSetCrew = crew => {
    navigate(`?name=${crew.name}`);
    setSelected(crew);
  };

  return (
    <Seo title={`Space Tourism | ${selected.name}`}>
      <main>
        <section className="crew slide-up">
          <div className="container">
            <h2 className="crew__title title">
              <b>02</b> Meet your crew
            </h2>
            <div className="container--mini crew__container">
              {crew.map(item => (
                <div
                  key={item.role}
                  className={cx("crew__content", selected.name === item.name ? "fade-in" : "sr-only")}
                >
                  <h2 className="crew__role">{selected.role}</h2>
                  <h3 className="crew__name">{selected.name}</h3>
                  <p className="crew__bio">{selected.bio}</p>
                  <ul className="crew__paginations list">
                    {crew.map(item => (
                      <li
                        className={cx("crew__pagination", selected.name === item.name && "active")}
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
                  className={cx("crew__img", selected.name === item.name ? "slide-up" : "sr-only")}
                  src={item.images.png}
                  alt={item.name}
                  srcSet={`${item.images.png} 1x, ${item.images.png2x} 2x`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Seo>
  );
};

export default Crew;
