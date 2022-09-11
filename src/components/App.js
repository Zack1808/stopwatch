import React from 'react';

// Importing the costume made components
import Button from './Button';
import DisplayClock from './DisplayClock';

// Importing the style file
import '../css/App.css';

// Creating the App component
const App = () => {

    return (
        <div className="main-section">
            <div className="clock-holder">
                <div className="stopwatch">
                    <DisplayClock />
                    <Button text="start" color="green" />
                </div>
            </div>
        </div>
    )
}

export default App;