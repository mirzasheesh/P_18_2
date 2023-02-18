import { legacy_createStore as createStore } from 'redux';

import { Reducer } from '../reducers/Reducer';

export default createStore(Reducer);