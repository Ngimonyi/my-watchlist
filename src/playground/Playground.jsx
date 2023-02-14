import Movie from "./Movie";
import batman from '../playground/img/batman.jpg'
import superman from '../playground/img/superman.jpg'
import spiderman from '../playground/img/spiderman.jpg'
import UserImage from "./UserImage";
import ClassSample from "./ClassSample";
import Person from "./Person";
import Student from "./Student";
import ReactStates from "./ReactStates";
import { useState } from "react";
import ClanskaIskaznica from "./ClanskaIskaznica";
import Accordion from "./Accordion";
import MoviesSearch from "./MoviesSearch";
import MovieGallery from "./MovieGallery";

const Playground = () => {
    const students = [
        {
            fullName: 'Ivan Horvat',
            average: 4.2,
            passed: ['fizika', 'OOP', 'TZK'],
            jmbag: 74839587385
        },
        {
            fullName: 'Stipe Mesić',
            average: 3.1,
            passed: ['biologija', 'kemija', 'filozofija', 'logika'],
            jmbag: 87678687678
        },
        {
            fullName: 'Ivo Andrić',
            average: 2.6,
            passed: ['biologija', 'kemija', 'filozofija', 'logika'],
            jmbag: 785678678
        }
    ]

    const [currentImage, setCurrentImage] = useState(batman)


    return (
        <>
            <MovieGallery />

            <br /><br />
            <hr />
            
            <h1>Movies search</h1>
            <MoviesSearch />

            <br /><br />
            <hr />

            <h1>Accordions</h1>
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />

            <br /> <br />
            <hr />

            <ClanskaIskaznica />

            <hr />

            <img
                src={currentImage}
                alt=""
                onMouseEnter={() => setCurrentImage(superman)}
                onMouseLeave={() => setCurrentImage(batman)}
            />

            <hr />

            <ReactStates />

            {
                students.map((student) => {
                    return (
                        <div key={student.jmbag}>
                            <Student
                                fullName={student.fullName}
                                average={student.average}
                                jabuka={student.passed}
                                jmbag={student.jmbag}
                            />
                            <br />
                        </div>
                    )
                })
            }
            

            <hr /> <hr />
            <Person
                name="Stipe"
                surname="Mesić"
                birthday={1898}
                address="Pantovčak 108"
                parties={["HDZ", "SDP", "Možemo", "Ne možemo"]}
            />

            <Person
                name="Frane"
                surname="Bilić"
                birthday={1919}
                address="Zagrebačka cesta 108"
                parties={["HNS", "HSLS", "HSS"]}
            />

            <Movie
                title="Batman"
                image={batman}
            />
            <Movie
                title="Superman"
                image={superman}
            />
            <Movie
                title="Spiderman"
                image={spiderman}
            />

            <UserImage />
            <ClassSample />
        </>

    )
}

export default Playground;