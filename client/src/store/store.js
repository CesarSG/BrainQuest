import { configureStore, combineReducers } from '@reduxjs/toolkit';

import questionReducer from '../reducer/questions_reducer';
import resultReducer from '../reducer/result_reducer';

const rootReducer = combineReducers({
    questions: questionReducer,
    result: resultReducer
})

export default configureStore({ reducer: rootReducer})