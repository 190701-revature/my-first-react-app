import * as React from 'react';

export class RollerDisplay extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            // This will change the style based on the value of
            // this.props.clicks based on the ternary operation below
            <div style={{ color: (this.props.result == 20 ? 'green' : this.props.result == 1 ? 'red' : 'black') }}>
                {this.props.result}
            </div>
        );
    }
}