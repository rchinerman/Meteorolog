import { combineReducers } from "redux";
import settingsReducer from "screens/settingsSlice";
// import todosReducer from 'features/todos/todosSlice'
// import visibilityFilterReducer from 'features/filters/filtersSlice'

export default combineReducers({ settings: settingsReducer });
