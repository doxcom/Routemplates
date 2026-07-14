import React from 'react';

import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <main className='app_main'>{/* Perform Routing here*/}</main>  
    </div>
  )
}

export default App;