import {
  CLEAR_FIELD_DATA,
  SAVE_FIELD,
  UPDATE_FIELD_LABEL,
  UPDATE_FIELD_DEFAULT_VALUE,
  UPDATE_FIELD_DEFAULT_VALUE_CHOICE,
  UPDATE_FIELD_CHOICE,
  DELETE_FIELD_CHOICE,
  UPDATE_FIELD_IS_REQUIRED
} from '../actions/fieldsActions';

const initialState = {
  fieldData: {
    "label": "Sales region",
    "type": "multi-select",
    "required": false,
    "default_value": "North America",
    "choices": [
      {"choice_value": "Asia"},
      {"choice_value": "Australia"},
      {"choice_value": "Western Europe"},
      {"choice_value": "North America"},
      {"choice_value": "Eastern Europe"},
      {"choice_value": "Latin America"},
      {"choice_value": "Middle East and Africa"}
    ],
    "displayAlpha": true
  }
};

const fieldBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
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

    case UPDATE_FIELD_IS_REQUIRED:
      return {
        ...state,
        fieldData: {
          ...state.fieldData,
          "required": action.isRequiredChecked
        }
      };

    case UPDATE_FIELD_DEFAULT_VALUE_CHOICE:
      const defaultValuesFromArray = state.fieldData.choices.filter(
          choice => choice.choice_value === action.defaultValue);

      if (defaultValuesFromArray.length === 0) {
        return {
          ...state,
          fieldData: {
            ...state.fieldData,
            "default_value": action.defaultValue,
            "choices": [
              ...state.fieldData.choices,
              {
                "choice_value": action.defaultValue
              }
            ]
          }
        };
      }
      return {
        ...state
      };

    case UPDATE_FIELD_DEFAULT_VALUE:
      return {
        ...state,
        fieldData: {
          ...state.fieldData,
          "default_value": action.defaultValue
        }
      };

    case UPDATE_FIELD_CHOICE:
      const defaultValuesInChoices = state.fieldData.choices.filter(
          choice => choice.choice_value === action.defaultValue
              || choice.choice_value === action.choiceToAdd.choice_value);

      if (defaultValuesInChoices.length === 0) {
        return {
          ...state,
          fieldData: {
            ...state.fieldData,
            "choices": [
              ...state.fieldData.choices,
              action.choiceToAdd
            ]
          }
        };
      }
      return {
        ...state
      };
      /*return {
        ...state,
        fieldData: {
          ...state.fieldData,
          "choices": [
            ...state.fieldData.choices,
            action.choiceToAdd
          ]
        }
      };*/

    case DELETE_FIELD_CHOICE:
      if (action.choiceToDelete.choice_value
          === state.fieldData.default_value) {
        return {
          ...state,
          fieldData: {
            ...state.fieldData,
            "default_value": "",
            "choices": state.fieldData.choices.filter(
                choice => choice !== action.choiceToDelete),
          }
        };
      }
      return {
        ...state,
        fieldData: {
          ...state.fieldData,
          "choices": state.fieldData.choices.filter(
              choice => choice !== action.choiceToDelete),
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