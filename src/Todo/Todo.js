import React, { useState } from "react";
import { uid } from "uid";
function Todo() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  console.log(list);
  return (
    <div>
      <div>
        <input
          onChange={(e) => setValue(e.target.value)}
          placeholder="PleaseEnter"
        />
        <button
          onClick={() => {
            setList([...list, value]);
          }}
        >
          Submit
        </button>
        <h2>{value}</h2>
        {list && (
          <ul>
            {list.map((item) => {
              return <li key={uid(item)}>{item}</li>;
            })}
          </ul>
        )}
      </div>
      <h2>Numbers of task : {list.length}</h2>
    </div>
  );
}

export default Todo;
