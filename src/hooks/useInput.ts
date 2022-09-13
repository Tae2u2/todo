import React, { ChangeEvent, useState } from 'react'

export default function UseInput(initialValue:string){
    const [value, setValue] = useState(initialValue);

    const onChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
    }

    return{ value , onChange }
}