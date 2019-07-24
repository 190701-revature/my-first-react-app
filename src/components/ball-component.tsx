import * as React from 'react';

export default class BallComponent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            inverted: false,
            size: 200
        };
    }

    invert() {
        this.setState({
            ...this.state,
            inverted: !this.state.inverted
        });
    }

    resize(e?: any) {
        this.setState({
            ...this.state,
            size: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div id="button-container">
                    <button
                        onClick={() => this.invert()}
                    >Invert</button>
                    <input type="number" onChange={(e) => this.resize(e)} value={this.state.size}></input>

                </div>
                <div className={(this.state.inverted ? 'invert' : '') + ' ball-container'}>

                    <div
                        className="ball"
                        style={{ width: (this.state.size) + 'px', height: (this.state.size) + 'px' }}></div>
                </div>
            </div>

        );
    }
}
