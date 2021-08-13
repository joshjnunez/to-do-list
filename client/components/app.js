import React, { Component } from "react";
import InputBar from "./InputBar"

class App extends Component {
    constructor(props){
    super(props);

    this.state = {
        newItem: '',
        itemsArray: [],
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange= this.handleChange.bind(this);
}

handleChange (item) {
this.setState({ newItem: item})
}

handleClick (newItem) {
    newItem = this.state.newItem;
    console.lo
let newItemArray = this.state.itemsArray.concat(newItem)
this.setState({itemsArray: newItemArray})
}

render(){
    const { itemsArray } = this.state;
    return(
        <div>
            <h1>TO DO LIST APP</h1>
            <input
                type="text"
                id="inputItem"
                placeholder="Add to your to-do list"
                name="list"
                onChange={e => this.handleChange(e.target.value)}
            />
            <button type="submit" onClick = {(item) => this.handleClick(item)}>Add</button>
            <ul>
                {itemsArray.map((item)=>(
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
      

    )
}

}

export default App;