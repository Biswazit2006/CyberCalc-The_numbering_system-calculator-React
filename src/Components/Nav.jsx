import React, { useState } from "react";
import style from "../nav.module.css"

export default function Nav() {
  const [hamburg ,setHamburg] = useState(style.hamburgMenuDisable)
  const [icon,setIcon] = useState("fa-solid fa-bars")
  const toggleHamburg = ()=>{
    if(hamburg == style.hamburgMenuDisable){
      setHamburg(style.hamburgMenuActive)
      setIcon("fa-solid fa-xmark")
    } else{
      setHamburg(style.hamburgMenuDisable)
      setIcon("fa-solid fa-bars")
    } 
  }

  return (
    <>
    <nav  className={style.navBar}>
      <div className={style.navLeftContainer}>
        <h2 className={style.logoText}>CyberCalc</h2>
      </div>
      <div className={style.navRightContainer}  onClick={toggleHamburg}>
        <i className={`${icon} ${style.hamburg}`}></i>
        {/* <i className={`fa-solid fa-bars ${style.hamburg}`} id="hamburg"></i>
        <i className={`fa-solid fa-xmark ${style.cross}`} id="cross"></i> */}
      </div>
      
      <div className={hamburg} >
        <ul>
          <li>
            <a href="./Converter/converter.html">
              <i className="fa-solid fa-arrow-right-arrow-left"></i>
              <p>Converter</p>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-solid fa-gear"></i>
              <p>Setting</p>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-solid fa-share-nodes"></i>
              <p>Share</p>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/biswazit2006">
              <i className="fa-brands fa-facebook"></i>
              <p>Facebook</p>
            </a>
          </li>
          <li>
            <a href="https://github.com/Biswazit2006">
              <i className="fa-brands fa-github"></i>
              <p>Github</p>
            </a>
          </li>
        </ul>
      </div>
      
    </nav>
    </>
  );
}
