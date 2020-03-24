import {
  CLEAR_FIELD_DATA,
  SAVE_FIELD,
  UPDATE_FIELD_LABEL
} from '../actions/fieldsActions';

const initialState = {
  fieldData: {
    "label": "Sample Label",
    "type": "multi-select",
    "required": false,
    "default_value": "Value 01",
    "choices": [
      {
        "choice_value": "Value 01"
      },
      {
        "choice_value": "Value 02"
      }
    ],
    "order": "alphabetical"
  }
};

const fieldBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    /*case CREATE_FIELD:
      console.log('DEBUG: Inside', CREATE_FIELD, 'in reducer');
      return {
        ...state,
        fieldsList: [
          ...state.fieldsList,
          action.fieldData
        ]
      };*/

    case CLEAR_FIELD_DATA:
      return {
        ...state,
        fieldData: {
          "label": "",
          "type": "multi-select",
          "required": false,
          "default_value": "",
          "choices": [],
          "order": "alphabetical"
        }
      };

    case UPDATE_FIELD_LABEL:
      return {
        ...state,
        fieldData: {
          ...state.fieldData,
          "label": action.fieldLabel
        }
      };

    case SAVE_FIELD:
      console.log('DEBUG: Inside', SAVE_FIELD, 'in reducer');
      return state;

    default:
      return state;
  }
};

export default fieldBuilderReducer;