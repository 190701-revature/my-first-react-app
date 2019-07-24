import * as React from 'react';
import { JessicaButton } from './jessica-button-component';
import { JessicaDisplay } from './jessica-display-component';
export class JessicaComponent extends React.Component<any, any> {
    
    constructor(props: any) {
        var d = new Date();
        var n = d.getSeconds();
        super(props);
        this.state = {
            time: n
        }
    }
    change() {
        var d = new Date();
        var n = d.getSeconds();
        this.setState({
            time: n
        });
    }
    render() {
        return (
            <div>
                <JessicaDisplay time ={this.state.time} />
                <JessicaButton  change={() => this.change()}/>
            </div>
        );
    }
}

export default JessicaComponent;