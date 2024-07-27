import { useState } from "react";
import cx from "classnames";
import { Link, NavLink } from "react-router-dom";

import { navLinks } from "../../helpers/constants";

import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSitenav = () => setIsOpen(false);
  const toggleSitenav = () => setIsOpen(p => !p);

  return (
    <header className="site-header">
      <div className="site-header__container">
        <Link className="site-header__logo logo" to="/" onClick={closeSitenav}>
          <img className="logo__img" src="/logo.svg" alt="Space tourism logo" width={48} height={48} />
        </Link>
        <button
          className={cx("button site-header__toggler", isOpen && "site-header__toggler--open")}
          onClick={toggleSitenav}
        >
          <span className="site-header__toggler-inner" />
          <span className="site-header__toggler-inner" />
          <span className="site-header__toggler-inner" />
        </button>
        <nav className={cx("site-header__sitenav sitenav", isOpen && "sitenav--open")}>
          <ul className="sitenav__list list">
            {navLinks.map((link, idx) => (
              <li className="sitenav__item" key={idx} onClick={closeSitenav}>
                <NavLink className="sitenav__link link" to={link.to}>
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
