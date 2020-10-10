import React, {PureComponent, Fragment} from 'react';
import App from './App';
import Fusioncharts from './MyFusioncharts';
import Draggable from './draggable';
import {
    Switch,
    Route,
} from "react-router-dom";
class RouterPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
    }
    render() {
        return (
                <div>
                    <Switch>
                        <Route exact path="/"  component={App}>
                        </Route>
                        <Route path="/pre"  component={Fusioncharts}>
                        </Route>
                        <Route path="/drag"  component={Draggable}>
                        </Route>
                    </Switch>
                </div>

        );
    }
}

export default RouterPage;
