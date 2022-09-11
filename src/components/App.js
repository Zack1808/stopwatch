import React, { useState } from 'react';

// Importing the costume made components
import Button from './Button';
import DisplayClock from './DisplayClock';

// Importing the style file
import '../css/App.css';

// Creating the App component
const App = () => {

    const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0});
    var timeMs = time.ms, timeS = time.s, timeM = time.m, timeH = time.h;

    const start = () => {
        timerRunnign();
        setInterval(timerRunnign, 10)
    }   

    const timerRunnign = () => {
        if(timeM === 60) {
            timeH++;
            timeM = 0
        }
        if(timeS === 60) {
            timeM++;
            timeS = 0
        }
        if(timeMs === 100) {
            timeS++;
            timeMs = 0
        }
        timeMs++;
        return setTime({h: timeH, m: timeM, s: timeS, ms: timeMs})
    }

    return (
        <div className="main-section">
            <div className="clock-holder">
                <div className="stopwatch">
                    <DisplayClock time={time} />
                    <Button text="start" color="green" />
                </div>
            </div>
        </div>
    )
}

export default App;