const Events = () => {
    const handleClick = () => {
        alert('klikam po buttonu');
    }

    const handleInputChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <>
            <h1 onMouseOver={() => console.log('Naslov hoveran')}>
                ReactJS events - vježba
            </h1>
            <input type="text" onChange={(e) => handleInputChange(e)} />
            <button onClick={handleClick}>Klik</button>
            <button onClick={() => alert('Test alert')}>
                Okini alert inline
            </button>
        </>
    )
}

export default Events