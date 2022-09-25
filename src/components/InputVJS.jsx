export function InputVJS({name, weight, height, onChangeCallback}){
    return (
        <>
        <input type="text" 
          value={name} 
          onChange={onChangeCallback} 
          placeholder='Digite seu nome aqui..' />
        <input type="number" 
          value={weight} 
          onChange={onChangeCallback} 
          placeholder='Digite seu peso' />
        <input type="number" 
          value={height} 
          onChange={onChangeCallback} 
          placeholder='Digite sua altura' />
        </>
    )
}