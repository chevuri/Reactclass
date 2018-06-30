import React from 'react'
// import './App.css';
import PropTypes from 'prop-types'
// import ListofCards from './List'

class Wedding extends React.Component {
  render(){
    return(
      <div className="wedCard">
            <div className="card-image">
                <img src={this.props.cardImage} alt=""/>
            </div>
            <h4 className="card-name">{this.props.cardName}</h4>
            <h4 className="card-price">$ {this.props.cardPrice}</h4>
            {
                this.props.isAddedToCart ?
                <div className="addCart">
                <button onClick={()=>{ this.props.handleRemoveCartInWedding(this.props.cardId) }}className="delete" type="button"> Remove </button>
                </div>:
                <div className="addCart">
                <button onClick={()=>{ this.props.handleAddToCartInWedding(this.props.cardId) }}className="added" type="button"> Add to Cart </button>
                </div>
            }         
     </div>
    )
  }
}
Wedding.propTypes= {
  cardName:PropTypes.string,
  cardPrice:PropTypes.number,
  cardImage:PropTypes.string,
  cardId:PropTypes.number,
}

Wedding.defaultProps= {
  cardPrice:7,
  cardImage:"https://www.siasat.com/wp-content/uploads/2017/11/missing.jpg"
}
// class Greetings extends React.Component{
//   render(){
//     return(

//       <div className="container">
//           <Wedding cardName={"Mr & Mr's"} cardPrice={4} cardImage={"https://cdn.notonthehighstreet.com/fs/01/67/8375-761a-40ab-a3a8-9dde72ae75bd/original_personalised-mini-magnets-wedding-card.jpg"}/>
//           <Wedding cardName={"Anniversary"} cardPrice={10} cardImage={"http://1.bp.blogspot.com/_2f4PJXMY7Xg/TO4UCDTxUzI/AAAAAAAAAaY/4bj1LMHXiSE/s1600/DD0011.jpg"}/>
//           <Wedding cardName={"Happy couple"} cardPrice={12} cardImage={"https://bodasyweddings.com/wp-content/uploads/2017/03/Funny-engagement-or-wedding-card.jpg"}/>
//           <Wedding cardName={"Got enaged card"} cardPrice={15} cardImage={"https://garlanna.com/wp-content/uploads/2017/09/G2337-Engaged-card-600x600.jpg"}/>
//           <Wedding/>
//         </div>
//     )
//   }}
export default Wedding