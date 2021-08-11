import React, {useState, useEffect} from "react";

const InputBar = ({handleClick}) => {
// using hooks to set state 
const [listItem, setListItem] = useState('');


// need to figure out a way to pass new list item into array on ItemsList.js

const consoleLogValue = () => {
    console.log(listItem);
}

return(
<div>
<input
    type="text"
    id="inputItem"
    placeholder="Add to your to-do list"
    name="list"
    onChange={e => setListItem(e.target.value)}
    />
<button type="submit" onClick = {e => consoleLogValue(e.target.value)}>Add</button>


</div>
  
)
}

export default InputBar;