import React, {Component}from 'react'
import Aux from '../../hoc/aux'
import { withRouter } from "react-router";
import TButton from '../../components/elements/tilebuttons'
class intro extends Component{

    seriesBtnHandler = () => {
        this.props.history.push("/series"); 
    }
    moviesBtnHandler = () => {
        this.props.history.push("/movies"); 
    }

    render(){
        
        return(
            
            <Aux>
                <div className="pageTitle">
                    <h2>Popular Titles</h2>
                </div>
                <div className="pageContent">
                     <TButton title="Popular Series" clickHandler={this.seriesBtnHandler}>SERIES</TButton>
                     <TButton title="Popular Movies" clickHandler={this.moviesBtnHandler}>MOVIES</TButton>
                     
                </div>
                     
            </Aux>
            
        )

    }
    
}





  
  export default withRouter(intro); 