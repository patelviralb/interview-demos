export const CLEAR_FIELD_DATA = "CLEAR_FIELD_DATA";
export const UPDATE_FIELD_LABEL = "UPDATE_FIELD_LABEL";
export const SAVE_FIELD = "SAVE_FIELD";

export const clearFieldData = () => ({
  type: CLEAR_FIELD_DATA
});

export const updateLabel = (fieldLabel) => ({
  type: UPDATE_FIELD_LABEL,
  fieldLabel: fieldLabel
});