import * as actionTypes from '../actions/actionTypes'


const initialState = {
    /*DefaultValue*/    
    movieList: [],
    seriesList:[],
    errorLoading:false,
    jsonLoaded:false
}

const loadJsonFailed = (state, action) =>{
    const newState = {...state}
    newState.errorLoading = true;
    return newState;
}

const dynamicSort = (property) => {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

const loadJson = (state, action) => {
    const newState = {...state}
    let mainArr = action.payLoad.entries
    /*Filter Series Objects and sort on Tiltle alphabatically*/
    let sresult = mainArr.filter(a => a.programType==='series' && a.releaseYear >= 2010);
    newState.seriesList = sresult.sort(dynamicSort("title"));
    //console.log(newState.seriesList)
    /*Filter Movies Objects and sort on Tiltle alphabatically*/
    let mresult = mainArr.filter(a => a.programType==='movie' && a.releaseYear >= 2010);
    newState.movieList = mresult.sort(dynamicSort("title"));
    //console.log(newState.movieList)
    newState.jsonLoaded = true;
    return newState;
};




const json_reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOAD_Json_Success: return loadJson( state, action );
        case actionTypes.LOAD_Json_Failed: return loadJsonFailed( state, action );
        default: return state;
    }
};


export default json_reducer;