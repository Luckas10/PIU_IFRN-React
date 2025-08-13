// 01 - Criem um componente que implemente a alteração de tema (dark / ligth mode) utilizando o useEffect.

import { useState, useEffect } from "react";
import './ChangeTheme.css'

function ChangeTheme() {
    const [themeStatus, setThemeStatus] = useState(false)
    
    function handleThemeMode () {
        if (themeStatus) {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
            document.body.style.backgroundColor = "#2f2f2f"
            document.body.style.color = "#ffffff"
            
        } else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
            document.body.style.backgroundColor = "#fdf6e3"
            document.body.style.color = "#1a1a1a"
        }
    }

    useEffect(() => {
        handleThemeMode()
    }, [themeStatus])

    return (
        <>
            <h4>01 - Criem um componente que implemente a alteração de tema (dark / ligth mode) utilizando o useEffect.</h4>
            <button className="buttonChangeTheme" onClick={() => { setThemeStatus(prev => !prev) }}>Ativar: {themeStatus ? 'Light Mode' : 'Dark Mode'}</button>
        </>
    )
}

export default ChangeTheme;