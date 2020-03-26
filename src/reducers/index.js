import { combineReducers } from "redux";

const toDoItems = (oldListOfItems = [], action) => {
  switch (action.type) {
    case "ADD_TODO_ITEM": {
      return [...oldListOfItems, action.payload];
    }
    
    case "DELETE_ITEM": {
      return oldListOfItems.filter(item => {
        return item.key !== action.payload.key;
      });
    }
    default: {
      return oldListOfItems;
    }
  }
};

export default combineReducers({
  toDoItems: toDoItems
});
