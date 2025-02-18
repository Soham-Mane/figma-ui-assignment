import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRouter from './routes/Router';


function App() {
  const [count, setCount] = useState(0)

  return (
 <Router>
  <AppRouter/>
 </Router>
  )
}

export default App
