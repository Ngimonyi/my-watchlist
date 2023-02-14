import '../styles/watch-item.scss';
import propTypes from 'prop-types';
import { useState } from 'react';

const WatchItem = ({movieObject, showRating}) => {
    console.log('movieObject.isFavorite', movieObject.isFavorite);
    const [isFavorite, setIsFavorite] = useState(movieObject.isFavorite);

    return (
        <div className="item-wrap">
            <article className='watch-item'>
                <img
                    src={movieObject.imagePath}
                    alt={movieObject.title}
                />
                <h3>{movieObject.title}</h3>

                {
                    showRating && <button>Show rating</button>
                }

                <button
                    onClick={() => setIsFavorite(!isFavorite)}
                >
                    {
                        isFavorite ?
                            'Makni iz favorita'
                            :
                            'Dodaj u favorite'
                    }
                </button>
            </article>            
        </div>

    )
}

export default WatchItem;


WatchItem.propTypes = {
    movieObject: propTypes.object
}