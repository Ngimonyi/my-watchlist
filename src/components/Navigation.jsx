
const Navigation = () => {
    const navList = [
        {
            url: "",
            title: "All movies"
        },
        {
            url: "favorites",
            title: "Favorites"
        },
        {
            url: "add",
            title: "Add"
        },
        {
            url: "search",
            title: "Search"
        }
    ]

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