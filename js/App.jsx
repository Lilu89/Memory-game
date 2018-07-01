import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import Board from './Board.jsx';
import './../sass/main.scss';
import images from './images.js';

document.addEventListener('DOMContentLoaded', function(){

 class App extends React.Component {
     constructor(props){
         super(props);
         this.state = {
             chosen:[],
             images: [...this.props.images,...this.props.images].sort(() => Math.random()-0.5).map(i => { return{name:i,flipped:false}}),
             locked: false,
         }
     }
     chooseCards = card => {
         const newImages = this.state.images.slice();
         newImages [card.index].flipped = true;

         const newList = this.state.chosen.slice();

         newList.push(card);
         console.log(card);
         this.setState({
             chosen: newList, images: newImages,
         }, () => {
             // console.log(this.state.chosen);
             if (this.state.chosen.length === 2) {
                 const index1 = this.state.chosen[0].index;
                 const index2 = this.state.chosen[1].index;

                 const name1 = this.state.chosen[0].img.name;
                 const name2 = this.state.chosen[1].img.name;
console.log(this.state.chosen);
console.log(name2);
                 this.setState({
                     locked: true,
                     chosen: [],
                     text: '',
                 }, () => {
                     if (name1 !== name2){
                         setTimeout(() => {
                             const newList = this.state.images.slice();
                             console.log(newList,index1,index2);
                             newList[index1].flipped = false;
                             newList[index2].flipped = false;
                             this.setState({ images:newList, locked:false });
                         }, 1000);
                     } else {
                         this.setState({
                             locked: false,
                         })
                     }const flipped = (img) => {
                         return (img.flipped === true);
                     }
                     if (this.state.images.every(flipped)) {
                         this.setState({
                             text: 'Gratulacje, wygrałeś!!!',
                         });
                     }


                 })
     }


             });
        };


     render(){


         const list = this.state.images.map((img, index) =><Card flipped={false} chooseCard={this.chooseCards} locked= {this.state.locked} index={index} img={img}/>);

         return(
             <div>
                 <Board>
                     {list}
                     <h1>{this.state.text}</h1>
                 </Board>
             </div>

         )
     }
 };
    ReactDOM.render(
        <App images={images}/>,
        document.getElementById('app')
    );
});
// https://www.youtube.com/watch?v=gKUUHjEg7mQ 7:59
//     https://www.youtube.com/watch?v=c_ohDPWmsM0 4:16