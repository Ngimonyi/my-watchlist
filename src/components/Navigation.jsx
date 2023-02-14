import '../styles/navigation.scss';
import navList from '../data/navigation.json';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='main-nav'>
            <ul>
                {
                    navList.map((navItem, index) => {
                        return (
                            <li key={index}>
                                {/* <a href={navItem.url}>{navItem.title}</a> */}
                                <Link to={navItem.url}>{navItem.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>            
        </nav>
    )
}

export default Navigation