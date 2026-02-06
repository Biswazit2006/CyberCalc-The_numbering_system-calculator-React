import React, { useState } from 'react'
import Nav from './../Nav';
import Calc from './../Calc';
import { baseContext } from './../../Contexts/activeBase';

export default function Calculator() {
  const [base,setBase] =   useState(10);
  const [decimalStr,setDecimalStr] = useState("sdjfh")
  
  // const CBase = baseContext;
  return (
    <baseContext.Provider value={base} >
      <div>
        <Nav/>
        <Calc />
      </div>
    </baseContext.Provider>
  )
}
