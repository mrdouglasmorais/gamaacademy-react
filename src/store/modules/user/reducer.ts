import { Reducer } from 'redux';
import { IGlobalState } from './types';

const INITIAL_STATE: IGlobalState = {
  users: []
}

const AllUsers: Reducer<IGlobalState | any> = ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case 'ADD_USER': {
      console.log(action.payload)
      const { user } = action.payload
      
      return {
        ...state,
        users: [
          ...state.users,
          user
        ]
      }

    }
    default:{
      return state
    }
  }
}

export default AllUsers