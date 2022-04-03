import React from 'react';
import { Link } from "react-router-dom";
import DrawerMenu from './DrawerMenu'
// import '../styles/MobileNavBar.css'

function MobileNavBar(props){

    const buttons = [{text:"Home", toPath:"/"},
                     {text:"Work", toPath:"/work"},
                     {text:"Projects", toPath:"/projects"},
                     {text:"Contact", toPath:"/contact"},
                    ]

    return (
        <div>
            <DrawerMenu buttons={buttons}/>
        </div>
    );
}

export default MobileNavBar;