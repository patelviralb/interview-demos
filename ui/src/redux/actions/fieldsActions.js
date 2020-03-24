export const CLEAR_FIELD_DATA = "CLEAR_FIELD_DATA";
export const UPDATE_FIELD_LABEL = "UPDATE_FIELD_LABEL";
export const UPDATE_FIELD_DEFAULT_VALUE = "UPDATE_FIELD_DEFAULT_VALUE";
export const UPDATE_FIELD_DEFAULT_VALUE_CHOICE = "UPDATE_FIELD_DEFAULT_VALUE_CHOICE";
export const UPDATE_FIELD_CHOICE = "UPDATE_FIELD_CHOICE";
export const DELETE_FIELD_CHOICE = "DELETE_FIELD_CHOICE";
export const SAVE_FIELD = "SAVE_FIELD";

export const clearFieldData = () => ({
  type: CLEAR_FIELD_DATA
});

export const updateLabel = (fieldLabel) => ({
  type: UPDATE_FIELD_LABEL,
  fieldLabel: fieldLabel
});

export const updateDefaultValue = (defaultValue) => ({
  type: UPDATE_FIELD_DEFAULT_VALUE,
  defaultValue: defaultValue
});

export const updateChoicesWithDefaultValue = (defaultValue) => ({
  type: UPDATE_FIELD_DEFAULT_VALUE_CHOICE,
  defaultValue: defaultValue
});

export const updateChoices = (choice) => ({
  type: UPDATE_FIELD_CHOICE,
  choiceToAdd: choice
});

export const deleteChoice = (choice) => ({
  type: DELETE_FIELD_CHOICE,
  choiceToDelete: choice
});