import React from 'react'

export default function Input(props) {
    return (
        <div >
            <form  onSubmit={(e)=>e.preventDefault()}>
                <input  type='text' value={props.value} onChange={props.onChange} placeholder="Add Something"/>

                <button onClick={props.onClick}  >Add</button>
                               </form>
        </div>
    )
}
