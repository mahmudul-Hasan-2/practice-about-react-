import React from "react";
import { Destructure } from "./Destructure";

export function Destructuring({ arr }) {
  return (
    <div>
      {
        arr.map(richest => <Destructure richest={richest}></Destructure>)
      }
    </div>
  )
}