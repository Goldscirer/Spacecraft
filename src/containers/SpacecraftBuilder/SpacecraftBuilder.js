import React, {Component} from 'react';
import Aux from '../../hoc/ReactAux';
import Spacecraft from "./../../components/Spacecraft/Spacecraft"
import BuildControls from '../../components/Spacecraft/BuildControls/BuildControls'
import Modal from "../../components/UI/Modal/Modal";
import LunchSummary from '../../components/Spacecraft/LunchSummary/LunchSummary'

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
        totalPrice: 3500000,
        readyToStart: false,
        lunch: false,
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
        this.updateReadyToStart(updatesParts)
    }

    removePartHandler = (type) => {
        const oldCount = this.state.parts[type];
        if( oldCount !== 0) {
            const updateCount = oldCount - 1;
            const updatesParts = {
                ...this.state.parts
            };
            updatesParts[type] = updateCount;
            const priceAddition = PARTS_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceAddition;
            this.setState({totalPrice: newPrice, parts: updatesParts})
            this.updateReadyToStart(updatesParts)
        }
    }

    updateReadyToStart(parts) {
        const sum = Object.keys(parts)
            .map(partsKey => {
                return parts[partsKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0)
        this.setState({readyToStart: sum > 0})
    }

    lunchHandler = () => {
        this.setState({lunch: true})
    }

    cancelModal = () => {
        this.setState({lunch: false})
    }

    render() {
        const disabledInfo = {
            ...this.state.parts
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.lunch} modalClosed={this.cancelModal}>
                    <LunchSummary parts={this.state.parts} />
                </Modal>
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
                                    partRemoved={this.removePartHandler}
                                    disabled={disabledInfo}
                                    lunch={this.lunchHandler}
                                    currentPrice={this.state.totalPrice}
                                    readyToStart={this.state.readyToStart}
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
