import React from 'react'
import Aux from './../../../hoc/ReactAux'
import Button from './../../UI/Button/Button'

const text = () => {
  return <p>This rocket would go into space.</p>
}

const launchSummary = (props) => {
  const partsSummary = Object.keys(props.parts).map((partKey) => {
    return (
      <li key={partKey}>
        <span style={{ textTransform: 'capitalize' }}>{partKey}</span>: {props.parts[partKey]}
      </li>
    )
  })

  let message = <p>This rocket would not reach space.</p>

  if (props.parts.top === 1 && props.parts.ailerons === 1 && props.parts.middle === 3) {
    message = <p>This rocket would go into space.</p>
  }

  return (
    <Aux>
      <h3>Your lanch details:</h3>
      <ul>{partsSummary}</ul>
      <p>
        <strong>Total price: {props.price}$</strong>
      </p>
      <p>{message}</p>
      <Button btnType="Danger" clicked={props.launchCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.launchContinue}>
        CONTINUE
      </Button>
    </Aux>
  )
}

export default launchSummary
