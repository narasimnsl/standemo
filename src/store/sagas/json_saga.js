import {put} from 'redux-saga/effects'
import * as actions from '../actions/actions'
import axios from 'axios'

export function* loadJsonSaga(){
    
    try {
        const response = yield axios.get(
          "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
        )
        yield put(actions.loadJsonSuccess(response.data))
        
      } catch (error) {
         yield put(actions.loadJsonFalied());
      }
    
    
}