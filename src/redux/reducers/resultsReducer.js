const resultsReducer = (state = null, action) => {
    switch(action.type){
        case 'GET_RESULTS':
         return action.payload;
        default:
        return state;   
    }
}

export default resultsReducer;