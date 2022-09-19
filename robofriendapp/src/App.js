import React, { Component } from 'react';
import CardList from './CardList';

import SearchBox from './SearchBox';
import Scroll from './Scroll';
import { robots } from './robots';



class App extends Component {

    constructor(){
        
        super()

        this.state={
            robots: robots,
            searchfield:''
        }
    }

        onSearchChange = (event)=> {
         this.setState({searchfield:event.target.value})
        

        
    }

    render(){
             const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
    return (
        <div className='tc'>

          <h1>RoboFriends</h1>  
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
         <CardList robots={filteredRobots}/>
         </Scroll>
      </div>

    );
}

}
export default App;