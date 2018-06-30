import React from 'react'
import './App.css';
// import Wedding from './Greetings.js';
import SearchBar from './searchbar';
import Greetings from './List'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      dynamicWedcards:[],
      cart:[], //state setup
      searchString:"This is from App.js"
        
    }
  }

  updateSearchString(searchStringAsAnInput){
    this.setState({
        searchString: searchStringAsAnInput
    })
  }

  handleAddToCart(newProduct){
    console.log("This is the message from App and this is the product that is clicked",newProduct)
    // var cart = []
    // cart.push("item")
  /*  let existingCart = this.state.cart
    existingCart.push(newProduct)
    this.setState({
      cart: existingCart
    }) */
    let newCart = [...this.state.cart,newProduct]
    this.setState({
      cart: newCart
    })

}
handleRemoveCart(newProduct){
  debugger;
  console.log("This is deleted",newProduct)
    let newCart = [...this.state.cart,newProduct] 
    let editCart = newCart.filter(element => element !== newCart[newCart.length-1])
    this.setState({
    cart: editCart
    })

  }
  render(){
    return(
      <div className='App'>
          <div className="searchinput">
            <SearchBar searchString ={this.state.searchString} cart={this.state.cart} thisIsFunctionAsProp_updateSearchString={(searchStringInput)=>this.updateSearchString(searchStringInput)}/>
          </div>
          <Greetings cart = {this.state.cart} wedCards = {this.state.dynamicWedcards}  handleAddToCartInGreetings= {(wedCard)=>this.handleAddToCart(wedCard)} handleRemoveFromCartInGreetings= {(wedCard)=>this.handleRemoveCart(wedCard) } /> 
      </div>
     );
  }
 componentDidMount(){
    let self=this; //declare self
    fetch('https://api.myjson.com/bins/gy87m')
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
