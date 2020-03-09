import React, { useState } from 'react';

function Example() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);

  return (
    <div>
        <p>prro aqui estoy </p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Example;