import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() { 
    
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Robotte Project
        </p>
        <p>----------</p>
      </header>
      <div id='contact'>
        <h2>Contact Us</h2>
        <Form></Form>
      </div>      
    </div>
  );
}

// ReactDOM.createRoot(document.getElementById('app')).render(<App />);

export default App;