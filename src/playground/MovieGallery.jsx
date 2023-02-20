import { useState } from 'react';
import WatchItem from '../components/WatchItem';
import movies from '../data/movies.json';

const MovieGallery = () => {
    // napravit state za index i dati mu inicjalnu vrijednost
    const [index, setIndex] = useState(0);

    const handleIndex = (action) => {
        // incremenet ili decrement
        if(action === 'increment') {
            setIndex(index + 1);
        } else if (action == 'decrement') {
            setIndex(index - 1);
        }
    }

    return (
        <>
            <WatchItem
                movieObject={movies[index]}
            />
            <div>
                <button
                    onClick={() => handleIndex('decrement')}
                    disabled={index === 0}
                >
                    Prethodni
                </button>

                {/* osposobiti increment */}
                <button
                    onClick={() => handleIndex('increment')}
                    disabled={index === movies.length - 1}
                >
                    Sljedeći
                </button>
            </div>
        </>
    )
}

export default MovieGallery