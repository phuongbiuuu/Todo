import React from "react"
const ButtonDelete = ({ text, className, deleteCompleted }) => {
    return <button className={`${className} delete-completed`} onClick={() => deleteCompleted()}>{text}</button>
  }
  
  const Button = ({ className, text, setActiveFilter }) => {
    return <button className={className(text)} onClick={() => setActiveFilter(text)}>{text}</button>
  }
  
  
  export {
    ButtonDelete,
    Button
  }