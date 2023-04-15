import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [sumsum, setSumSum] = useState([])
  const [name, setName] = useState('')
  const [sum, setSum] = useState('')

  useEffect(() => {
    // fetch server
    console.log('sending request')
    fetchSumSum()
  }, [])

  const fetchSumSum = () => {
    fetch('http://127.0.0.1:8000/test/sumsum')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSumSum(data)
      })
  }

  const postSumSum = () => {
    fetch(`http://127.0.0.1:8000/test/create/${name}/${sum}`, {
      method: 'post'
    })
      .then(response => console.log(response.status))
    fetchSumSum()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={'100px'}/>
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)}/>
          <input value={sum} onChange={(e) => setSum(e.target.value)}/>
          <button onClick={postSumSum}>Post my SumSum</button>
        </div>
        <div style={{display: 'flex', gap: '1rem'}}>
          {
            sumsum.map((s, i) => 
              <div key={i}>
                <span>Name: {s.Name}</span>
                <br/>
                <span>Message: <span>{s.SumMessage__c}</span></span>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
