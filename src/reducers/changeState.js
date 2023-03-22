
const initialState={visible: 0}

const changeState = (state = initialState, action)=>{
   switch(action.type){
    case 'INCREASE':
        return Object.assign({}, state, {visible: state.visible + 1});
     case 'DECREASE':
        return Object.assign({}, state, {visible: state.visible - 1});       
    default: return state;   
   }
};
  

   



export default changeState;