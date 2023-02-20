import '../styles/upper-navigation.scss'


const UpperNav = () => {
    const logo = <div>My Watchlist</div>

    return (
        <>
            <div className="upper-navigation">
                {logo}
            </div>
        </>
    )
}

export default UpperNav;