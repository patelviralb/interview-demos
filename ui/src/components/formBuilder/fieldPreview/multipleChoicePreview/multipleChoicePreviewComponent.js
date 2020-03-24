import React from 'react';
import {connect} from "react-redux";

import './multipleChoicePreviewComponent.css';

const MultipleChoicePreviewComponent = ({fieldData}) =>
    <div>
      <div className={'row mt-2'}>
        <div className={'col-4 text-wrap vp-word-break'}>
          {fieldData.label}
        </div>
        <div className={'col-8'}>

          {
            fieldData.choices
            &&
            fieldData.choices
            .sort((choiceOne, choiceTwo) => choiceOne.choice_value
                > choiceTwo.choice_value)
            .map((eachChoice, index) => {
              return (
                  <div key={index}>
                    <input className={'form-check-input'} type={'checkbox'}
                           id={index}
                           checked={eachChoice.choice_value
                           === fieldData.default_value}
                           readOnly
                    />
                    <label className={'form-check-label text-wrap vp-word-break'}
                           htmlFor={index}>
                      {eachChoice.choice_value.substring(0, 41)}
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