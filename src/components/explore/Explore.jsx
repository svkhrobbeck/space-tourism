// styles
import { Link } from "react-router-dom";
import "./Explore.scss";

const Explore = () => {
  return (
    <section className="explore">
      <div className="container explore__container">
        <div className="explore__content">
          <h2 className="explore__title">so, you want to travel to</h2>
          <h3 className="explore__subtitle">space</h3>
          <p className="explore__desc">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of
            it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <Link className="explore__link" to={"/destination"}>
          explore
        </Link>
      </div>
    </section>
  );
};

export default Explore;
