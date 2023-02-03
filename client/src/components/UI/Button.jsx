import React from 'react'

const Button = (props) => {
  return (
    <button type={props.type} style={{...props.style}} className={`bg-[#8155FF] text-[#FFFFFF] rounded-lg p-3 w-fit h-fit shadow-xl shadow-gray-400 ${props.className}`}>{props.children}</button>
  )
}

export default Button