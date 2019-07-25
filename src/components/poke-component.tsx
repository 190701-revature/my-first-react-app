import React from  'react';
import { link } from 'fs';
import Axios from  'axios';

interface IPokeState {
    name:string,
    id:number,
    types:string[],
    imageUrl: string,
    inputValue:string
}

export class PokeComponent extends React.Component<any,IPokeState> {
    constructor(props:any) {
        super(props);

        this.state = {
            name:'',
            id:0,
            types:[],
            imageUrl:'',
            inputValue:''
        }
    }

    updateValue(e:any) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            inputValue:value
        })
    }

    searchPoke() {
        const url = 
        `https://pokeapi.co/api/v2/pokemon/${this.state.inputValue}`;
        // http request (promise handling)
        // Receive a data payload from axios
        Axios.get(url)
        .then(payload=>{
            console.log(payload);
            // payload.data.name
            // payload.data.id
            // payload.data.sprites
            // payload.data.types.map(o=>o.type.name)
            this.setState({
                ...this.state,
                name: payload.data.name,
                id : payload.data.id,
                imageUrl:payload.data.sprites.front_default,
                types : payload.data.types.map((o:any)=>o.type.name)
            })
        }).catch(() =>{
            this.setState({
                name:"Not found",
                id:Math.PI,
                imageUrl:"",
                types:[]
            })
        })
    }

    render () {
        const typeList = this.state.types.map(
            type=>{
                return (<li>{type}</li>)
            }
        );
        return (
            <div>
                <div id="display-container">
                    {
                        this.state.id &&
                        <h2>
                            #{this.state.id}:{this.state.name}
                        </h2>

                    }
                    {/* Display the types as list */}
                    <ol>{typeList}</ol>
                    <img src={this.state.imageUrl} alt=""/>
                </div>
                <div id="poke-submit-container">
                    <input type="text" name="" id=""
                    value={this.state.inputValue}
                    onChange={(e:any)=>this.updateValue(e)}/>
                    <button onClick={()=>this.searchPoke()}>
                        Submit</button>
                </div>
            </div>
        );
    }
}