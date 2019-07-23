import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Top', type: 'top'} ,
    { label: 'Middle', type: 'middle'},
    { label: 'Bottom', type: 'bottom'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.partAdded(ctrl.type)}
            />
        ))}
    </div>
);

export default buildControls;
