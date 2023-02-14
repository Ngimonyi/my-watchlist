import Playground from './playground/Playground';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Landing from './components/Landing';

// Redoslijed stiliziranja
// header
// footer
// Landing
// watchItem
// Search, Favorites...

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Landing />
        {/* <Search /> */}
        {/* <Favorites /> */}        
      </main>

      <hr />
      <Footer />

      <hr />
      {/* <Playground /> */}
      <hr />
    </div>
  );
}

export default App;
