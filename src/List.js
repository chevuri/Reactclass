import React from 'react'
import Wedding from './Greetings'

/*const wedCards = [ // upload JSON object in myson for fake API//
  {
    cardName: "Mr & Mr's",
    cardPrice: 15,
    cardImage: "https://cdn.notonthehighstreet.com/fs/01/67/8375-761a-40ab-a3a8-9dde72ae75bd/original_personalised-mini-magnets-wedding-card.jpg"
  },
  {
    cardName: 'Anniversary',
    cardPrice: 5,
    cardImage: "http://1.bp.blogspot.com/_2f4PJXMY7Xg/TO4UCDTxUzI/AAAAAAAAAaY/4bj1LMHXiSE/s1600/DD0011.jpg"
  },
  {
    cardName: 'Happy couple',
    cardPrice: 20,
    cardImage: "https://bodasyweddings.com/wp-content/uploads/2017/03/Funny-engagement-or-wedding-card.jpg"
  },
  {
    CardName: 'Got enaged card',
    cardPrice: 10,
    cardImage:"https://garlanna.com/wp-content/uploads/2017/09/G2337-Engaged-card-600x600.jpg"
  },
]*/

const Greetings = (props) =>{
    return(
      <div className="wedCards">
            {
              props.wedCards.map(function(eachWedding){
                  return <Wedding key={eachWedding.id} cardName={eachWedding.cardName} cardPrice={eachWedding.cardPrice} cardImage={eachWedding.cardImage}/>
              })
            }
      </div>
    )
  }
export default Greetings

// class Greetings extends React.Component {
//   render(){
//     return(
//       <div className="wedCards">                                              //second assignment 
//             {
//               this.props.wedCards.map(function(eachWedding){
//                   return <Wedding key={eachWedding.id} cardName={eachWedding.cardName} cardPrice={eachWedding.cardPrice} cardImage={eachWedding.cardImage}/>
//               })
//             }
//       </div>
//     )
//   }
// }
// export default Greetings
