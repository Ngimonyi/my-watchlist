import propTypes from 'prop-types';

const WatchItem = ({movieObject}) => {
    return (
        <article>
            <img
                src={movieObject.imagePath}
                alt={movieObject.title}
            />
            <h3>{movieObject.title}</h3>
            <button>
                {
                    movieObject.isFavorite ?
                        'Makni iz favorita'
                        :
                        'Dodaj u favorite'
                }
            </button>
        </article>
    )
}

export default WatchItem;


WatchItem.propTypes = {
    movieObject: propTypes.object
}