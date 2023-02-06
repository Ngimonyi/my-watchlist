import navList from '../data/navigation.json';

const Navigation = () => {
    return (
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
    )
}

export default Navigation