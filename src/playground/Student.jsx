import propTypes from 'prop-types';

const Student = (props) => {
    const passed = props.jabuka.join(', ');

    return (
        <>
            <div>Ime i prezime: {props.fullName}</div>
            <div>Prosjek: {props.average}</div>
            <div>Položeni kolegiji: {passed}</div>
            <div>JMBAG: {props.jmbag}</div>
        </>
    )
}

export default Student;

Student.propTypes = {
    fullName: propTypes.string,
    average: propTypes.number,
    passed: propTypes.arrayOf(propTypes.string),
    jmbag: propTypes.number
}