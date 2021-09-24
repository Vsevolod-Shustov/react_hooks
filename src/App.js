import React, {useState, useEffect} from 'react';
import Header from './Header'
import Main from './Main'
import Side from './Side'
import Footer from './Footer'

function App(){
  const [count, updateCount] = useState(0)
  useEffect(() => {
    console.log(`count: ${count}`)
  })

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
