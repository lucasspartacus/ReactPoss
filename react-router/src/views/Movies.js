import { useMovies } from "../hooks/useMovies";
import { MovieItem } from "../components/MovieItem.js";
import styles from "./Movies.module.css";

export function Movies() {
    const movies = useMovies();

    return (
        <section>
            <h1>Filmes populares</h1>
            
            <div className={styles.moviesList}>
                {movies.map((movie) =>(

                    <MovieItem key={movie.id} movie={movie} />
                )
                )}
            </div>
        </section>

    );
}

