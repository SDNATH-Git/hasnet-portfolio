import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Layout/Homelayout";
import Home from "../Home/Home";
import Error from "../components/Error";
import Designation from "../Pages/Designation";
import Skills from "../Pages/Skills";
import ElectionPage from "../Pages/ElectionPage";
import { elements } from "chart.js";
import ElectionSection from "../Pages/ElectionSection";
import Gallery1 from "../Pages/Gallery1";
import Gallery2 from "../Pages/Gallery2";
import Gallery3 from "../Pages/Gallery3";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/skills",
                element: <Skills></Skills>
            },
            {
                path: "/gallery1",
                element: <Gallery1></Gallery1>
            },
            {
                path: "/gallery2",
                element: <Gallery2></Gallery2>
            },
            {
                path: "/gallery3",
                element: <Gallery3></Gallery3>
            },

            {
                path: "/electionSection",
                element: <ElectionSection></ElectionSection>,
            },
            {
                path: "/electionPage",
                element: <ElectionPage></ElectionPage>
            },
        ],
    },
]);

export default router;











