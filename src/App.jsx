import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-600 p-4'>
    <Todo />
    </div>
  )
}

export default App
