// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactPage from './components/contact/Contact'; // Import your ContactPage component

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            
          <li><a><Link to="/">Home</Link></a></li> 
          <li><a><Link to="/contact">Contact</Link></a></li>
           
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
    </div>
  );
};

export default App;
