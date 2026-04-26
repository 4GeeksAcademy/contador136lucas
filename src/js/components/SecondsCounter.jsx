import React from 'react';

const SecondsCounter = ({ seconds }) => {
    return (
        <div className="big-counter">
            <div className="card-box"><i className="far fa-clock"></i></div>
            <div className="card-box">{Math.floor(seconds / 100000) % 10}</div>
            <div className="card-box">{Math.floor(seconds / 10000) % 10}</div>
            <div className="card-box">{Math.floor(seconds / 1000) % 10}</div>
            <div className="card-box">{Math.floor(seconds / 100) % 10}</div>
            <div className="card-box">{Math.floor(seconds / 10) % 10}</div>
            <div className="card-box">{seconds % 10}</div>
        </div>
    );
};

export default SecondsCounter;