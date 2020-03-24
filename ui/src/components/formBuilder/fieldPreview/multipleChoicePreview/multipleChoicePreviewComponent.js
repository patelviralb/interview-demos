import React from 'react';
import {connect} from "react-redux";

const MultipleChoicePreviewComponent = ({fieldData}) =>
    <div>
      <div className={'row m-2'}>
        <div className={'col-4 text-truncate'}>
          {fieldData.label}
        </div>
        <div className={'col-8'}>

          {
            fieldData.choices
            &&
            fieldData.choices.map((eachChoice, index) => {
              return (
                  <div className={'form-check'} key={index}>
                    <input className={'form-check-input'} type={'checkbox'}
                           id={index}
                           checked={eachChoice.choice_value
                           === fieldData.default_value}
                           readOnly
                    />
                    <label className={'form-check-label'}
                           htmlFor={index}>
                      {eachChoice.choice_value}
                    </label>
                  </div>
              );
            })
          }

        </div>
      </div>
    </div>
;

const stateMapper = (state) => {
  return {
    fieldData: state.field.fieldData
  };
};

const dispatchMapper = (dispatch) => {
  return {};
};

export default connect(stateMapper, dispatchMapper)(
    MultipleChoicePreviewComponent);