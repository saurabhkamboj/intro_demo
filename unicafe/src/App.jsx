import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Stat = ({ type, value }) => <tr><td>{type}</td><td>{value}</td></tr>

const Stats = ({ good, neutral, bad, average}) => {
  let total = good + neutral + bad

  if (total === 0) {
    return (
      <>No feedback given!</>
    )
  } else {
    return (
      <table>
        <tbody>
          <Stat type={'good'} value={good} />
          <Stat type={'neutral'} value={neutral} />
          <Stat type={'bad'} value={bad} />
          <Stat type={'total'} value={total} />
          <Stat type={'average'} value={(average/total).toFixed(1) || 0} />
          <Stat type={'positive'} value={`${(good/total * 100).toFixed(1) || 0} %`} />
        </tbody>
      </table>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)

  const handleOnClick = (type) => {
    switch (type) {
      case 'good':
        setGood(good + 1)
        setAverage(average + 1)
        break
      case 'neutral':
        setNeutral(neutral + 1)
        break
      case 'bad':
        setBad(bad + 1)
        setAverage(average - 1)
        break
    }
  }

  return (
    <>
      <Header text='give feedback'/>
      <Button onClick={() => handleOnClick('good')} text='good' />
      <Button onClick={() => handleOnClick('neutral')} text='neutral' />
      <Button onClick={() => handleOnClick('bad')} text='bad' />

      <Header text='statistics' />
      <Stats good={good} neutral={neutral} bad={bad} average={average} />
    </>
  )
}

export default App