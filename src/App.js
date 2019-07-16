import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import SpacecraftBuilder from './containers/SpacecraftBuilder/SpacecraftBuilder'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <SpacecraftBuilder></SpacecraftBuilder>
        </Layout>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

        </p>
      </header>
    </div>
  );
}

export default App;
