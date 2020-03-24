export const CREATE_FIELD = "CREATE_FIELD";
export const SAVE_FIELD = "SAVE_FIELD";

export const createField = (newFieldData) => ({
  type: CREATE_FIELD,
  fieldData: newFieldData
});