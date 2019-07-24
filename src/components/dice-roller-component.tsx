import * as React from 'react';
import { RollerDisplay } from './roller/roller-display-component';
import { RollerButton } from './roller/roller-button-component';

export class dieRollerComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            result: 0
        }
    }

    randomize(value: number) {
        this.setState({
            result: value
        });
    }

    render() {
        return (
            <div>
                {/* <div>{this.state.clicks}</div> */}
                <RollerDisplay result={this.state.result} />
                <RollerButton
                    randomize={(x: number) => this.randomize(x)}
                    result={this.state.result} />
                {/* <ClickerButton increment={this.increment.bind(this)} /> */}
            </div>
        )
    }
}