import React from 'react';

import classes from './Spacecraft.module.css';
import SpacecraftPart from './SpacecraftPart/SpacecraftPart';

const spacecraft = (props) => {

    let transformedParts = Object.keys(props.parts)
        .map(partKey => {
            return [...Array(props.parts[partKey])].map((_, i) => {
                return <SpacecraftPart key={partKey + i} type={partKey}/>;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
    }, []);
    console.log(transformedParts);
    if (transformedParts.length === 0 ) {
        transformedParts = <p>Please start building racket!</p>
    }
    return (
        <div className={classes.Spacecraft}>
            {transformedParts}
        </div>
    );
};

export  default spacecraft;
