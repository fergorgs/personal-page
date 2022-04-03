import React, { useState, useEffect } from 'react';
import {
    useLocation
  } from "react-router-dom";
import '../styles/MobileBackDropImage.css'

function delay(delayInms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }

async function heightAnimation(startingHeight, targetHeight, heightSetter, time) {

    var frameDuration = 5
    var frames = time/frameDuration
    var step = (targetHeight - startingHeight) / frames;
    var currentHeight = startingHeight

    for(var i = 0; i < frames; i++)
    {
        currentHeight += step;
        heightSetter(currentHeight);
        await delay(frameDuration);
    }
}

function MobileBackDropImage(){

    const [backDropHeight, setBackdropHeight] = useState(550);
    const [curPath, setCurPath] = useState('/');

    let location = useLocation();

    useEffect(() => {
      
        if(location.pathname != curPath)
        {
            setCurPath(location.pathname)
            if(location.pathname == '/')
                heightAnimation(backDropHeight, 550, setBackdropHeight, 300);
            else
                heightAnimation(backDropHeight, 170, setBackdropHeight, 300);
        }
    });

    return (
        <div>
          <div id="mobile-backdrop-img" style={{height: backDropHeight}}></div>
        </div>
    );
}

export default MobileBackDropImage;