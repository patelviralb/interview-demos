import React from 'react';

const SubmitButtonComponent = ({buttonName, onClickFunction}) =>
    <button className={'btn btn-success'}
            onClick={(_) => onClickFunction()}
    >
      {buttonName}
    </button>;

export default SubmitButtonComponent;