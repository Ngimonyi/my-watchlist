import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './components/Landing';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Favorites from './components/Favorites';
import Search from './components/Search';
import { useState } from 'react';
import { createContext } from 'react';

export const NotificationContext = createContext(0);

function App() {
  const [notification, setNotification] = useState(false);

  return (
    <Router>
      <div className="App">


        <NotificationContext.Provider value={{notification, setNotification}}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </main>
        </NotificationContext.Provider>



        <Footer />
      </div>    
    </Router>

  );
}

export default App;
