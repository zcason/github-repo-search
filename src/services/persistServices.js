// save state to the local storage 
export const saveState = (state) => {
    try {
       const serializedState = JSON.stringify(state);
       localStorage.setItem("state", serializedState); 
    } catch (error) {
        console.log(error);
    }
};

// loads saved state from the local storage
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};
