import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from "./pages/homePage/Home";
import Contact from "./pages/contactPage/Contact";
import Properties from "./pages/propertiesPage/Properties";
import NewProperty from "./pages/addNewPropertyPage/NewProperty";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/properties' element={<Properties />} />
          <Route path='/newProperty' element={<NewProperty />} />
      </Routes>
    </Router>
  );
}

export default App;
