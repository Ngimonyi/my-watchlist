import '../styles/navigation.scss';
import navList from '../data/navigation.json';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();
    console.log('location', location);

    return (
        <nav>
            <ul>
                {
                    navList.map((navItem, index) => {
                        let isActive = false;

                        if (location.pathname === navItem.url) {
                            isActive = true;
                        }

                        return (
                            <li key={index}>
                                {/* <a href={navItem.url}>{navItem.title}</a> */}
                                <Link className={isActive === true ? 'active' : ''} to={navItem.url}>{navItem.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>            
        </nav>
    )
}

export default Navigation