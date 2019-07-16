import React from 'react';

import classes from './Spacecraft.module.css';
import SpacecraftPart from './SpacecraftPart/SpacecraftPart';

const spacecraft = (props) => {
    return (
        <div className={classes.Burger}>
            <SpacecraftPart type="bread-top"/>
            <SpacecraftPart type="cheese"/>
            <SpacecraftPart type="bread-bottom"/>
        </div>
    );
};

export  default spacecraft;
