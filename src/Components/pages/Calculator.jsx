import React, { useState } from "react";
import Nav from "./../Nav";
import Calc from "./../Calc";
import { baseContext, baseSetContext } from "./../../Contexts/activeBase";

export default function Calculator() {
  const [base, setBase] = useState(10);
  const [decimalStr, setDecimalStr] = useState("sdjfh");

  const CBase = baseContext;
  const baseSet = baseSetContext;
  return (
    <baseSetContext className="Provider" value={setBase}>
      <baseContext.Provider value={base}>
        <div>
          <Nav />
          <Calc />
        </div>
      </baseContext.Provider>
    </baseSetContext>
  );
}
