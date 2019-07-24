import * as React from 'react';
import { thisExpression } from '@babel/types';


export class FunComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            funImages : [],
        }
    }
    retrieveFunImage = async () => {
        const funImage : any = await fetch('https://source.unsplash.com/random');
        const newFunImages = this.state.funImages;
        newFunImages.push(funImage.url);
        this.setState({funImages: newFunImages});
    }
    handleClick = ((event: React.MouseEvent<HTMLButtonElement>) => {
        alert("This game is really fun, are you sure you want to continue?");
        setInterval(this.retrieveFunImage,500);
    });
    render() {
        return (
            <div>
                <button className ='btn btn-primary' onClick = {this.handleClick}>Click ME!!</button>                
                {this.state.funImages.map((img : any) =><img src ={img} width = '250px' height = '250px'/>)}

            </div>
        );
    }
}

export default FunComponent;