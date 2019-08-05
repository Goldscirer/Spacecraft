import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Top', type: 'top' },
  { label: 'Middle', type: 'middle' },
  { label: 'Bottom', type: 'ailerons' },
]

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current price: {props.currentPrice}</p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.partAdded(ctrl.type)}
        removed={() => props.partRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button onClick={props.launch} className={classes.OrderButton} disabled={!props.readyToStart}>
      LAUNCH NOW{' '}
    </button>
  </div>
)

export default buildControls
