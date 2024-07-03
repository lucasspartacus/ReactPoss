import axios from 'axios';

export const moviesApiis = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTA4NTRmYjRhNDBkY2I1NGY1MTcwM2M5NzczMmJhNyIsIm5iZiI6MTcxOTgzODY3NS45NDYwMzgsInN1YiI6IjY2ODJhNTk2YmNlOGE3OGVjYmM4M2IwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l1nTipj5TjvkipsqJhCNBg36SMHDIKGdZLvx5Uew9I8`
    }
});