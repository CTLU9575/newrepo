import { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Header = ({ text }) => {
  return (<div>
    <h1>{text}</h1>
  </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    
  )
}

const Statistics = ({ allClicks, good, neutral, bad }) => {
  if (allClicks.length === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text={'good'} value={good} />
          <StatisticLine text={'neutral'} value={neutral} />
          <StatisticLine text={'bad'} value={bad} />
          <StatisticLine text={'all'} value={good+neutral+bad} />
          <StatisticLine text={'average'} value={(good-bad)/(good+neutral+bad)} />
          <StatisticLine text={'positive'} value={(good)/(good+neutral+bad)*100+' %'} />
        </tbody>
        
      </table>
      
    </div>
  )
}

const App = () => {
  // Save clicks of each button on its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  
  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Header text='statistics' />
      <Statistics allClicks={allClicks} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;