import jreducer from './json_reducer';
import * as actionTypes from '../actions/actionTypes'



describe('json_reducer', () => {
    it('should return init state if nothing is passed',() =>{
        expect(jreducer(undefined,{})).toEqual(
            {
                /*DefaultValue*/    
                movieList: [],
                seriesList:[],
                errorLoading:false,
                jsonLoaded:false
            }
        )
    });

    it('should return movielist with 1 entry with sample date in payload ',() =>{
        let initialState = {  
             movieList: []
        }
        let sampleData = {
            entries: [{title: "Wolf Creek",programType: "movie",releaseYear:2016}]
        }
        expect(jreducer(
            initialState,
            {type:actionTypes.LOAD_Json_Success,payLoad:sampleData}
            )).toMatchObject(
            {
                movieList: [{title: "Wolf Creek",programType: "movie",releaseYear:2016}]   
            }
        )
    });

    it('should return serieslist Empty when sample date with year less than 2010 in payload',() =>{
        let initialState = {  
            seriesList: []
        }
        let sampleData = {
            entries: [{title: "Being Erica",programType: "series",releaseYear:2009}]
        }
        expect(jreducer(
            initialState,
            {type:actionTypes.LOAD_Json_Success,payLoad:sampleData}
            )).toMatchObject(
            {
                seriesList: []   
            }
        )
    });

    it('should return serieslist Sorted when sample date  in payload',() =>{
        let initialState = {  
            seriesList: []
        }
        let sampleData = {
            entries: [{title: "Ringer",programType: "series",releaseYear:2012},{title: "Being Erica",programType: "series",releaseYear:2012}]
        }
        expect(jreducer(
            initialState,
            {type:actionTypes.LOAD_Json_Success,payLoad:sampleData}
            )).toMatchObject(
            {
                seriesList: [{title: "Being Erica",programType: "series",releaseYear:2012},{title: "Ringer",programType: "series",releaseYear:2012}]  
            }
        )
    });


});