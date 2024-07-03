import { createBrowserRouter } from "react-router-dom";
import Goal from "../pages/Goal/Goal";
import Home from "../pages/Home/Home";
import LatestInBNLP from "../pages/LatestInBNLP/LatestInBNLP";
import Publications from "../pages/Publications/Publications";
import Team from "../pages/Team/Team";
import Root from "../layout/Root";
import OngoingProjects from "../pages/OngoingProjects/OngoingProjects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/goal",
        element: <Goal />,
      },
      {
        path: "/latest",
        element: <LatestInBNLP />,
      },
      {
        path: "/publications",
        element: <Publications />,
      },
      {
        path: "/ongoing-projects",
        element: <OngoingProjects />,
      },
      {
        path: "/team",
        element: <Team />,
      },
    ],
  },
]);

export default router;
