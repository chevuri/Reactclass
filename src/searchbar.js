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
            <div className="Hello">
                <input type="text" placeholder="Search or Type Url" value={this.state.someValue} onChange={event=>this.newFunction(event)}/>
                <div className='cart-cont'>
                    <span className='cart-font' > {this.props.cart.length} </span>
                </div>
            </div>
        );
    }
}
export default SearchBar
