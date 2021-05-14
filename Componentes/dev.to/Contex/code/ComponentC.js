import React, { useContext, useEffect } from "react";
import { Context } from "./Context";

export default function ComponentC() {
  useEffect(() => {
    console.log("hey");
  });
  return (
    <div>
   <p>Dejame en paz</p>
    </div>
  );
}