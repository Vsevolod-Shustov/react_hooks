import React from 'react';
import Header from './Header'
import Main from './Main'
import Side from './Side'
import Footer from './Footer'

function App(){

  return (
    <div id="app">
      <Header />
      <div id="content">
        <Main />
        <Side />
      </div>
      <Footer />
    </div>
  )
}

export default App;
