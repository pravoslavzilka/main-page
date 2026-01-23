
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToHash from "./components/ScrollToHash";

import Hardware from './pages/Hardware';
import Software from './pages/Software';
import TechnicalSupport from './pages/TechnicalSupport';



function App() {


    return (

    <Router>
      <div className="min-h-screen bg-gray-50">
        <ScrollToHash />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Project Routes */}
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/software" element={<Software />} />
          <Route path="/tech/podpora" element={<TechnicalSupport />} />

          
          

          {/*<Route path="/handbook" element={<Handbook />} />*/}
        </Routes>
        <Footer />
      </div>
    </Router>




  );
}

export default App;