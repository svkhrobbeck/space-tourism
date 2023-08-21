import Router from "../router/Router";
import { Footer, Header } from "../components";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="main-layout">
        <Router />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
