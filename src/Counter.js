import React, { useState, useRef } from "react"

export default React.memo(() => {
  const [value, setValue] = useState(0)
  const renders = useRef(0)

  return (
    <div>
      <div>Counter: {value}</div>
      <div>Las veces q se actualizo el Componente: {renders.current++}</div>
      <button onClick={() => setValue(value + 1)}>Increase Counter</button>
      <button onClick={() => setValue(value - 1)}>decrement Counter</button>
    </div>
  )
})