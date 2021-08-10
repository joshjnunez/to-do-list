import React, {useState, useEffect} from "react";

const InputBar = ({handleClick}) => {

// Need to handleChange within Input and then pass event to handleClick 
// setState in app.js for new array

return(
<div>
<input
    type="text"
    id="inputItem"
    placeholder="Add to your to-do list"
    name="list"
    />
<button type="submit" onClick = {(e) => handleClick(e.target.value)}>Add</button>

</div>
  
)
}

export default InputBar;