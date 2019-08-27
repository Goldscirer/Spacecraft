import React from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import SpacecraftBuilder from './containers/SpacecraftBuilder/SpacecraftBuilder'

function App() {
  document.body.style = 'background: #282c34;'

  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <SpacecraftBuilder />
        </Layout>
      </header>
    </div>
  )
}

export default App
