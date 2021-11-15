import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from '../reducers/RootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/RootSaga'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducers,
        compose(
            applyMiddleware(sagaMiddleware),
            //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
    sagaMiddleware.run(rootSaga)
    // store.dispatch({ type: 'LOGIN' })
    return store;
}

export default configureStore;