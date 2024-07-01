import { Home } from "./views/Home";
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
                path: "/Movies",
                element: <Movies/>, 
            }
        ]
    }
])