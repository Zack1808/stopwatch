import React from "react";

// Importing the style file
import "../css/DisplayClock.css";

// Creating the DisplayClock component;
const DisplayClock = ({ time, pointer, status }) => {
  return (
    <div className="clock">
      <div className="numbers">
        <div className="number" style={{ "--i": 5 }}>
          5
        </div>
        <div className="number" style={{ "--i": 10 }}>
          10
        </div>
        <div className="number" style={{ "--i": 15 }}>
          15
        </div>
        <div className="number" style={{ "--i": 20 }}>
          20
        </div>
        <div className="number" style={{ "--i": 25 }}>
          25
        </div>
        <div className="number" style={{ "--i": 30 }}>
          30
        </div>
        <div className="number" style={{ "--i": 35 }}>
          35
        </div>
        <div className="number" style={{ "--i": 40 }}>
          40
        </div>
        <div className="number" style={{ "--i": 45 }}>
          45
        </div>
        <div className="number" style={{ "--i": 50 }}>
          50
        </div>
        <div className="number" style={{ "--i": 55 }}>
          55
        </div>
        <div className="number" style={{ "--i": 60 }}>
          60
        </div>
      </div>
      <div
        className="pointer"
        style={{
          transform: status && `rotate(calc(6deg * ${pointer}))`,
        }}
      >
        <div className="point"></div>
      </div>
      <div className="time-display">
        <div className="time">
          <span>{time.m >= 10 ? time.m : `0${time.m}`}</span>:
          <span>{time.s >= 10 ? time.s : `0${time.s}`}</span>:
          <span>{time.ms >= 10 ? time.ms : `0${time.ms}`}</span>
        </div>
      </div>
    </div>
  );
};

export default DisplayClock;
