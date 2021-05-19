import React, { useState } from "react";
import { Context } from "./Context.js";

import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export default function App() {
  const [context, setContext] = useState(true);
  return (
    <Context.Provider value={[context, setContext]}>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </Context.Provider>
  );
}