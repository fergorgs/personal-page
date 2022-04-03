import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import '../styles/DrawerMenu.css'

function delay(delayInms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }

async function toggleAnimation(startingMargin, targetMargin, marginSetter, time) {

    var frameDuration = 5
    var frames = time/frameDuration
    var step = (targetMargin - startingMargin) / frames;
    var currentMargin = startingMargin

    for(var i = 0; i < frames; i++)
    {
        currentMargin += step;
        marginSetter(currentMargin);
        await delay(frameDuration);
    }
}

async function toggle(visible, setVisible, setToggling, leftMargin, setLeftMargin){

    setToggling(true);

    if(visible)
    {
        await toggleAnimation(leftMargin, -18, setLeftMargin, 100);
        setVisible(false);
    }
    else
    {
        setVisible(true);
        await toggleAnimation(leftMargin, 0, setLeftMargin, 100);
    }

    setToggling(false);
}

function DrawerMenu(props){

    const [visible, setVisible] = useState(false);
    const [toggling, setToggling] = useState(false);
    const [leftMargin, setLeftMargin] = useState(-18);

    const buttons = props.buttons.map((button) => {

        if(button.icon)
            return(
                <DrawerButton icon={button.icon} text={button.text} toPath={button.toPath}/>
            );
        else
            return(
                <DrawerButton text={button.text} toPath={button.toPath}/>
            );
    })

    if(visible)
    {
        return(
            <div>
                <div id="mobile-nav-bar">
                    <FaBars onClick={() => { 
                        if(!toggling)
                            toggle(visible, setVisible, setToggling, leftMargin, setLeftMargin);
                    }}/>
                </div>
                <div id="drawer-menu-container">
                    <div id="drawer-menu" style={{marginLeft: leftMargin.toString() + 'em'}}>
                        {buttons}
                    </div>
                    <div id="drawer-menu-shadow-wall" onClick={() => { 
                        if(!toggling)
                            toggle(visible, setVisible, setToggling, leftMargin, setLeftMargin);
                    }}/>
                </div>
            </div>
        );
    }
    else
    {
        return(
            <div id="mobile-nav-bar">
                <FaBars onClick={() => { 
                    if(!toggling)
                        toggle(visible, setVisible, setToggling, leftMargin, setLeftMargin);
                }}/>
            </div>
        );
    }
}

function DrawerButton(props){

    const buttonIcon = props.icon ? props.icon : ""

    return(
        <nav>
            <Link to={props.toPath} style={{textDecoration: 'none'}}>
                <div className="drawer-button">
                    {buttonIcon}
                    <h4>{props.text}</h4>
                </div>
            </Link>
        </nav>
    );
}

export default DrawerMenu;