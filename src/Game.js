import React, {Component} from "react";

class Result extends Component{

    state ={
        name:'Mario',
        winner:true
    }
    render(){

        return this.state.winner && <h1> Bravo {this.state.name}</h1>

        // let resulat;

        // if(this.state.winner){

        //     resulat = <h1>Bravo {this.state.name}</h1>
        // }else{

        //     resulat =  <h1>Rate !!!!!</h1>

        // }

        // return resulat;

    }
}
export default Result;