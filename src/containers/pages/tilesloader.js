import React, {Component}from 'react'
import{connect} from 'react-redux';
import Aux from '../../hoc/aux';
import * as actions  from '../../store/actions/actions'
import Conditional from '../../hoc/conditional';
import Spinner from '../../components/layout/loader';
import TButton from '../../components/elements/tilebuttons'


class tilesloader extends Component{

    state = {
        displayList:[],
        listLoaded:false
   }

   componentDidMount() { 
    //console.log('From Movies: componentDidMount')
        if(!this.props.rstate.jsonLoaded){
            this.props.loadJsonfromURL(); 
        }else{
            this.setDisplayTiles();
        }
    
    }
    componentDidUpdate(prevProps){
        //console.log('From Movies: componentDidUpdate')
        if(this.props.rstate.jsonLoaded && !this.state.listLoaded){
          this.setDisplayTiles();
        }
    }

    setDisplayTiles(){       
        let list = this.props.type === 'movie'? this.props.rstate.movieList: this.props.rstate.seriesList;
        this.setState({
          displayList:list,
          listLoaded:true
        });
    }

    render(){
        let ldInfo= this.props.rstate.jsonLoaded 
        let ldErr= this.props.rstate.errorLoading
        let tileList = this.state.displayList.slice(0, 21);

        function renderTileList(list,key) {
            return (
              <TButton
                key= {key}
                title ={list.title}
                imgsource={list.images['Poster Art'].url}
              />
            );
        }

        return(
            
            <Aux>
                <Conditional if={!ldInfo && !ldErr}>
                    <Spinner/>
                </Conditional>
                <Conditional if={ldErr}>
                    <p>Something went wrong...</p>
                </Conditional>
                <Conditional if={ldInfo}>
                     {tileList.map(renderTileList)}
                </Conditional>
                        
            </Aux>
            
        )

    }
    
}
const mapStateToProps = (state) =>{
    return{ 
        rstate:state
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        loadJsonfromURL: () =>
        dispatch(actions.initLoadJson())
    };
        
  };
  
export default connect(mapStateToProps,mapDispatchToProps)(tilesloader); 