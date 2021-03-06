import React from 'react';
import Axios from 'axios';

interface EdMovieState {
    title: string,
    rated: string,
    released: string,
    runtime: string,
    genre: string,
    actors: string,
    plot: string,
    poster: string,
    inputValue: string
}

export class EdImdbComponent extends React.Component<any, EdMovieState> {
    constructor(props: any) {
        super(props);

        this.state = {
            title: '',
            rated: '',
            released: '',
            runtime: '',
            genre: '',
            actors: '',
            plot: '',
            poster: '',
            inputValue: ''
        };
    }

    updateValue(e: any) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            inputValue: value
        });
    }

    searchMovie() {
        const url = `http://www.omdbapi.com/?apikey=71b08367&t=${this.state.inputValue}`;

        // Axios sends a GET request to the URL of the string passed to the
        // .get function.  This function returns a promise. We should call
        // .then to provide handling logic for when the promise resolves.
        // Alternatively, we could use async/await to handle the response.

        // We will receive a data payload from Axios - all we need to do is
        // map the payload properties we are interested in, to a new state object
        Axios.get(url).then(payload => {
            //payload.data.name
            //payload.data.id
            //payload.data.sprites.front_default
            //payload.data.types.map(o => o.type.name)
            this.setState({
                ...this.state,
                title: payload.data.Title,
                rated: payload.data.Rated,
                released: payload.data.Released,
                runtime: payload.data.Runtime,
                genre: payload.data.Genre,
                actors: payload.data.Actors,
                plot: payload.data.Plot,
                poster: payload.data.Poster
            })
        });
    }

    render() {
        // Convert each pokemon type to a list item with the type string
        // within it

        return (
            <div className="App">
                <div>
                    <div style={{textAlign: "center"}}>
                    {this.state.title && // only display h2 if id is truthy
                        <h2 >{this.state.title}</h2>
                    }
                        <img src={this.state.poster}></img>
                    </div>
                    <div style={{textAlign: "center"}}>
                    {this.state.title &&
                        <p>Released: {this.state.released}, Rated: {this.state.rated}</p>
                    }
                     {this.state.title &&
                        <p>Runtime: {this.state.runtime}, Genre: {this.state.genre}</p>
                     }
                    {this.state.title &&
                        <p>Actors: {this.state.actors}</p>
                    }
                    {this.state.title &&
                        <p>Plot: {this.state.plot}</p>
                    }
                    </div>
                </div>
                <div>
                    <p style={{textAlign:"center"}}>Search Movie Titles</p>
                    <input type="text"
                        value={this.state.inputValue}
                        onChange={(e: any) => this.updateValue(e)}></input>
                    <button onClick={() => this.searchMovie()}>Submit</button>
                </div>
            </div>
        );
    }

}