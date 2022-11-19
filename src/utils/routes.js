import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import Root from "../components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

export default router;
