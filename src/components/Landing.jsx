import WatchItem from "./WatchItem";
import movies from '../data/movies.json';
import { useContext, useState } from "react";
import { useEffect } from "react";
import { NotificationContext } from "../App";

const Landing = () => {
    const [localMovies, setLocalMovies] = useState(JSON.parse(localStorage.getItem('movies')) || []);
    const moviesWrap = {
        display: 'flex',
        flexWrap: 'wrap',
        width: 768,
        maxWidth: '100%',
        margin: '0 auto',
        padding: '54px 0'
    }
    const {notification, setNotification} = useContext(NotificationContext);

    useEffect(() => {
        setNotification(false);
    })

    return (
        <div style={moviesWrap}>
            {
                localMovies.map((movie) => {
                    return (
                        <WatchItem
                            movieObject={movie}
                            director="jbfkjbefjkb"
                            key={movie.id}
                            isLandingItem={true}
                            setLocalMovies={setLocalMovies}
                        />
                    )
                })
            }
        </div>
    )
}

export default Landing