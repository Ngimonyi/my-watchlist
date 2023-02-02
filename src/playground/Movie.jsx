const Movie = ({title, image}) => {

    return (
        <figure>
            <img src={image} alt="" />
            <figcaption>{title}</figcaption>
        </figure>
    )
}

export default Movie