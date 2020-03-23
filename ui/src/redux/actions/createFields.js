export const CREATE_FIELD = "CREATE_FIELD"

export const createField = (newFieldData) => ({
  type: CREATE_FIELD,
  fieldData: newFieldData
});