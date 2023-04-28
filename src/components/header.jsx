import { useState} from 'react'
import './header.css';


function Header(){

    const [theme, setTheme] = useState('light');
    document.documentElement.className = theme

    return(
        <header>
            <h1>TaskAhead</h1>
            <div className="theme">
                <span onClick={()=> setTheme("dark")} className="dark"></span>
                <span onClick={()=> setTheme("light")}className="light"></span>
                <span onClick={()=> setTheme("pepper")}className="pepper"></span>
                <span onClick={()=> setTheme("gOne")}className="gOne"></span>
                <span onClick={()=> setTheme("gTwo")}className="gTwo"></span>

            </div>
        </header>

    );
}


export default Header;