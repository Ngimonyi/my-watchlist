import { useState } from "react"

const ReactStates = () => {
    const [number, setNumber] = useState(0);
    const [fullName, setFullName] = useState('');
    const [overCounter, setOverCounter] = useState(0);

    const increment = () => {
        setNumber(number + 1);
    }

    const [inputNumber, setInputNumber] = useState(0);
    const [numberSquare, setNumberSquare] = useState(0)

    // 10.02.2023.
    // napraviti funkcionalnost koja vraća kvadrat upisanog broja

    const squareNumber = (e) => {
        const value = e.target.value;
        const valueSquared = value**2;

        setInputNumber(value);
        setNumberSquare(valueSquared);
    }

    return (
        <>
            <input type="text" onChange={(e) => {
                setInputNumber(e.target.value);
                setNumberSquare(e.target.value ** 2);
                }
            } />
            <h1>Kvadrat broja {inputNumber} je {numberSquare}</h1>
            <h1>Kub broja {inputNumber} je {inputNumber**3}</h1>

            <hr />

            <h1 onMouseOver={() => setOverCounter(overCounter + 1)}>
                React states
            </h1>
            <h2>Prešao sam {overCounter} puta preko naslova React states</h2>

            <input onChange={(event) => setFullName(event.target.value)} type="text" />
            <h2>{fullName}</h2>

            <hr />

            <div>
                <u>{number}</u>
            </div>
            <button onClick={increment}>
                Uvećaj za 1
            </button>
            <button onClick={() => setNumber(number + 2)}>
                Uvećaj za 2
            </button>
            <button onClick={() => setNumber(number - 1)}>
                Umanji za 1
            </button>
            <button onClick={() => setNumber(0)}>
                Restartaj
            </button>

            <hr />
        </>
    )
}

export default ReactStates