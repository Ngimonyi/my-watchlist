import WatchItem from "./WatchItem";
import movies from '../data/movies.json';

const Main = () => {
    // event handler
    const logMessage = () => {
        console.log('Klikćem...');
    }
    

    return(
        <>
            <button onClick={logMessage}>Klikći me!</button>


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