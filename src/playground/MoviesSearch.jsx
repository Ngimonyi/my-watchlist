import movies from '../data/movies.json'
import Movie from '../components/WatchItem'
import WatchItem from '../components/WatchItem'
import { useState } from 'react'

const MoviesSearch = () => {
    const [filteredMovies, setFilteredMovies] = useState(movies)

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const filtered = movies.filter(movie => movie.title.toLowerCase().includes(inputValue.toLowerCase()))

        setFilteredMovies(filtered);
    }
    
    return (
        <>
            <input
                type="text"
                onChange={handleChange}
            />
            <br /> <br />
            {
                filteredMovies.map(movie => {
                    return (
                        <WatchItem
                            movieObject={movie}
                        />                        
                    )

                })
            }

        </>
    )
}

export default MoviesSearch