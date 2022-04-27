import {
CHANGE_INPUT_SEARCH, CHANGE_INPUT_VALIDATE, LOADING, SAVE_DATA, SAVE_MESSAGE,
} from '../actions';


const reducer = (stateActuel, action = {}) => {
// j'éxamine le .type de chaque action !
   switch (action.type) {
    case CHANGE_INPUT_SEARCH:
      return {
        ...stateActuel,
        inputSearch: action.inputSearch,
      };
    case CHANGE_INPUT_VALIDATE:
      return {
        ...stateActuel,
        inputValidate: action.inputValidate,
      };
    case LOADING:
      return {
        ...stateActuel,
        loading: action.bool,
      };
    case SAVE_DATA:
      return {
        ...stateActuel,
        data: action.data,
      };
    case SAVE_MESSAGE:
      return {
        ...stateActuel,
        message: action.message,
      };

    default:
      return stateActuel;
  } 
};

export default reducer;