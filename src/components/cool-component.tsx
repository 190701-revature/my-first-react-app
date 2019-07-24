import * as React from 'react';
import '../App.css'
import yes from '../assets/coolguy.jpg'
import no from '../assets/sadcat.jpg'
import maybe from '../assets/idk.png'


export class CoolComponent extends React.Component<any,any>{
    constructor(props: any) {
        super(props);
        this.state = {
            image: maybe
        } 
    }

    
    coolOrNah(){
        let x = Math.random();
        x = Math.floor(x*100);
        if(x%2 === 0){
            this.setState({image: yes});
            this.setState({caption: "You are indeed a cool guy/girl!"});
        }
        else {
            this.setState({image: no});
            this.setState({caption: "Cough Cough...Maybe try again"});
        }
    }

    render() {

        return(
            <div className='coolContainer'>
                <h3  className = "coolStuff">Are You A Cool Guy/Girl?</h3>
                <img src = {this.state.image}></img>
                <h5>{this.state.caption}</h5>
                <button className="btn btn-primary coolStuff" onClick={() => this.coolOrNah()}>Let's See</button>

            </div>
        )
    }
}