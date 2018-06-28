import React from 'react'

class SearchBar extends React.Component {
    constructor(){
    super()
    this.state={someValue:""}
    this.newFunction = this.newFunction.bind(this)
    }   
    newFunction(event){
        console.log(event.target.value) //synthetic event 
        this.setState({someValue:event.target.value})
    }
    render(){
        return(
            <div>
                <input type="text" className="Hello" placeholder="Search or Type Url"value={this.state.someValue} onChange={this.newFunction}/>
            </div>
        );
    }
}
export default SearchBar
