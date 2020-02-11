import React, {Component} from 'react';



export default class GameForm extends Component{
    constructor(){
        super();
        
        this.state = {
            name: "",
            type: "",
            price: ""
        }
      }


      addGame(event){

      //que hace esto -- event.preventDefault();
        event.preventDefault();
        console.log(this.state.name);
        let game = {
            id: Math.floor(Math.random() * 255),
            name: this.state.name,
            type: this.state.type,
            price: this.state.price
        }
        this.props.onSubmit(game);
    }

      handleChange(event){
        this.setState({[event.target.id]:
            event.target.value});
      }


    render(){

        return (
            <div>
                <h1> .</h1>
                <h2>Add Game</h2>
                <form onSubmit={this.addGame.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}></input>                      
                    </div>

                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <input type="text" className="form-control" id="type"
                        value={this.state.type}
                        onChange={this.handleChange.bind(this)}></input>                      
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="text" className="form-control" id="price"
                        value={this.state.price}
                        onChange={this.handleChange.bind(this)}></input>                      
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
