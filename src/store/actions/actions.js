import * as actionTypes from './actionTypes'

export const initLoadJson = () =>{
    return{
        type:actionTypes.INIT_Load_Json
    };
}

export const loadJsonSuccess = (jfile) =>{
    if(jfile){
        return{
            type:actionTypes.LOAD_Json_Success,
            payLoad:jfile
        };
    }else{
        return null;
    }
    
}

export const loadJsonFalied = () =>{
    return{
        type:actionTypes.LOAD_Json_Failed,  
    };
}


