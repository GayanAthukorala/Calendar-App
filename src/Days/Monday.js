import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";

function Monday() {
  const [toggeled, setToggeled] = useState(false);
  const [input, setInput] = useState("");
  var agendaMonday = JSON.parse(localStorage.getItem("agendaMonday") || "[]");
  let [list, setList] = useState(agendaMonday);
  let [name, setName] = useState("Add");
  let [btnType, setBtn] = useState("addBtn");
  let formRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    agendaMonday.push(input);
    setList(agendaMonday);
    localStorage.setItem("agendaMonday", JSON.stringify(agendaMonday));
    console.log(agendaMonday);
    setInput("");
    formRef.current?.reset();
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleToggle = () => {
    setToggeled(!toggeled);
    if (toggeled == true) {
      setName("Add");
      setBtn("addBtn");
      console.log("Hide");
    } else {
      setName("Hide");
      setBtn("hideBtn");
      console.log("Add");
    }
  };

  return (
    <div>
      {/* <button onClick={() => setToggeled(!toggeled)}>Add</button> */}
      {/* {toggeled &&  */}
      <div>
        {list.map((event) => {
          // console.log(event)
          let agendaMondayItem = event;
          return (
            <div className="calendarItm">
              <li>
                {event}
                &nbsp;&nbsp;
                <button
                  className="deleteBtn"
                  //type="button"
                  //class="btn btn-danger btn-sm"
                  onClick={() => {
                    console.log(agendaMondayItem);
                    let newagendaMonday = agendaMonday.filter(
                      (i) => i !== agendaMondayItem
                    );
                    // console.log(h)
                    agendaMonday = newagendaMonday;
                    setList(agendaMonday);
                    localStorage.setItem(
                      "agendaMonday",
                      JSON.stringify(agendaMonday)
                    );
                    console.log(agendaMonday);
                  }}
                >
                  Delete
                </button>
              </li>
            </div>
          );
        })}
      </div>
      {/* } */}
      <div className="addHide">
        <button onClick={handleToggle} className={btnType}>
          {name}
        </button>
        {toggeled && (
          <form ref={formRef} onSubmit={submit}>
            <div className="enter">
              <input
                className="inputBox"
                type="text"
                onChange={(event) => setInput(event.target.value)}
              />
              <button class="btn btn-success btn-sm">+</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Monday;
