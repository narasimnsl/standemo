import React from 'react';
import Conditional from '../../hoc/conditional'
import Background from '../../assets/placeholder.png';
import ImageLoader from 'react-loading-image';
import Spinner from 'react-spinkit';

const tilebutton = (props) => {
    let sectionStyle = {   
        backgroundImage: `url(${Background})`,
        backgroundRepeat  : 'no-repeat',
       backgroundPosition: 'center',
    };
    
    
    return(
       
        <div className="tilesContainer">
           <div className="tilesButtonContainer">
            <button  className="tilesButton" onClick={props.clickHandler} style={ sectionStyle }>
                <Conditional if={props.imgsource}>
                    <ImageLoader 
                        src={props.imgsource}
                        loading={() => <Spinner className="pre_spinner" name="ball-clip-rotate-multiple" color="white"/>}
                        error={() => <div className="errorImgLoad">Error</div>}
                    />
                </Conditional>
                <Conditional if={props.children}>
                        {props.children}
                </Conditional>
                </button>
                <p className ="tilesTitle">{props.title}</p>
           </div>
            
        </div>
            
    )

}

export default tilebutton;