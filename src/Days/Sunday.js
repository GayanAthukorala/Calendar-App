import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";

function Sunday() {
  const [toggeled, setToggeled] = useState(false);
  const [input, setInput] = useState("");
  var agendaSunday = JSON.parse(localStorage.getItem("agendaSunday") || "[]");
  let [list, setList] = useState(agendaSunday);
  let [name, setName] = useState("Add");
  let [btnType, setBtn] = useState("addBtn");
  let formRef = useRef();

  const submit = async (e) => {
    e.preventDefault();
    let tempInput = input;
    agendaSunday.push(tempInput);
    setList(agendaSunday);
    localStorage.setItem("agendaSunday", JSON.stringify(agendaSunday));
    console.log(agendaSunday);
    await setInput("");
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
          let agendaSundayItem = event;
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
                    console.log(agendaSundayItem);
                    let newagendaSunday = agendaSunday.filter(
                      (i) => i !== agendaSundayItem
                    );
                    // console.log(h)
                    agendaSunday = newagendaSunday;
                    setList(agendaSunday);
                    localStorage.setItem(
                      "agendaSunday",
                      JSON.stringify(agendaSunday)
                    );
                    console.log(agendaSunday);
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
              <input className="inputBox" type="text" onChange={handleChange} />
              <button class="btn btn-success btn-sm">+</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Sunday;
