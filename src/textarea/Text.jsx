import React, { useState } from 'react';
import "./text.css";

function Text() {
    const [isBold, setIsBold] = useState(false);
    const [input, setInputText] = useState("");
    const [FontStyle, setFontStyle] = useState(false);
    const [UpperCase, setUpperCase] = useState(false);
    const [Lowercase,setLowercase]=useState(false);

    const changeFont = () => {
        setIsBold(!isBold);
    };

    const changeStyle = () => {
        setFontStyle(!FontStyle);
    };

    const convertUpperCase = () => {
        setUpperCase(!UpperCase);
    };

    const ConvertLowerCase=()=>{
        setLowercase(!Lowercase)
    }
    return (
        <div>
            <div>
                <input
                className={`parent ${isBold ? "bold" : "normal"} ${FontStyle ? "Italic" : "normal"} ${UpperCase ? "Uppercase" : "normal"} ${Lowercase ? "Lowercase" : "NORMAL"}`}
                    type="text"
                    value={input}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button onClick={changeFont}>{isBold ? "Normal" : "Bold"}</button>
                <button onClick={changeStyle}>{FontStyle ? "Normal" : "Italic"}</button>
                <button onClick={convertUpperCase}>{UpperCase ? "Normal" : "Uppercase"}</button>
                <button onClick={ConvertLowerCase}>{Lowercase ? "Normal" : "Lowercase"}</button>
            </div>
            
        </div>
    );
}

export default Text;

































// Literals 
