import React, { Component } from "react";
import InputBar from "./InputBar"

class App extends Component {
    constructor(props){
    super(props);

    this.state = {
        firstItem: "Go for a walk",
        itemsArray: ["Go for a walk", "Clean room", "Make dinner"],
    }

    this.handleClick = this.handleClick.bind(this);
}


handleClick (listItem) {
let newItemArray = this.state.itemsArray.concat(listItem)
this.setState({itemsArray: newItemArray})
}

render(){
    // const { firstItem, itemsArray } = this.state;
    return(

        <div>
            <h1>TO DO LIST APP</h1>
            <InputBar handleClick={this.handleClick.bind(this)}/>
            <div>
                {/* {firstItem} */}
            </div>
            <div>
            {/* {itemsArray[0]}, {itemsArray[1]}, {itemsArray[2]} */}
            </div>
        </div>
      

    )
}

}

export default App;