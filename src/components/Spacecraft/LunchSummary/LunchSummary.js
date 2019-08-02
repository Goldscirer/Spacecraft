import React from 'react';
import Aux from './../../../hoc/ReactAux'
import Button from './../../UI/Button/Button'

const lunchSummary = (props) => {
    const partsSummary = Object.keys(props.parts)
        .map(partKey => {
            return (
                <li key={partKey}>
                    <span style={{textTransform: 'capitalize'}}>{partKey}</span>: {props.parts[partKey]}
                </li>);
        })
    return (
        <Aux>
            <h3>Your lanch details:</h3>
            <ul>
                {partsSummary}
            </ul>
            <Button btnType="Danger" clicked={props.lunchCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.lunchContinue}>CONTINUE</Button>
        </Aux>
    )
};

export default lunchSummary;
