import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import useAsyncHook from './hooks/useAsyncHook'

function App() {

  const [country, setCountry] = useState('mx');
	const [category, setCategory] = useState('science');
	const [search, setSearch] = useState({
		country: country,
		category: category 
	});
	const [result] = useAsyncHook(search);

  console.log(result)

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
