// import { useState } from "react"
import Box from "./Box"
import './boxes.css'
import LightModeIcon from '@mui/icons-material/LightMode';
// import NightlightIcon from '@mui/icons-material/Nightlight';

function Main() {
    const[dark,setIsDark]=useState(false);
    const changeTheme = (()=>{
      setIsDark(!dark)
    })
    // console.log(dark , "10")
        return(
            <main className={dark ? "dark" : "light"}>
               <nav>
                <div>
                <button onClick={changeTheme} className={ dark ? "dark" : "light"}>
                    theme
                </button>
                <LightModeIcon className={!dark ? "light" : "dark"}/>
                </div>
             
        <div className="boxes">
        <Box  num="1"/>
        <Box num="2"/>
        <Box num="3"/>
    </div>
    </nav>
    </main>
    )
}
export default Main  