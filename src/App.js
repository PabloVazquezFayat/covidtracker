import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import useAPI from './hooks/useApi';

function App() {
  const apiCalls = async () => {
    const test = await useAPI.getReportTotals({ name: 'Germany' });
    console.log(test);
  };

  useEffect(() => {
    apiCalls();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
