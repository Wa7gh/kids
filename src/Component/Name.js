import React from 'react'

const Name = (props) => {
    return (
        <div>
               <div className="namebox" onClick ={()=>props.handelEventselect(props.ele)} ><h5 className="coror" > {props.name} </h5></div> 
       </div>
    )
}

export default Name
