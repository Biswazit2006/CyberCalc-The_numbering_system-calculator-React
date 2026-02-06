import React from 'react'
import style from '../keyButton.module.css'

export default function KeyButton({keypress,otherstyle}) {
    console.log(keypress)
  return (
    <button type="button" className= {`${style.button} ${otherstyle}`}>{keypress}</button>
  )
}
