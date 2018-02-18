import React, { Component } from 'react'
import News from './containers/News/News'
import styles from './App.css'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <News />
      </div>
    )
  }
}

export default App
