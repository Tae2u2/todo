import React from 'react'

const Button = ({children, disabled , handleClick } : {children : string, disabled : boolean, handleClick : any }) => {
    return (
    <button disabled={disabled} onClick={handleClick}>{children}</button>
  )
}

export default Button;