
const loggedReducer = ( state = false , action ) =>{
 switch (action.type) {
     case 'SHOW': return !state ;
     default: return state; 
   }
}

export default loggedReducer;