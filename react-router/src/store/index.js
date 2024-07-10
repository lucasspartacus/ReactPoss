import { configureStore } from "@reduxjs/toolkit";
import favorito from "./redux/favorito";

export default configureStore({
    reducer:{
        favorito,
    },
})