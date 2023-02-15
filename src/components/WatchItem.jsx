import '../styles/watch-item.scss';
import propTypes from 'prop-types';
import { useState } from 'react';

const WatchItem = ({movieObject, showRating}) => {
    const [isFavorite, setIsFavorite] = useState(movieObject.isFavorite);
    
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
            </article>            
        </div>

    )
}

export default WatchItem;


WatchItem.propTypes = {
    movieObject: propTypes.object
}