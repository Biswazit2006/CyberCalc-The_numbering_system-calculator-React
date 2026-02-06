import style from '../input.module.css'
export default function input({text}) {
  console.log(text);
  return (
       <input type="text" className={style.inputField} value={text}/>
  )
}
