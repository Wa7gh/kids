import React, { Component } from 'react'
import './Rightside.css'
import { FormControl, Form,Card , Nav } from 'react-bootstrap';

export default class Right extends Component {

    state={}

    render(props) {     
  var { EventSelect} = this.props
  console.log(this.props)
  console.log(EventSelect.id.videoId)
  console.log(EventSelect.snippet.description)
  
  let link = "https://www.youtube.com/embed/"+ EventSelect.id.videoId;
 
        return (
            <div className="rihgt">
            <div className="container">

            <iframe key ={0} width="660" height="415" src={link}
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen></iframe> 

                            
                   </div> 
                   <div className="des">
                   <h2>DESCRIPTION</h2>    
                   <p > {EventSelect.snippet.description}</p>   
                       
                 </div>
                 
               </div>
        )
    }
}
