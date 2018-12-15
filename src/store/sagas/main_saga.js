import {takeEvery} from 'redux-saga/effects';
import {loadJsonSaga} from './json_saga';
import * as actionTypes from '../actions/actionTypes'

export function* watchLoadJson (){
   yield takeEvery(actionTypes.INIT_Load_Json,loadJsonSaga)
}