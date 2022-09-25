import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import { CondensedButton } from './components/CondensedButton'
import { Header } from './components/Header'
import { Input } from './components/Input'

function App() {

  const [name, setName] = useState('Maria')
  const [weight, setWeight] = useState(75)
  const [height, setHeight] = useState(1.75)

  const onChangeFunction = (event: any) => {
    setName(event.target.value)
    setWeight(event.target.value)
    setHeight(event.target.value)
  }

  const onClickHandler = () => {
    
    return alert('BMI: 21.9')
  }

  return (
    <div className="App">
      <Header />
      
      <Card>

        <Input name={name} weight={weight} height={height} onChangeCallback={onChangeFunction}/>

        <CondensedButton onClickCallback={onClickHandler} />


      </Card>
     
    </div>
  )
}

export default App
