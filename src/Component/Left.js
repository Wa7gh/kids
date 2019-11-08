import React, { Component } from 'react'
 import Name from './Name'
 import site from './site.png'

//  import selectVdio from './selectVdio.png'

export default class Left extends Component {
    render() {
        console.log(this.props)
     var name = this.props.allVidio.map((ele) => {
       
        return <Name name = {ele.snippet.title} handelEventselect ={this.props.handelEventselect} ele ={ele}/> 
    })  
        return (
            <div className="left">
            <div className="Instructors">
                {/* <h2 className="coror"> S E L E C T </h2> */}
                <h4 className="slectdoll"><img src={site}/></h4>
            </div>
           {name}
            
</div>
        )
    }
}

