import propTypes from 'prop-types';

const Movie = ({title, image}) => {

    return (
        <figure>
            <img src={image} alt="" />
            <figcaption>{title}</figcaption>
        </figure>
    )
}

export default Movie

// zadatak - tipizirati(tipovati) propse komponente
Movie.propTypes = {
    title: propTypes.string,
    image: propTypes.string
}