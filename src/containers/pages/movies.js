import React, {Component}from 'react'
import Aux from '../../hoc/aux';
import Tiles from './tilesloader';
class movies extends Component{

   
    render(){
        
        return(
            
            <Aux>
                <div className="pageTitle">
                    <h2>Popular Movies</h2>
                </div>
                <div className="pageContent">
                    <Tiles type="movie" />
                </div>
                     
            </Aux>
            
        )

    }
    
}
  
export default movies; 