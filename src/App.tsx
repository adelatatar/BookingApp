import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from "./pages/homePage/Home";
import Contact from "./pages/contactPage/Contact";
import Properties from "./pages/propertiesPage/Properties";
import NewProperty from "./pages/addNewPropertyPage/NewProperty";
import ViewPropertyPage from "./pages/viewPropertyPage/ViewPropertyPage";
import Layout from "./layouts/Layout";

function App() {
    return (
            <Router>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='/properties' element={<Properties/>}/>
                        <Route path='/newProperty' element={<NewProperty/>}/>
                        <Route path='/seeProperty/:id' element={<ViewPropertyPage/>}/>
                        <Route path='*' element={<Home/>}/>
                    </Routes>
                </Layout>
            </Router>
    );
}

export default App;
