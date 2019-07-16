import React from 'react';

import classes from './Spacecraft.module.css';
import SpacecraftPart from './SpacecraftPart/SpacecraftPart';

const spacecraft = (props) => {
    return (
        <div className={classes.Spacecraft}>
            <SpacecraftPart type="top"/>
            <SpacecraftPart type="middle"/>
            <SpacecraftPart type="ailerons"/>
        </div>
    );
};

export  default spacecraft;
