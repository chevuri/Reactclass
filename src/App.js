import React from 'react'
import './App.css';
// import Wedding from './Greetings.js';
import SearchBar from './searchbar';
import Greetings from './List'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
        dynamicWedcards:[] //state setup
    }
  }
  render(){
    return(
      <div className='App'>
          <div className="searchinput">
            <SearchBar/>
          </div>
          <Greetings wedCards = {this.state.dynamicWedcards} /> 
      </div>
     )
  }
 componentDidMount(){
    let self=this; //declare self
    fetch('https://api.myjson.com/bins/c2jae')
      .then(function(response){  //
      console.log("this is the API data", response)
    return response.json()
   })
    .then(function(jsonresponse){
      self.setState({
          dynamicWedcards: jsonresponse
      });
      console.log("this is json res", jsonresponse)
    })
    .catch(function(error){ 
      console.log("error")
   })
}}
export default App
    
//     //.then(response => response.json())
//     //.then(data => {
//       // this.setState( {dynamicWedcards : data })
//        //console.log("This is the Data from the API", data)
//     //})
//     //     this.setState=({dynamicWedcards:data})
//     // })
//     .catch(function(error){
//         console.log(error)
//     })
//   }
//   //   })
//   //       console.log("This is the Data from the API",data)
//   //       return response.json()
//   //   })
//   //   // .then(function(jsonResponse){
//   //   //     console.log("This is the JSON response", jsonResponse)
//   //   })
