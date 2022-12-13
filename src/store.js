import { createStore, legacy_createStore } from 'redux' ;

const initialState = {
  users: [],
  loading: true
}

const store = legacy_createStore((state = initialState, action) => {
  if(action.type === 'LOAD_USERS'){
    state = {...state, users: action.users};
  }

  if(action.type === 'LOADED'){
    state = {...state, loading: false};
  }

  return state;
});

export default store;