const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/saurabhkamboj'>Saurabh</a>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 30
  const friends = ['Joe', 'John']
  return (
    <>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <div><p>{friends.join(', ')}</p></div>
      <Footer />
    </>
  )
}

export default App