import { useMovies } from "../hooks/useMovies";
import { MovieItem } from "../components/MovieItem.js";
import styles from "./Movies.module.css";
import { queryClient } from "../App.js";
import { getMovie } from "../services/movies.services.js";

export function Movies() {
    const {data: movies, isLoading} = useMovies();

    async function prefetchMovie(movieId) {
        console.log(movieId);
        await queryClient.prefetchQuery({
            queryKey: ["movies", movieId],
            queryFn: async () => {
                const {data} = await getMovie(movieId);
                return data;
            }
        })
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <h1>Filmes populares</h1>
            
            <div className={styles.moviesList}>
                {movies.map((movie) =>(
                    <div key={movie.id} onMouseEnter={async() => await prefetchMovie(movie.id)}>
                        <MovieItem  movie={movie} />
                    </div>
                  
                )
                )}
            </div>
        </section>

    );
}

