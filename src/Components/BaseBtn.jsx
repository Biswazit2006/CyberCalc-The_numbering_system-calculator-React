import React from 'react'
import style from '../baseBtn.module.css'

export default function baseBtn({text}) {
  return (
       <button type="button" className={style.baseBtn}>{text}</button>
  )
}
