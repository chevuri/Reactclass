import React from 'react'
import './App.css';
// import Wedding from './Greetings.js';
import SearchBar from './searchbar';
import Greetings from './List'

class App extends React.Component{
  render(){
    return(
         <div className="App">   
            <div className="searchinput">
                <SearchBar/>
                </div>
            <Greetings/>
        </div>
        
    );
  }

}
export default App