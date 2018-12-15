import React, {Component}from 'react'
import Aux from '../../hoc/aux'
import Tiles from './tilesloader';
class series extends Component{

   
    render(){
        
        return(
            
            <Aux>
                <div className="pageTitle">
                    <h2>Popular Series</h2>
                </div>
                <div className="pageContent">
                    <Tiles type="series" />
                </div>
                     
            </Aux>
            
        )

    }
    
}
  
export default series; 