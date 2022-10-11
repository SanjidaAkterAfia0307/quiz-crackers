import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import Main from "../layout/Main";


export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {path:"/",element:<Home></Home>},
            {
                path:"/topics",
                loader:()=>fetch("https://openapi.programming-hero.com/api/quiz"),
                element:<Topics></Topics>
            },
            {
                path:"/topic/:topicId",
                loader:({params})=>fetch(` https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
                element:<Quiz></Quiz>
            },
            {path:"/statistics",element:<Statistics></Statistics>},
            {path:"/blog",element:<Blog></Blog>},
        ]
    }
])