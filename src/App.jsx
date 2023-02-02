import './App.css';
import UserImage from './playground/UserImage';
import ClassSample from './playground/ClassSample';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Person from './playground/Person';
import Movie from './playground/Movie';
import batman from './playground/img/batman.jpg'
import superman from './playground/img/superman.jpg'
import spiderman from './playground/img/spiderman.jpg'

function App() {
  return (
    <div className="App">
      {/* <Header />
      <hr />
      <Main />
      <hr />
      <Footer /> */}

      <hr />

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

      <hr />

      {/* [START] - playground */}

      {/* Kao propse dodati datum rođenja i adresu */}
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


      {/* <UserImage /> */}
      {/* <ClassSample /> */}
      {/* [END] - playground */}

    </div>
  );
}

export default App;
