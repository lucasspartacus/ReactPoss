import { Favoritos } from "./views/Favoritos";
import { RootLayout } from "./views/RootLayout";
import {createBrowserRouter} from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children:[
            {
                path: "/",
                //element: <Home/>,
                lazy: async () =>{
                    const { Home } = await import("./views/Home");

                    return{
                        Component: Home
                    }
                }  
            },
            {
                path: "/movies",
                //element: <Movies/>, 
                lazy: async () =>{
                    const { Movies } = await import("./views/Movies");

                    return{
                        Component: Movies
                    }
                }  
            },
            {
                path: "/movies/:id", //Passando de forma dinamica
                //element: <MovieDetail/> 
                lazy: async () =>{
                    const { MovieDetail } = await import("./views/MovieDetail");

                    return{
                        Component: MovieDetail
                    }
                }  
            },
            {
                path: "/favoritos", //Passando de forma dinamica
                element: <Favoritos/> 
            }
        ]
    }
])