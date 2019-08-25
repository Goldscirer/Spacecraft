import React, { Component } from 'react'
import classes from './Toolbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket} from '@fortawesome/free-solid-svg-icons'
class Toolbar extends Component {
  render() {
    return (
      <header className={classes.Toolbar}>
        <div>SPACECRAFT <FontAwesomeIcon icon={faRocket} color="white"/>
        </div>
      </header>
    )
  }
}

export default Toolbar
