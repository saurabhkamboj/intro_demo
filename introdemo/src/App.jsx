import { useState } from 'react'

/*
const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value: ', counter)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter - 1)

  return (
   <div>
    <Display counter={counter} />
    <Button onClick={increaseByOne} text='plus' />
    <Button onClick={setToZero} text='reset' />
    <Button onClick={decreaseByOne} text='minus' />
   </div>
  )
}
*/

/*
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  // const [total, setTotal] = useState(0)


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    // setTotal(updatedLeft + right)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    // setTotal(left + updatedRight)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}

      <History allClicks={allClicks} />
    </div>
  )
}
*/

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Display = ({ value }) => <div>{value}</div>

const App = () => {
  const [value, setValue] = useState(10)
  

  const setToValue = (newValue) => () => {
    console.log('value now', newValue)  // print the new value to console
    setValue(newValue)
  }
  
  return (
    <div>
      <Display value={value} />

      <Button onClick={setToValue(1000)} text='thousand' />
      <Button onClick={setToValue(0)} text='reset' />
      <Button onClick={setToValue(value + 1)} text='increment' />
    </div>
  )
}

export default App