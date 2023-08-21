// styles
import "./MainLayout.scss";

import Router from "../router/Router";
import { Header } from "../components";
import { useLocation } from "react-router-dom";
import setBg from "../helpers/setBg";

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className={`bg ${setBg(pathname)}`}>
      <Header />
      <main className="main-content">
        <Router />
      </main>
    </div>
  );
};

export default MainLayout;
