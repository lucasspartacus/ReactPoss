import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

export function Header(params) {
    const Totlamovies = useSelector(state =>state.favorito.movies.length);
    return (
        <>
            <h1>Aplicação de Filmes</h1>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/Movies"}>Movies</Link></li>
                <li><Link to={"/Favoritos"}>Favoritos ({Totlamovies})</Link></li>
            </ul>
        </>
    )
}