import WatchItem from "./WatchItem";
import movies from '../data/movies.json';

const Landing = () => {
    const moviesWrap = {
        display: 'flex',
        flexWrap: 'wrap',
        width: 768,
        maxWidth: '100%',
        margin: '0 auto',
        padding: '54px 0'
    }

    return (
        <div style={moviesWrap}>
            {
                movies.map((movie) => {
                    return (
                        <WatchItem
                            movieObject={movie}
                            director="jbfkjbefjkb"
                            key={movie.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default Landing