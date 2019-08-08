import React, { Component } from 'react'
import classes from './Toolbar.module.css'

class Toolbar extends Component {
  render() {
    return (
      <header className={classes.Toolbar} >
        <div>MENU</div>
        <div>LOGO</div>
        <nav>...</nav>
      </header>
    )
  }
}

export default Toolbar
