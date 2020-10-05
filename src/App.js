import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';

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
      <Header></Header>
    </div>
  );
}

export default App;
