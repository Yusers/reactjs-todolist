import React, { useState } from 'react';
import Content from './Content';


function App() {
  // Mounted
  const [show, setShow] = useState(false);
  return (
    <div className="app">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  )
}

export default App;
