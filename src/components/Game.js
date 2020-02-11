import React, {Component} from 'react';


export default class Game extends Component{
    render(){
        let game = this.props.game;
        return (
            <tr>
                <td>{game.name}</td> 
                <td>{game.type}</td>  
                <td>{game.price}</td> 
            </tr>
        );
    }
}