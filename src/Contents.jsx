import { Component } from "react";

class Contents extends Component{
    render(){
        return(
            <div className="w-100 tc">
                <p className="f3">{this.props.greeting}</p>
            </div>
        )
    }
}

export default Contents;