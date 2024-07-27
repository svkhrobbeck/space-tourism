import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const { Main } = await import("../layouts/main");
      return { Component: Main };
    },
    children: [
      {
        index: true,
        async lazy() {
          const { Home } = await import("../pages/home");
          return { Component: Home };
        },
      },
      {
        path: "crew",
        async lazy() {
          const { Crew } = await import("../pages/crew");
          return { Component: Crew };
        },
      },
      {
        path: "technology",
        async lazy() {
          const { Technology } = await import("../pages/technology");
          return { Component: Technology };
        },
      },
      {
        path: "destination",
        async lazy() {
          const { Destination } = await import("../pages/destination");
          return { Component: Destination };
        },
      },
    ],
  },
]);

export default router;
