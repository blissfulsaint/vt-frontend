// src/App.tsx
import React from 'react';
import './App.css';
import UserInformation from './components/UserInformation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserInformation />
      </header>
    </div>
  );
}

export default App;
