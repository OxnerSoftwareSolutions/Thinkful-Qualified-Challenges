import React from "react";
import "./HobbyList.css";

function HobbyList({hobbies}) {
  return hobbies.length > 0 && (
    <div>
      <h4>Hobbies</h4>
      <ul>{hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
      </ul>
     </div>
    )
}

export default HobbyList;
