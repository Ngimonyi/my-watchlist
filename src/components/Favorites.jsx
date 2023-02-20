import WatchItem from "./WatchItem";
import movies from '../data/movies.json';
import { useEffect } from "react";
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
    const filteredMovies = movies.filter((movie) => movie.isFavorite)
    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log('Komponenta Favorites se mountala');

        return () => console.log('Komponenta Favorites umrla');
    }, [])

    useEffect(() => {
        console.log('Number se promijenio');
    }, [number])

    return (
        <div style={moviesWrap}>
            {
                filteredMovies.map((movie) => {
                    return (
                        <WatchItem
                            movieObject={movie}
                            director="jbfkjbefjkb"
                            key={movie.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default Favorites