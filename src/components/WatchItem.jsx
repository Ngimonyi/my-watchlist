import '../styles/watch-item.scss';
import propTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

const WatchItem = ({movieObject, showRating, isSearchResult}) => {
    const [isFavorite, setIsFavorite] = useState(movieObject.isFavorite);

    // search rezultati se ne bi smjeli moći dodavati u favorite, već samo lokalno spremiti
    // samo lokalno spremljeni filmovi se mogu dodavati u favorite
    // filmovi koje želimo dodati, spremamo u localStorage

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
                    <button>Add movie</button>
                    :
                    <button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className='favorite-button'
                    >
                        {
                            isFavorite ?
                                '💙'
                                :
                                '♡'
                        }
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