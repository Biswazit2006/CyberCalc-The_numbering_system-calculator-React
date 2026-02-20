import React, { useContext } from 'react'
import style from '../baseBtn.module.css'
import { baseContext,baseSetContext } from './../Contexts/activeBase';


export default function BaseBtn({text,base}) {
  const baseSetter = useContext(baseSetContext);
  return (
       <button type="button" className={style.baseBtn} onClick={(base)=>{baseSetter(base)}}>{text}</button>
  )
}
