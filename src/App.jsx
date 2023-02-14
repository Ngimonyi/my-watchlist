import Playground from './playground/Playground';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Landing from './components/Landing';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Favorites from './components/Favorites';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/favorites" element={<Favorites />} />
            
            <Route path="/search" element={<Playground />} />
          </Routes>


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
    </Router>

  );
}

export default App;
