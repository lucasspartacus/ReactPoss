import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function RootLayout(params) {
   return(
    <>
        <Header/>
        <Outlet/>
    </>
   )
}  