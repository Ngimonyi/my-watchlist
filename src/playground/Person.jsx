const Person = (props) => {

    console.log(props);

    return (
        <>
            <div>
                My name is {props.name}
            </div>
            <div>
                My surname is {props.surname}
            </div>
            <div>
                Addres: {props.address}
            </div>
            <div>
                Birthday: {props.birthday}.
            </div>
            <div>
                <u>Parties:</u>
                {
                    props.parties.map((party, index) => {
                        return (
                            <div key={index}>
                                {party}
                            </div>
                        )
                    })
                }
            </div>
            {/* button klikom na koji se poziva funkcija */}
            <button
                onClick={() => props.introducePerson(`${props.name} ${props.surname}`)}
            >
                Predstavi se
            </button>
            <hr />
        </>
    )
}

export default Person