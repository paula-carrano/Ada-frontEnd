import React from 'react'
import {Header} from './components'

const App = () => {
  const cont  = 4;
  return (
  <div>
    <Header />
    <h2>hello world</h2>
    <p>mi contador esta en {cont} </p>
    </div>
  );
}

export default App;
