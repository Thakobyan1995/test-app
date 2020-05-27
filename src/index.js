import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Header from './components/header/Header'
import List from './components/list/List'

function App() {
  return (
    <div>
      <Header />
      <List />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
