import * as React from 'react';
import { ClickerDisplay } from './clicker-display-component';
import { ClickerButton } from './clicker-button-component';
import { ReduceButton } from './reduce-button-component';

export class DecrementComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            clicks: 0
        }
    }

    increment(amount: number) {
        this.setState({
            clicks: this.state.clicks + amount
        });
    }

    render() {
        return (
            <div>
                {/* <div>{this.state.clicks}</div> */}
                <ClickerDisplay clicks={this.state.clicks} />
                <ReduceButton
                    increment={(x: number) => this.increment(x)}
                    clicks={this.state.clicks} />
                {/* <ClickerButton increment={this.increment.bind(this)} /> */}
            </div>
        )
    }
}