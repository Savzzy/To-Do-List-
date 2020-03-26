var key = 0;

export const addToDoItem = item => {
  return {
    //return a action with type and payload
    type: "ADD_TODO_ITEM",
    payload: {
      item: item,
      key : ++key
    }
  };
};

export const deleteItem = key => {
  return {
    type: "DELETE_ITEM",
    payload: { key : key }
  };
};

export const strikeOffItem = item =>{
    return {
        type : "",
        payload : {
            key : key
        }
    }
}
