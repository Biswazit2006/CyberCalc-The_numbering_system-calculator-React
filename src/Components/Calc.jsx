import React, { useContext } from 'react'
import style from '../calc.module.css'
import BaseBtn from './BaseBtn';
import Input from './Input'
import KeyButton from './KeyButton';
import { baseContext } from './../Contexts/activeBase';

export default function Calc() {
   const CBase = useContext(baseContext); 

  return (
    <div className={style.calcContainer}>
        <div className={style.inputContainer}>
            <div className={style.inputRowContainer}>
                <BaseBtn  text="DEC"/>
                <Input text = "ueftg"/>
            </div>
            <div className={style.inputRowContainer}>
                <BaseBtn  text="BIN"/>
                <Input text = {CBase}/>
            </div>
            <div className={style.inputRowContainer}>
                <BaseBtn  text="HEX"/>
                <Input/>
            </div>
            <div className={style.inputRowContainer}>
                <BaseBtn  text="OCT"/>
                <Input/>
            </div>
        </div>
        <div className={style.btnContainer}>
            <KeyButton keypress= "7" />
            <KeyButton keypress= "8" />
            <KeyButton keypress= "9" />
            <KeyButton keypress= "DEL" />
            <KeyButton keypress= "AC" />
            <KeyButton keypress= "4" />
            <KeyButton keypress= "5" />
            <KeyButton keypress= "6" />
            <KeyButton keypress= "*" />
            <KeyButton keypress= "/" />
            <KeyButton keypress= "1" />
            <KeyButton keypress= "2" />
            <KeyButton keypress= "3" />
            <KeyButton keypress= "+" />
            <KeyButton keypress= "-" />
            <KeyButton keypress= "." />
            <KeyButton keypress= "0" otherstyle = {style.zeroBtn}/>
            <KeyButton keypress= "="  otherstyle = {style.equalBtn}/>
        </div>
    </div>
  )
}
