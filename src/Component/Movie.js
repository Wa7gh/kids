import React, { Component } from 'react'
import axios from 'axios';
import Right from './Right';
import Left from './Left'
const API = 'AIzaSyAfoWmHn9zpuFuFlIrCU5d4IAtKVYPnvB0'
const channelID = 'UCoBpC9J2EcbAMprw7YjC93A'
const result =3;
// var finalURL =`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=${result}&q=surfing&key=${API}`
var finalURL=`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCx27Pkk8plpiosF14qXq-VA&maxResults=25&q=surfing&key=AIzaSyAfoWmHn9zpuFuFlIrCU5d4IAtKVYPnvB0`
export default class Movie extends Component {


 state={
        allVidio : [],
     
      EventSelect: null
    }
    
  
componentDidMount(){

      fetch(finalURL)
      .then((response)=> response.json())
      .then((res)=> {
      console.log(res.items)
             this.setState({
              allVidio : res.items
             })
            
      // console.log(allVidio)
      })
 
      .catch((error)=> {
     console.error(error);
      });
        
    }
  
    handelEventselect =( ele =>{
  
      this.setState ({
        EventSelect  : ele
      })
    })

  
   

  


  
    
    render() {
        console.log(this.state.allVidio)
        
      return (
        <div>
          <div className= "contenerpord"> 
          <Left allVidio = {this.state.allVidio} handelEventselect ={this.handelEventselect} />
      {this.state.EventSelect !== null && <Right EventSelect = {this.state.EventSelect} /> }
    
          </div>
        </div>
      
      )
    }
}
//   }
// export default class Listing extends Component {
//   constructor(props){
//       super(props);

//       this.state = {
//         allVidio :[],
//         selectVidio :"",
  
  
//     }
  
//      this.clicked=this.clicked.bind(this)
//   }
 
//   componentDidMount(){

//       fetch(finalURL)
//       .then((response)=> response.json())
//       .then((res)=> {
//           console.log(res.items)
//           this.setState({
//               allVidio : res.items
//           })
      
//       })
//       .catch((error)=> {
//       console.error(error);
//       });

//   }

//   clicked=()=>{
// console.log(this.state.allVidio[0].id.videoId);

//  this.setState({
//      selectVidio: "https://www.youtube.com/embed/" +this.state.allVidio[0].id.videoId
//  })

//   }


//     render() {
//         console.log(this.state.allVidio)
//         console.log(this.state)
//         // var  videoList = this.props.video.map(item=> {
//         //     return <Right video={item.snippet.title} />
//         // })
//         return (
//             <div>
//              { this.state.allVidio !=null && <Right video={this.state.allVidio}/>}
//                 {/* {this.state.allVidio.map((item )=><Right allVidio={item}/>  )}   */}


//                 <button onClick={this.clicked}>get video</button>
//                 <iframe key ={0} width="560" height="315" src={this.state.selectVidio}
//                             frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
//                             allowFullScreen></iframe> 


          




//                     {
//                         // this.state.result.map((link,i)=> {
//                         //     console.log(link);
//                         //     var frame =   <iframe key = {i} width="560" height="315" src={link}
//                         //     frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
//                         //     allowFullScreen></iframe>

//                         //     return frame;
//                         // })
//                     }
//                     {/* {this.frame} */}
               
              
//          </div>
//         )
//     }
// }
