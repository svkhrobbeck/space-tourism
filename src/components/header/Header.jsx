// styles
import "./Header.scss";

import { Link, NavLink } from "react-router-dom";
import { sitenavLinks } from "../../helpers/constants";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSitenav = () => setIsOpen(false);
  const toggleSitenav = () => setIsOpen(p => !p);

  return (
    <header className="site-header">
      <div className="site-header__container">
        <Link className="site-header__logo logo" to="/" onClick={closeSitenav}>
          <img
            className="logo__img"
            src="/logo.svg"
            alt="Space tourism logo"
            width={48}
            height={48}
          />
        </Link>
        <button
          className={`button site-header__toggler ${isOpen ? "site-header__toggler--open" : ""}`}
          onClick={toggleSitenav}
        >
          <span className="site-header__toggler-inner"></span>
          <span className="site-header__toggler-inner"></span>
          <span className="site-header__toggler-inner"></span>
        </button>
        <nav className={`site-header__sitenav sitenav ${isOpen ? "sitenav--open" : ""}`}>
          <ul className="sitenav__list list">
            {sitenavLinks.map(link => (
              <li className="sitenav__item" key={link.id} onClick={closeSitenav}>
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
