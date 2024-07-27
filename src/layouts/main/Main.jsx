import cx from "classnames";
import { Outlet, useLocation } from "react-router-dom";

import setBg from "../../helpers/setBg";
import { Header } from "../../components";

import "./Main.scss";

const Main = () => {
  const { pathname } = useLocation();

  return (
    <div className={cx("bg", setBg(pathname))}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
