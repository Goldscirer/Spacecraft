import React, {Component} from 'react';
import Aux from '../../hoc/ReactAux';
import Spacecraft from "./../../components/Spacecraft/Spacecraft"

class ScpacecraftBuilder extends Component {
    render() {
        return (
            <Aux>
                <div>
                <Spacecraft />
                </div>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default ScpacecraftBuilder;
