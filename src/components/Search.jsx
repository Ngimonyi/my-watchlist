import { useState } from "react";
import axios from 'axios';
import WatchItem from "./WatchItem";
import loader from '../images/loader.svg';

const Search = () => {
    // napraviti state koji prati vrijednost search inputa
    const endpoint = 'https://www.omdbapi.com/?apikey=6fe1e02';
    const [inputValue, setInputValue] = useState('batman');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const searchMoviesSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);

        console.log('pokreni loader');
        setIsLoading(true);
        fetchMovies();
        
    }

    const fetchMovies = async () => {
        await axios.get(`${endpoint}&s=${inputValue}`)
            .then((response) => {
                // console.log(response.data.Search);
                console.log('dobio sam rezultate');
                // 
                setSearchResults(response.data.Search || []);
            })

        console.log('zaustavi loader');
        setIsLoading(false);
    }

    

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Srč</h1>

            <div>
                <form onSubmit={searchMoviesSubmit}>
                    <input
                        onChange={(e) => setInputValue(e.target.value)}
                        type="text"
                        value={inputValue}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>

            {/* <img src={loader} /> */}

            {isLoading && <img src={loader} /> }

            {
                searchResults?.map((movieItem) => {
                    const helperObject = {
                        imagePath: movieItem.Poster,
                        title: movieItem.Title,
                        id: movieItem.imdbID
                    }
                    return (
                        <WatchItem
                            movieObject={helperObject}
                            isSearchResult={true}
                            key={movieItem.imdbID}
                        />
                    )
                })
            }
        </div>
    )
}

export default Search