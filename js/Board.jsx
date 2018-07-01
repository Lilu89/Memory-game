import React from "react";


class Board extends React.Component{
    render(){
        return(
            <div>
                <div className="board">{this.props.children}</div>
            </div>
        )
    }

}
export default Board;