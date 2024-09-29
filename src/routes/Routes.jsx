import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Statistics from "../components/Statistics/Statistics";
import Blog from "../components/Blog/Blog";
import AppliedJobs from "../components/AppliedJobs/AppliedJobs";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
