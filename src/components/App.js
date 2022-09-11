import React, { useState } from 'react';

// Importing the costume made components
import Button from './Button';
import DisplayClock from './DisplayClock';

// Importing the style file
import '../css/App.css';

// Creating the App component
const App = () => {

    const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(false)
    const [stopButtonPressed, setStopButtonPressed] = useState(false)

    var timeMs = time.ms, timeS = time.s, timeM = time.m, timeH = time.h;

    const start = () => {
        timerRunnign();
        setInterv(setInterval(timerRunnign, 10));
        setStatus(true)
        setStopButtonPressed(false);
    } 

    const stop = () => {
        clearInterval(interv)
        setStopButtonPressed(true)
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
                    {
                        status ? 
                        (
                            <div>
                                <Button text={stopButtonPressed ? "resume": "stop"} color="blue" handleOperation={stopButtonPressed ? start : stop} />
                                <Button text="reset " color="red" />
                            </div>
                        ) : 
                        (
                            <Button text="start" color="green" handleOperation={start} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default App;