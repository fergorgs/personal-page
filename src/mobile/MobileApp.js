import React, { useState } from 'react';
import SlideRoutes from 'react-slide-routes';
import {
  BrowserRouter,
  Route,
  Navigate,
} from "react-router-dom";
import MobileHomeScreen from './pages/MobileHomeScreen'
import MobileWorksScreen from './pages/MobileWorksScreen'
import MobileProjectsScreen from './pages/MobileProjectsScreen'
import MobileContactScreen from './pages/MobileContactScreen'
import MobileBackDropImage from './components/MobileBackDropImage'
import MobileNavBar from './components/MobileNavBar'
import MobileFooter from './components/MobileFooter'

function MobileApp(){

    return (
      <div id="app">
        <BrowserRouter>
          <MobileNavBar toPaths={['/', '/work', '/projects', '/contact']}/>
          <MobileBackDropImage/>
          <SlideRoutes duration={500}>
            <Route index element={<MobileHomeScreen/>} />
            <Route path="work" element={<MobileWorksScreen/>}/>
            <Route path="projects" element={<MobileProjectsScreen/>}/>
            <Route path="contact" element={<MobileContactScreen/>}/>
            <Route path="*" element={<Navigate to="/" replace />}/>
          </SlideRoutes>
          <MobileFooter/>
        </BrowserRouter>
      </div>
    )
}

function TempScreen(props){

    return (
      <h1>This is the {props.title}</h1>
    )
  }

export default MobileApp;