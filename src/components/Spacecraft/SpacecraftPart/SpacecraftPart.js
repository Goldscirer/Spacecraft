import React, { Component } from 'react';
import classes from './SpacecraftPart.module.css';
import PropTypes from 'prop-types';
import logo from "../../../logo.svg";

class SpacecraftPart extends Component {
    render() {
        let part = null

        switch (this.props.type) {
            case ('ailerons'):
                part =
                        <div className={classes.Aileron}>
                            <img style={{height: 50, marginTop: '22%'}} src={logo} className="App-logo" alt="logo"/>
                            <div className={classes.aileron1}></div>
                            <div className={classes.aileron1triangle}></div>
                            <div className={classes.aileron2}></div>
                            <div className={classes.aileron2triangle}></div>
                    </div>;
                break;
            case ( 'top' ):
                part = (
                    <div className={classes.Top}>
                        <div className={classes.tip}></div>
                    </div>
                );
                break;
            case ( 'meat' ):
                part = <div className={classes.Meat}></div>;
                break;
            case ( 'middle' ):
                part = <div className={classes.Cheese}></div>;
                break;
            case ( 'bacon' ):
                part = <div className={classes.Bacon}></div>;
                break;
            case ( 'salad' ):
                part = <div className={classes.Salad}></div>;
                break;
            default:
                part = null;
        }
        return part;
    }
};

SpacecraftPart.propTypes = {
    type: PropTypes.string.isRequired
};

export default SpacecraftPart;
