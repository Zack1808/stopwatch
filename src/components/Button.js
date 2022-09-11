import React from 'react';

// Importing the Styling
import "../css/Button.css"

// Creating the Button component
const Button = ({ handleOperation, text, color = "green"}) => {
    return (
        <div>
            <button className={`stopwatch-btn stopwatch-btn-${color}`} onClick={handleOperation}>{text}</button>
        </div>
    )
}

export default Button;