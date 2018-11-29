const initState = {
  cpu: ''
};
const ADD_CPU = 'ADD_CPU';

export function addCpu(id){
  return {
    type:ADD_CPU,
    payload:id
  }
};

export default function reducer(state = initState, action){
  switch(action.type){
    case ADD_CPU:
    return Object.assign({}, state, {cpu:action.payload})
    default:
    return state
  }
};