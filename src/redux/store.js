import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const initialState = {}

const middleWare = [thunk]

export default createStore(rootReducer,initialState,
    compose(applyMiddleware(...middleWare),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )