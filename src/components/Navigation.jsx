import '../styles/navigation.scss';
import navList from '../data/navigation.json';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { NotificationContext } from '../App';

const Navigation = () => {
    const location = useLocation();
    console.log('location', location);
    const {notification} = useContext(NotificationContext);

    return (
        <nav>
            <ul>
                {
                    navList.map((navItem, index) => {
                        // let isActive = false;

                        // if (location.pathname === navItem.url) {
                        //     isActive = true;
                        // }

                        const classList = [];

                        if (location.pathname === navItem.url) {
                            classList.push('active')
                        }

                        if (navItem.url === '/') {
                            classList.push('home-page');

                            if (notification) {
                                classList.push('notification')
                            }
                        }

                        return (
                            <li key={index}>
                                {/* <a href={navItem.url}>{navItem.title}</a> */}
                                <Link className={classList.join(' ')} to={navItem.url}>{navItem.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>            
        </nav>
    )
}

export default Navigation