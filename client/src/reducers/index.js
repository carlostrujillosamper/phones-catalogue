import axios from 'axios'



const phonesReducer = (state = {phones : [], loaded : false}, action) => {
  switch(action.type){
    case 'FIND_ALL' :
      return {
        ...state ,
        phones : action.payload,
        loaded : true
      }

      default :
       return state
  }
}

export default phonesReducer