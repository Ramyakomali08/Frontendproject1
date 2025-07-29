import { useState } from 'react'
import './App.css'
import{Link} from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to Frontend class in KLU</h1>
    <h2>Todays topic is introduction to React</h2>
    <h3>Todays Date is 23.07.25</h3>
    <h4>CH Ramya komali</h4>
    <Link to="/Page1">Go to Page1</Link>
    <br/><br/><br/>
    <Link to="/Page2">Go to page2</Link>
    </>
  )
}

export default App
