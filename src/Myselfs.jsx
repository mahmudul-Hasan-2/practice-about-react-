import React from "react";

export function Myselfs({ name, age, isStudent }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <h4>{age > 30 ? `I'm a Adult` : `I'm not a adult`}</h4>
      <h4>{isStudent === true ? "Right Now I'm a Student" : "Right now I'm not a Student"}</h4>
    </div>
  )
}