import { Link } from "react-router-dom";

export function Header(params) {
    return (
        <>
            <h1>Aplicação de Filmes</h1>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/Movies"}>Movies</Link></li>
            </ul>
        </>
    )
}