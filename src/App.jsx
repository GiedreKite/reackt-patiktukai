
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import  Patiktukai  from './comonents/Patiktukai'

function App() {
  const [count, setCount] = useState(0)

  return <Patiktukai />
}

export default App
