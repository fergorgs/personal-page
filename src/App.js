import React, { useState } from 'react';
import DesktopApp from './desktop/DesktopApp'
import MobileApp from './mobile/MobileApp'

function App() {

  const isMobile = false//navigator.userAgentData.mobile;

  if(isMobile)
    return(<MobileApp/>);
  
  else
    return(<DesktopApp/>);
}

function TempScreen(props){

  return (
    <h1>This is the {props.title}</h1>
  )
}

export default App;
