import React from 'react'

const Button = ({
  children, 
  disabled , 
  handleClick 
  } : {
  children : string, 
  disabled : boolean, 
  handleClick : (e:any)=>void }) => {

  return (
    <button className='login-button' disabled={disabled} onClick={handleClick}>{children}</button>
  )
}

export default Button;