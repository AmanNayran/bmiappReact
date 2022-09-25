import { ChangeEventHandler } from "react"

interface InputProps{
    name: string
    weight: number 
    height: number

    onChangeCallback: ChangeEventHandler
}

export function Input({name, weight, height, onChangeCallback}:InputProps){
    return (
        <>
        <h2>Name: </h2>
        <input type="text" 
          value={name}
          onChange={onChangeCallback}
          placeholder='Digite seu nome aqui..' />

        <h2>Weight: </h2>
        <input type="number" 
          value={weight} 
          placeholder='Digite seu peso aqui..' /> 
          
        <h2>Height: </h2>
        <input type="number" 
          value={height} 
          placeholder='Digite sua altura aqui..' /> 
        </>

    )
}