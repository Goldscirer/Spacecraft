import React, {Component} from 'react';
import Aux from '../../hoc/ReactAux';
import Spacecraft from "./../../components/Spacecraft/Spacecraft"

class ScpacecraftBuilder extends Component {

    state = {
        parts: {
            top: 1,
            middle: 1,
            ailerons: 1,
        }
    }

    render() {
        return (
            <Aux>
                <div>
                <Spacecraft parts={this.state.parts} />
                </div>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default ScpacecraftBuilder;
