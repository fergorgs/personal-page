import React, { useState } from 'react';
import SlideRoutes from 'react-slide-routes';
import {
  BrowserRouter,
  Route,
  Navigate,
} from "react-router-dom";
import HomeScreen from './pages/HomeScreen'
import WorksScreen from './pages/WorkScreen/WorksScreen'
import ProjectsScreen from './pages/ProjectsScreen'
import ContactScreen from './pages/ContactScreen'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import BackDropImage from './components/BackDropImage'
import "./styles/App.css"

function App() {

  return (
    <div id="app">
      <BrowserRouter>
        <NavBar toPaths={['/', '/work', '/projects', '/contact']}/>
        <BackDropImage/>
        <SlideRoutes duration={500}>
          <Route index element={<HomeScreen/>} />
          <Route path="work" element={<WorksScreen/>}/>
          <Route path="projects" element={<ProjectsScreen/>}/>
          <Route path="contact" element={<ContactScreen/>}/>
          <Route path="*" element={<Navigate to="/" replace />}/>
        </SlideRoutes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

function TempScreen(props){

  return (
    <h1>This is the {props.title}</h1>
  )
}

export default App;
