import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import MostPopular from './pages/Mostpopular';
import Bollyhood from './pages/Bollyhood';
import Hollywood from './pages/Hollyhood';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:slug" element={<Details />} />
        <Route path="/most-popular" element={<MostPopular />} />
         <Route path="/hollyhood" element={<Hollywood />} />
        <Route path="/bollyhood" element={<Bollyhood />} />

        
      </Routes>
    </>
  );
}

export default App;
