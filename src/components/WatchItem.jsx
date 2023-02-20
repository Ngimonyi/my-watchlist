import '../styles/watch-item.scss';
import propTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import syncLocalStorage from '../functions/syncLocalStorage';
import { useContext } from 'react';
import { NotificationContext } from '../App';

const WatchItem = ({movieObject, showRating, isSearchResult, isLandingItem, setLocalMovies}) => {
    // const [isFavorite, setIsFavorite] = useState(movieObject.isFavorite);

    // search rezultati se ne bi smjeli moći dodavati u favorite, već samo lokalno spremiti
    // samo lokalno spremljeni filmovi se mogu dodavati u favorite
    // filmovi koje želimo dodati, spremamo u localStorage

    const {notification, setNotification} = useContext(NotificationContext);

    const handleMovieAdd = () => {
        syncLocalStorage('add', movieObject);
        !notification && setNotification(true);
    }

    const handleMovieRemove = () => {
        const localMovies = syncLocalStorage('remove', movieObject);
        setLocalMovies(localMovies);
    }

    const handleMovieChange = () => {
        const localMovies = syncLocalStorage('change', movieObject);

        console.log('localMovies', localMovies);
        setLocalMovies(localMovies);
    }

    return (
        <div className="item-wrap">
            <article className='watch-item'>
                <div className="img-wrap" style={{fontSize: '24px', backgroundImage: `url(${movieObject.imagePath})`}}>
                    {/* <img
                        src={movieObject.imagePath}
                        alt={movieObject.title}
                    />      */}
                </div>

                <h3>{movieObject.title}</h3>

                {
                    showRating && <button>Show rating</button>
                }

                {
                    isSearchResult ? 
                    <button
                        onClick={handleMovieAdd}
                    >
                        Add movie
                    </button>
                    :
                    <button
                        onClick={handleMovieChange}
                        className='favorite-button'
                    >
                        {
                            movieObject.isFavorite ?
                                '💙'
                                :
                                '♡'
                        }
                    </button>
                }

                {
                    isLandingItem && 
                    <button
                        onClick={handleMovieRemove}
                    >
                        Obriši film
                    </button>
                }
            </article>            
        </div>

    )
}

export default WatchItem;


WatchItem.propTypes = {
    movieObject: propTypes.object
}