import { createStore } from 'redux';
import AllUsers from './modules/user/reducer';

const store = createStore(AllUsers);

export default store;
