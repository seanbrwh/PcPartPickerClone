const initState = {
  session:[],
  list:{
    cpu:0,
    cpuCooler:0,
    motherboard:0,
    memory:0,
    storage:0,
    video_card:0,
    compcase:0,
    psu:0    
  }
};
const ADD_SESSION = 'ADD_SESSION'
const ADD_CPU = 'ADD_CPU'
const ADD_CPU_COOLER= 'ADD_CPU_COOLER'
const ADD_MOTHERBOARD = 'ADD_MOTHERBOARD'
const ADD_MEMORY = 'ADD_MEMORY' 
const ADD_STORAGE = 'ADD_STORAGE'
const ADD_VIDEO_CARD = 'ADD_VIDEO_CARD'
const ADD_CASE = 'ADD_CASE'
const ADD_PSU = 'ADD_PSU' 

export function addSession(session){
  return {
    type:ADD_SESSION,
    payload: session
  }
}
export function addCpu(item){
  return {
    type:ADD_CPU,
    payload:item,    
  }
}
export function addCpuCooler(item){
  return {
    type:ADD_CPU_COOLER,
    payload:item,    
  }
}
export function addMotherboard(item){
  return {
    type:ADD_MOTHERBOARD,
    payload:item
  }
}
export function addMemory(item){
  return {
    type:ADD_MEMORY,
    payload:item
  }
}
export function addStorage(item){
  return {
    type:ADD_STORAGE,
    payload:item
  }
}
export function addVideoCard(item){
  return {
    type:ADD_VIDEO_CARD,
    payload:item
  }
}
export function addCase(item){
  return {
    type:ADD_CASE,
    payload:item
  }
}
export function addPsu(item){
  return {
    type:ADD_PSU,
    payload:item
  }
}

export default function reducer(state = initState, action){
  switch(action.type){
    case ADD_SESSION:
    return Object.assign({}, state, {session:action.payload})
    case ADD_CPU:
    return Object.assign({},{...state}, (state.list.cpu = action.payload))
    case ADD_CPU_COOLER:
    return Object.assign({},{...state}, (state.list.cpuCooler = action.payload))
    case ADD_MOTHERBOARD:
    return Object.assign({},{...state}, (state.list.motherboard = action.payload))
    case ADD_MEMORY:
    return Object.assign({},{...state}, (state.list.memory = action.payload))
    case ADD_STORAGE:
    return Object.assign({},{...state}, (state.list.storage = action.payload))
    case ADD_VIDEO_CARD:
    return Object.assign({},{...state}, (state.list.video_card = action.payload))
    case ADD_CASE:
    return Object.assign({},{...state}, (state.list.compcase = action.payload))
    case ADD_PSU:
    return Object.assign({},{...state}, (state.list.psu = action.payload))
    default:
    return state
  }
};