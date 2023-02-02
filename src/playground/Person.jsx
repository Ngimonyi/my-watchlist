const Person = (props) => {

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
            <hr />
        </>
    )
}

export default Person