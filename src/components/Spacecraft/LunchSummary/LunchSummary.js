import React from 'react';
import Aux from './../../../hoc/ReactAux'

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
        </Aux>
    )
};

export default lunchSummary;
