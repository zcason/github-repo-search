export const retriveResults = (results) => {
    return{
        type: 'GET_RESULTS',
        payload: results
    };
};