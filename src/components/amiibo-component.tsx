import React from  'react';
import { link } from 'fs';
import Axios from  'axios';

interface IAmiiboState {
    character:string,
    gameSeries:string,
    imageUrl : string,
    inputName:string
}

export class AmiiboComponent extends React.Component<any,IAmiiboState> {
    constructor(props:any) {
        super(props);

        this.state = {
            character:'',
            gameSeries:'',
            imageUrl:'',
            inputName:''        }
    }

    updateValue(e:any) {
        const name = e.target.value;
        this.setState({
            ...this.state,
            inputName:name
        })
    }

    searchAmiibo() {
        const url = 
        `https://www.amiiboapi.com/api/amiibo/?name=${this.state.inputName}`;
        // http request (promise handling)
        // Receive a data payload from axios
        Axios.get(url)
        .then(payload=>{
            console.log(payload);
            this.setState({
                ...this.state,
                character: payload.data.amiibo[0].character,
                gameSeries : payload.data.amiibo[0].gameSeries,
                imageUrl:payload.data.amiibo[0].image
            })
        }).catch(() =>{
            this.setState({
                character:"Not found",
                imageUrl:"",
                gameSeries:"Xbox 260"
            })
        })
    }

    render () {
        return (
            <div>
                <div id="display-container">
                    {
                        this.state.character &&
                        <h2 id='display-info'>
                            Character name: {this.state.character}
                            <br/>
                            Game series: {this.state.gameSeries}
                        </h2>
                    }
                    <img src={this.state.imageUrl} alt="" id="amiibo-img"/>
                    <div id="poke-submit-container">
                    <label htmlFor="search-amiibo" id="search-label">Enter amiibo name: </label>
                        <input type="text" name="" id="search-amiibo"
                        value={this.state.inputName}
                        placeholder="ex: mario"
                        onChange={(e:any)=>this.updateValue(e)}/>
                        <button id="search-button" onClick={()=>this.searchAmiibo()}>
                            Search</button>
                    </div>
                </div>
            </div>
        );
    }
}