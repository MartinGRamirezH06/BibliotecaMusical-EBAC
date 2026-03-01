import React,{Component} from "react";

class Song extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="Song">
                <h4>{this.props.titulo}</h4>
                <p>{this.props.autor}</p>
                <p>{this.props.duracion}</p>
            </div>
        )
    }
}
export default Song
