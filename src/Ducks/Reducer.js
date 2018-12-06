const initState = {
  session:[],
  cpu: ''
};
const ADD_SESSION = 'ADD_SESSION'
const ADD_CPU = 'ADD_CPU';

export function addCpu(id){
  return {
    type:ADD_CPU,
    payload:id
  }
};
export function addSession(session){
  return {
    type:ADD_SESSION,
    payload: session
  }
}

export default function reducer(state = initState, action){
  switch(action.type){
    case ADD_SESSION:
    return Object.assign({}, state, {session:action.payload})
    case ADD_CPU:
    return Object.assign({}, state, {cpu:action.payload})
    default:
    return state
  }
};