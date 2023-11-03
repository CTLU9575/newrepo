import { useState } from "react";

const Header = ({ text }) => {
  return (<div>
    <h1>{text}</h1>
  </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const MaxVote = ({ anecdotes, allVotes }) => {
  const max = allVotes.reduce((a, b) => Math.max(a, b), -Infinity)
  const sub = allVotes.indexOf(max)
  
  return (
    <div>
      {anecdotes[sub]} <br />
      has {max} votes
    </div>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(0)
  const [allVotes, setAll] = useState(Array(7).fill(0))

  const copy = [...allVotes]
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  //const [vote, setVote] = useState(copy)
  console.log('vote',vote)
  
  const handleNextClick = () => {
    let num = Math.floor(Math.random()*7)
    setSelected(num)
    setVote(copy[num])
    // setVote(copy)
    // console.log('the number of selected = ',selected)
  }
  
  const handleVoteClick = () => {
    setVote(vote+1)
    console.log('vote now',vote)
    copy[selected] = vote + 1
    console.log('copy:',copy)
    setAll(copy)
    
    console.log('allVotes:',allVotes)
  }
  
  return (
    <div>
      <Header text={'Anecdote of the day'} />
      {anecdotes[selected]} <br/>
      <Button handleClick={handleNextClick} text='next anecdotes' />
      <Button handleClick={handleVoteClick} text='vote' />
      <br />
      has {vote} votes
      <Header text={'Anecdote with most votes'} />
      <MaxVote anecdotes={anecdotes} allVotes={allVotes} />
    </div>
  );
}

export default App;
