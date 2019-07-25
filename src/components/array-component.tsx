import * as React from 'react';

export class ArrayComponent extends React.Component <any,any> {
    constructor (props:any) {
        super(props);

        this.state = {
            array : [
            {name:"Stephon",id:1},
            {name:"Dionel",id:2},
            {name:"Sam",id:3}],
            inputValue:''
        };
    }
    updateValue(e:any) {
        const value = e.target.value;
        this.setState({
            // Copy all existing properties
            ...this.state,
            // Overwrites the inputValue property
            inputValue:value
        });
    }

    submitValue() {
        const name = this.state.inputValue;
        // Overwrite the array with the new info
        const newArray = [...this.state.array,
            {name,id:this.state.array.length}]
        this.setState({
            ...this.state,
            array:newArray,
            inputValue: ''
        });    
    }
    render () {
        // Map each name to a <li> item in the <ol>
        const namesList = this.state.array.map((n:any)=>
        (<li key={n.id}>{n.name}</li>));
        return (
            <div>
                <ul>
                    {namesList}
                </ul>
                <input type="text" 
                onChange={(e)=>this.updateValue(e)}>
                </input>
            <button 
            onClick={()=>this.submitValue()}>Submit</button>
            </div>
        );
    }
}

/* We want to render a list whith these names in the format
 of a html list.
*/