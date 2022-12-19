import React, { useState } from 'react'

function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        //still want to eliminate the default behaviour of our form submittal
        e.preventDefault()
        //addColor, the function we just built should be avaiable within props
        props.addColor(input)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm
