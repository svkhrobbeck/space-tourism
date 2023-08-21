// styles
import "./Header.scss";

import { Link, NavLink } from "react-router-dom";
import { sitenavLinks } from "../../helpers/constants";

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__container">
        <Link className="site-header__logo logo" to="/">
          <img className="logo__img" src="/logo.svg" alt="Space tourism logo" width={48} height={48} />
        </Link>
        <nav className="site-header__sitenav sitenav">
          <ul className="sitenav__list list">
            {sitenavLinks.map(link => (
              <li className="sitenav__item" key={link.id}>
                <NavLink className="sitenav__link link" to={link.to}>
                  {" "}
                  <b>{link.id}</b> {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
