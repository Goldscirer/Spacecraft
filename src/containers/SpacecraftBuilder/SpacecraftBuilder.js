import React, {Component} from 'react';
import Aux from '../../hoc/ReactAux';
import Spacecraft from "./../../components/Spacecraft/Spacecraft"
import BuildControls from '../../components/Spacecraft/BuildControls/BuildControls'

const PARTS_PRICES = {
    top: 500000,
    middle: 1000000,
    ailerons: 2000000,
}

class ScpacecraftBuilder extends Component {

    state = {
        parts: {
            top: 1,
            middle: 1,
            ailerons: 1,
        },
        totalPrice: 2000000,
    }

    addPartHandler = (type) => {
        const oldCount = this.state.parts[type];
        const updateCount= oldCount + 1;
        const updatesParts = {
            ...this.state.parts
        };
        updatesParts[type] = updateCount;
        const priceAddition = PARTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, parts: updatesParts})
    }

    removePartHandler = (type) => {

    }

    render() {
        return (
            <Aux>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div>
                                <Spacecraft parts={this.state.parts} />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div style={{position: 'absolute'}}>
                                <BuildControls
                                    partAdded={this.addPartHandler}
                                />
                            </div>
                        </div>
                        <div className="col-sm">
                        </div>
                    </div>
                </div>
            </Aux>

        );
    }
}

export default ScpacecraftBuilder;
