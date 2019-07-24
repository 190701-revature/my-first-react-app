import * as React from 'react';

export class ReduceButton extends React.Component<any, any> {
    render() {
        return (
            <div>
                <button
                    // Binds a function to the click event using React
                    onClick={() => this.props.increment(-1)}
                    className="btn btn-primary"
                >Click</button>
                {
                    // This will conditionally display the second button only
                    // when the expression 'this.props.clicks > 15' is true
                    this.props.clicks > 15 &&
                    <button
                        // Binds a function to the click event using React
                        onClick={() => this.props.increment(5)}
                        className="btn btn-primary"
                    >Big Click</button>
                }

            </div>


        )
    }
}