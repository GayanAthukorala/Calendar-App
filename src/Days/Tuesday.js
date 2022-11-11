import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";

function Tuesday() {
  const [toggeled, setToggeled] = useState(false);
  const [input, setInput] = useState("");
  var agendaTuesday = JSON.parse(localStorage.getItem("agendaTuesday") || "[]");
  let [list, setList] = useState(agendaTuesday);
  let [name, setName] = useState("Add");
  let [btnType, setBtn] = useState("addBtn");
  let formRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    agendaTuesday.push(input);
    setList(agendaTuesday);
    localStorage.setItem("agendaTuesday", JSON.stringify(agendaTuesday));
    console.log(agendaTuesday);
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
          let agendaTuesdayItem = event;
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
                    console.log(agendaTuesdayItem);
                    let newagendaTuesday = agendaTuesday.filter(
                      (i) => i !== agendaTuesdayItem
                    );
                    // console.log(h)
                    agendaTuesday = newagendaTuesday;
                    setList(agendaTuesday);
                    localStorage.setItem(
                      "agendaTuesday",
                      JSON.stringify(agendaTuesday)
                    );
                    console.log(agendaTuesday);
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

export default Tuesday;
