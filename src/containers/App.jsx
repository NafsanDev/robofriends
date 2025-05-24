import React, {Component} from "react";
import SearchBox from "../components/SearchBox.jsx";
import Scroll from "../components/Scroll";
import CardList from "../components/CardList.jsx";

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
                    <Scroll>
                        <CardList robots={filteredRobots}/>;
                    </Scroll>
                </div>
            );
        }
    } 
}

export default App;