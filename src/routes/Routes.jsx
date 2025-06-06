import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Project1 from "../pages/home/detailspages/Project1";
import Project2 from "../pages/home/detailspages/Project2";
import Project3 from "../pages/home/detailspages/Project3";
import Demo from "../pages/demo/demo";
import ProjectDetails from "../pages/projectDetails/ProjectDetails";



const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/bistroboss',
                element:<Project1></Project1>
            },
            {
                path:'/learn-nest',
                element:<Project2></Project2>
            },
            {
                path:'/group-study',
                element:<Project3></Project3>
            },
            {
                path:'/demo',
                element:<Demo></Demo>
            },
            {
                path:'/project-details/:id',
                element:<ProjectDetails></ProjectDetails>
            }
        ]  
    }
])

export default routes;