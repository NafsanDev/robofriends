import React, {useState} from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import { Component } from "react";

class App  extends Component {
    constructor() {
        super();
        this.state = {
            'robots' : [],
            'searchfield' : ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}))
    }
    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
    }
    render (){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots === 0){
            return <h2>Loading</h2>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>;
                </div>
            );
        }
    } 
}

export default App;