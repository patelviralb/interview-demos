import {CREATE_FIELD} from '../actions/createFields';

const initialState = {
  fieldsList: []
};

const fieldBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FIELD:
      console.log('DEBUG: Inside', CREATE_FIELD, 'in reducer');
      return {
        ...state,
        fieldsList: [
          ...state.fieldsList,
          action.fieldData
        ]
      };

    default:
      return state;
  }
};

export default fieldBuilderReducer;