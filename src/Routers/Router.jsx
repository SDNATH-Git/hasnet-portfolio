import { createBrowserRouter } from "react-router-dom";
import Homelayout from "../Layout/Homelayout";
import Home from "../Home/Home";
import Error from "../components/Error";
import Designation from "../Pages/Designation";
import Projects from "../Pages/Projects";
import ProjectDetails from "../Pages/ProjectDetails";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Education from "../Pages/Education";
import Contact from "../Pages/Contacts";
import ElectionPage from "../Pages/ElectionPage";
import { elements } from "chart.js";
import ElectionSection from "../Pages/ElectionSection";

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
                path: "designation",
                element: <Designation />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "skill",
                element: <Skills />,
            },
            {
                path: "education",
                element: <Education />,
            },
            {
                path: "project",
                element: <Projects />,
            },
            {
                path: "project/:id",
                element: <ProjectDetails />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "/",
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











