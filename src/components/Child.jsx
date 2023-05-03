import { useState } from 'react'

export default function Abc(props) {
    const [text,setText] = useState("Enter text here")
    function clickhandler() {
        setText("FFFFFFFFFFFFFF")
    }
  return (
    <>
    <h1>{text}</h1>
    <button onClick={clickhandler} >click</button>
    </>
  )
}