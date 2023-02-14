import '../styles/navigation.scss';
import navList from '../data/navigation.json';

const Navigation = () => {
    return (
        <nav className='main-nav'>
            <ul>
                {
                    navList.map((navItem, index) => {
                        return (
                            <li key={index}>
                                <a href={navItem.url}>{navItem.title}</a>
                            </li>
                        )
                    })
                }
            </ul>            
        </nav>
    )
}

export default Navigation