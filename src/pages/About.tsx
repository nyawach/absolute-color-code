import React, { useState } from "react"
import {Link} from "react-router-dom"

export default () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  return (
    <>
      <h1>About</h1>
      <Link to="/">Home</Link>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}
