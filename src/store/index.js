import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from '../reducers'
import { createForms } from 'react-redux-form'
import models from '../models'

const store = createStore(combineReducers({
        rootReducer,
        ...createForms({
            intake: models.intakeForm,
            signUp: models.signUp
        })
    })
);

export default store;