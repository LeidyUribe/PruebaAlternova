import { useState } from 'react'
import ShopPage from "../src/Pages/AlternovaShop"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShopPage/>
    </>
  )
}

export default App
