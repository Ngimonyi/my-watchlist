import { useState } from "react";
import axios from 'axios';
import WatchItem from "./WatchItem";

const Search = () => {
    // napraviti state koji prati vrijednost search inputa
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchMoviesSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);

        axios.get(`https://www.omdbapi.com/?apikey=6fe1e02&s=${inputValue}`)
            .then((response) => {
                console.log(response.data.Search);
                // 
                setSearchResults(response.data.Search);
            })

    }

    

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Srč</h1>
            <div>{searchResults?.length}</div>

            {
                searchResults?.map((movieItem) => {
                    const helperObject = {
                        imagePath: movieItem.Poster,
                        title: movieItem.Title
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
        </div>
    )
}

export default Search