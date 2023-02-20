import WatchItem from "./WatchItem";
import { useState } from "react";

const Favorites = () => {
    const moviesWrap = {
        display: 'flex',
        flexWrap: 'wrap',
        width: 768,
        maxWidth: '100%',
        margin: '0 auto',
        padding: '54px 0'
    }

    const [localMovies, setLocalMovies] = useState(JSON.parse(localStorage.getItem('movies')) || []);
    const filteredMovies = localMovies.filter(movie => movie.isFavorite)

    return (
        <div style={moviesWrap}>
            {
                filteredMovies.map((movie) => {
                    return (
                        <WatchItem
                            movieObject={movie}
                            director="jbfkjbefjkb"
                            key={movie.id}
                            setLocalMovies={setLocalMovies}
                        />
                    )
                })
            }
        </div>
    )
}

export default Favorites