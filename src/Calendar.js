import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Sunday from "./Days/Sunday";
import Monday from "./Days/Monday";
import Tuesday from "./Days/Tuesday";
import Wednesday from "./Days/Wednesday";
import Thursday from "./Days/Thursday";
import Friday from "./Days/Friday";
import Saturday from "./Days/Saturday";

import "./Calender.css";

function Calendar() {
  const [toggleSun, setToggleSun] = useState(false);
  const [toggleMon, setToggleMon] = useState(false);
  const [toggleTues, setToggleTues] = useState(false);
  const [toggleWed, setToggleWed] = useState(false);
  const [toggleThurs, setToggleThurs] = useState(false);
  const [toggleFri, setToggleFri] = useState(false);
  const [toggleSat, setToggleSat] = useState(false);

  return (
    <div>
      <center>
        <h1 className="title">Weekly Calendar</h1>
      </center>
      <div className="calendarLine">
        <div className="dayBlock">
          <Button onClick={() => setToggleSun(!toggleSun)}> Sunday </Button>
          {toggleSun && <Sunday />}
        </div>

        <div className="dayBlock">
          <Button onClick={() => setToggleMon(!toggleMon)}> Monday </Button>
          {toggleMon && <Monday />}
        </div>

        <div className="dayBlock">
          <Button onClick={() => setToggleTues(!toggleTues)}> Tuesday </Button>
          {toggleTues && <Tuesday />}
        </div>

        <div className="dayBlock">
          <Button onClick={() => setToggleWed(!toggleWed)}> Wednesday </Button>
          {toggleWed && <Wednesday />}
        </div>
      </div>
      <div className="calendarLine">
        <div className="dayBlock">
          <Button onClick={() => setToggleThurs(!toggleThurs)}>Thursday</Button>
          {toggleThurs && <Thursday />}
        </div>

        <div className="dayBlock">
          <Button onClick={() => setToggleFri(!toggleFri)}> Friday </Button>
          {toggleFri && <Friday />}
        </div>

        <div className="dayBlock">
          <Button onClick={() => setToggleSat(!toggleSat)}> Saturday </Button>
          {toggleSat && <Saturday />}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
