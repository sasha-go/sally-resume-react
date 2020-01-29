import React from 'react';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
// import './App.css';

// ReactDOM.render(
//   React.createElement(App), // passing the function instead of a string
//   document.querySelector('#root')
// );

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Contact />
      <Education />
      <Experience />
    </div>
  );
}



export default App;
