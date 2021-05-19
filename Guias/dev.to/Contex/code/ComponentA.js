import React, { useContext } from "react";
import { Context } from "./Context";

export default function ComponentA() {
  const [context, setContext] = useContext(Context);
  return (
    <div>
      ComponentA: {context.toString()}
      <button onClick={() => setContext(!context)}>
        Change Context Value
      </button>
    </div>
  );
}