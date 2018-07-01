import React from "react";
import ReactDOM from "react-dom";

class Card extends React.Component{
    constructor(props) {
        super(props);
        //
        // this.state = {
        //     flipped: this.props.flipped,
        //
        // }
    }
    handleClick = () => {
        if(this.props.locked === false && this.props.img.flipped === false){
            // this.setState ({
            //         flipped:!this.state.flipped,
            //
            //
            //     }
            //
            // )
            console.log(this.props.img,this.props.index);
            this.props.chooseCard({img:this.props.img,index:this.props.index})

        }

    }

    render() {

        return(
            <div className="card"><img  onClick={this.handleClick}  src = {this.props.img.flipped?'./image/'+this.props.img.name:'./image/background2.jpeg'}/></div>
        )
    }


}
export default Card;