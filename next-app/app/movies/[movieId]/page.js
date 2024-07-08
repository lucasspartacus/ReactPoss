import { getMovie, getPopularMovies } from "@/services/movies.services";
import styles from "./MovieDetail.module.css";
 
export async function getStaticPaths() { //Tem que ser esse nome na função por conta do next
   const { data } = await getPopularMovies();
   const paths = data.results.map((movie)=>({params:{movieId: `${movie.id}`}}));

    return{
        paths,
        fallback: true
    }
}


export default async function MovieDetail({params}) {
    const movie = await getMovie(params.movieId);

    return(
        <section className={styles.detail}>
            <figure className={styles.imgContainer}>
                {movie.data.poster_path && (
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.data.poster_path}`} alt=""/>
                )}
            </figure>
    
            <h1>{movie.data.title}</h1>
            <p>{movie.data.overview}</p>
        </section>
    );

}