import WatchItem from "./WatchItem";
import movies from '../data/movies.json';

const Main = () => {
    return(
        <>
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
        </>
    )
}
export default Main;