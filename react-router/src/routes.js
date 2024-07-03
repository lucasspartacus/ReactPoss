import { Home } from "./views/Home";
import { MovieDetail } from "./views/MovieDetail";
import { Movies } from "./views/Movies";
import { RootLayout } from "./views/RootLayout";
import {createBrowserRouter} from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children:[
            {
                path: "/",
                element: <Home/>,  
            },
            {
                path: "/movies",
                element: <Movies/>, 
            },
            {
                path: "/movies/:id", //Passando de forma dinamica
                element: <MovieDetail/> 
            }
        ]
    }
])