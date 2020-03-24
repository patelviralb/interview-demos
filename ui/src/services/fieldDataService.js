const postFieldData = (fieldData) => {
  return fetch("http://www.mocky.io/v2/566061f21200008e3aabd919",{
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(fieldData)
  }).then(response => response.json());
};

export default {
  postFieldData
}