import React from 'react';

// Importing the style file
import "../css/DisplayClock.css";

// Creating the DisplayClock component;
const DisplayClock = ({ time }) => {
    return (
        <div>
            <span>{(time.h >= 10) ? time.h : "0" + time.h}</span>&nbsp;:&nbsp;
            <span>{(time.m >= 10) ? time.m : "0" + time.m}</span>&nbsp;:&nbsp;
            <span>{(time.s >= 10) ? time.s : "0" + time.s}</span>&nbsp;:&nbsp;
            <span>{(time.ms >= 10) ? time.ms : "0" + time.ms}</span>
        </div>
    )
}

export default DisplayClock;