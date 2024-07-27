import { Fragment, useState } from "react";
import cx from "classnames";
import { useNavigate } from "react-router-dom";

import technology from "../../data/technology.json";

import "./Technology.scss";
import { Seo } from "../../layouts/seo";

const Technology = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(technology[0]);

  const handleSetTechnology = tech => {
    navigate(`?name=${tech.name}`);
    setSelected(tech);
  };

  return (
    <Seo title={`Space Tourism | ${selected.name}`}>
      <main>
        <section className="technology slide-up">
          <div className="container">
            <h2 className="technology__title title">
              <b>03</b> SPACE LAUNCH 101
            </h2>
            <div className="technology__container">
              <div className="technology__inner">
                <ul className="technology__tabs list">
                  {technology.map((item, idx) => (
                    <li
                      className={cx("technology__tab", selected.name === item.name && "active")}
                      key={item.name}
                      onClick={() => handleSetTechnology(item)}
                    >
                      {idx + 1}
                    </li>
                  ))}
                </ul>
                {technology.map(item => (
                  <div
                    className={cx("technology__content", selected.name === item.name ? "fade" : "sr-only")}
                    key={item.description}
                  >
                    <span className="technology__terminology">the temrinology…</span>
                    <h2 className="technology__name">{selected.name}</h2>
                    <p className="technology__desc">{selected.description}</p>
                  </div>
                ))}
              </div>
              {technology.map(item => (
                <Fragment key={item.name}>
                  <img
                    className={cx(
                      "technology__img technology__img--portrait",
                      selected.name === item.name ? "fade-in" : "sr-only",
                    )}
                    src={item.images.portrait}
                    alt={item.name}
                    srcSet={`${item.images.portrait} 1x, ${item.images.portrait2x} 2x`}
                  />
                  <img
                    className={cx(
                      "technology__img technology__img--landscape",
                      selected.name === item.name ? "slide-up" : "sr-only",
                    )}
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
    </Seo>
  );
};

export default Technology;
