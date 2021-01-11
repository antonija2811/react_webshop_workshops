import React from 'react';
import './Date.css';
import clock from "./clock.png";
import calendar from "./calendar.png";

const date = (props) => {
    const dateFormat = require("dateformat");
    const newDate = new Date(props.date);

    const tempDate = dateFormat(newDate,"dd.mm.yyyy.");
    const hours = dateFormat(newDate,"hh:MM").concat("h");
    
    return(
        <div className="Date">
            <div className="TempDate">
                <img src={calendar} alt="date"/>
                {tempDate}
            </div>
            <div className="TempTime">
                <img src={clock} alt="time"/>
                {hours}
            </div>
        </div>
    );
}

export default date;

/*const newDate = new Date(date);

const tempDate = newDate.toDateString();
const hours = newDate.toLocaleTimeString();
*/