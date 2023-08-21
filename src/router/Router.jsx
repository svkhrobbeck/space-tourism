import { Route, Routes } from "react-router-dom";
import { Crew, Destination, Home, Technology } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/destination" element={<Destination />} />
    </Routes>
  );
};

export default Router;
