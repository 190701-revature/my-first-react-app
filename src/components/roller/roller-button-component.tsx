import * as React from 'react';

export class RollerButton extends React.Component<any, any> {
    render() {
        return (
            <div>
                <button
                    // Binds a function to the click event using React
                    onClick={() =>
                        this.props.randomize(Math.round(Math.random() * 20 + 1))}
                    className="btn btn-primary"
                >Roll</button>
                {
                    // This will conditionally display the second button only
                    // when the expression 'this.props.clicks > 15' is true
                    this.props.result === 20 &&
                    <p>Critical!</p>
                }
                {
                    // This will conditionally display the second button only
                    // when the expression 'this.props.clicks > 15' is true
                    this.props.result === 1 &&
                    <p>Crit-Fail!</p>
                }

            </div>


        )
    }
}