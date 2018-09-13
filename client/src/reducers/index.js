import { combineReducers } from 'redux';
import dataList from './Users';
import singleData from './SingleData';
import page_num from './Page_num';

const reducers = combineReducers({
    dataList, singleData, page_num
})

export default reducers;