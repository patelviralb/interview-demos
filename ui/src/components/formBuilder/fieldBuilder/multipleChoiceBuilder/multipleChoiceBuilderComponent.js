import React from 'react';
import {connect} from "react-redux";
import {
  clearFieldData,
  updateLabel,
  updateRequiredFieldData,
  updateDefaultValue,
  updateChoicesWithDefaultValue,
  updateChoices,
  deleteChoice
} from "../../../../redux/actions/fieldsActions";
import {Link} from "react-router-dom";
import FieldDataService from "../../../../services";

import '../../fieldPreview/multipleChoicePreview/multipleChoicePreviewComponent.css'

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const addChoiceToList = (editChoices, fieldData) => {
  const choiceValue = document.getElementById('vp-field-choice').value;
  const defaultValue = document.getElementById('vp-default-value').value;

  const existingChoice = fieldData.choices.filter(
      eachChoice => eachChoice.choice_value === choiceValue);

  if (fieldData.choices.length === 50) {
    displayWarning("Cannot add more than 50 choices.");
  } else if (choiceValue.trim() === defaultValue) {
    displayWarning("Default value present. Cannot add same value again.");
  } else if (existingChoice.length !== 0) {
    displayWarning("Value is present. Cannot add same value again.");
  } else if (choiceValue.trim() !== '') {
    editChoices(choiceValue.trim());
  }
  document.getElementById('vp-field-choice').value = "";
  document.getElementById('vp-field-choice').focus();
};

const saveFieldData = (postData, fieldData) => {
  const labelData = document.getElementById('vp-field-label').value;

  if (labelData === "") {
    displayError("Label field cannot be empty.")
  } else {
    postData(fieldData);
  }
};

const displayWarning = (message) => {
  document.getElementById('vp-warning-row').classList.remove('d-none');
  document.getElementById(
      'vp-warning-message').innerHTML = message;
  sleep(2000).then(
      () => document.getElementById('vp-warning-row').classList.add('d-none'));
};

const displayError = (message) => {
  document.getElementById('vp-error-row').classList.remove('d-none');
  document.getElementById(
      'vp-error-message').innerHTML = message;
  sleep(2000).then(
      () => document.getElementById('vp-error-row').classList.add('d-none'));
};

const MultipleChoiceBuilderComponent = ({fieldData, clearFormFieldData, editLabel, editRequiredValidation, editDefaultValue, editChoices, removeChoice, editOrder, postData}) =>
    <div className={'border border-warning rounded mt-2 mb-4'}>

      <div className={'row m-2 alert alert-warning d-none'}
           id={'vp-warning-row'}>
        <div
            className={'col-12 d-flex justify-content-center'}
            role={'alert'}
        >
          <i className="fas fa-exclamation-triangle"></i>
        </div>
        <div
            className={'col-12 d-flex justify-content-center'}
            role={'alert'}
            id={'vp-warning-message'}
        >
          Warning goes here.
        </div>
      </div>

      <div className={'row m-2 alert alert-danger d-none'} id={'vp-error-row'}>
        <div
            className={'col-12 d-flex justify-content-center'}
            role={'alert'}
        >
          <i className="fas fa-exclamation-triangle"></i>
        </div>
        <div
            className={'col-12 d-flex justify-content-center'}
            role={'alert'}
            id={'vp-error-message'}
        >
          Error goes here.
        </div>
      </div>

      <div className={'row m-2'}>
        <div className={'col-4'}>
          <label htmlFor={'vp-field-label'}>Label</label>
        </div>
        <div className={'col-8'}>
          <input className={'form-control'} id={'vp-field-label'}
                 name={'vp-field-label'}
                 value={fieldData.label}
                 onChange={(event) =>
                     editLabel(event.target.value)}
          />
        </div>
      </div>

      <div className={'row m-2'}>
        <div className={'col-4'}>
          <label htmlFor={'vp-field-type'}>Type</label>
        </div>
        <div className={'col-8'}>
          <label id={'vp-field-label'}>
            Multi-select
          </label>
        </div>
      </div>

      <div className={'row m-2'}>
        <div className={'col-4'}></div>
        <div className={'col-8'}>
          <div className={'form-check form-check-inline'}>
            {
              fieldData.required
              &&
              <input className={'form-check-input'} type={'checkbox'}
                     id={'vp-required-check'}
                     name={'vp-required-check'}
                     checked={true}
                     onChange={(event) =>
                         editRequiredValidation(
                             event.target.checked)}
              />
            }
            {
              !fieldData.required
              &&
              <input className={'form-check-input'} type={'checkbox'}
                     id={'vp-required-check'}
                     name={'vp-required-check'}
                     onChange={(event) =>
                         editRequiredValidation(
                             event.target.checked)}
              />
            }
            <label className={'form-check-label'}
                   htmlFor={'vp-required-check'}>
              A value is required
            </label>
          </div>
        </div>
      </div>

      <div className={'row m-2'}>
        <div className={'col-4'}>
          <label htmlFor={'vp-default-value'}>Default Value</label>
        </div>
        <div className={'col-8'}>
          <input className={'form-control'} id={'vp-default-value'}
                 name={'vp-default-value'}
                 onBlur={(event) =>
                     editDefaultValue(event.target.value, true)}
                 onChange={(event) =>
                     editDefaultValue(event.target.value, false)}
                 value={fieldData.default_value}
          />
        </div>
      </div>

      <div className={'row m-2'}>
        <div className={'col-4'}>
          <label htmlFor={'vp-choices'}>Choices</label>
        </div>
        <div className={'col-8 d-flex justify-content-center'}>
          <input className={'form-control'} id={'vp-field-choice'}
                 name={'vp-field-choice'}/>
          <button className={'btn btn-outline-success ml-1'}
                  onClick={() => addChoiceToList(editChoices, fieldData)}>
            <i className={'fa fa-plus'}></i>
          </button>
        </div>
      </div>
      <div className={'row m-2'}>
        <div className={'col-4'}>

        </div>
        <div className={'col-8'}>
          {
            fieldData.choices
            &&
            fieldData.choices
            .sort((choiceOne, choiceTwo) => choiceOne.choice_value
                > choiceTwo.choice_value)
            .map((eachChoice, index) => {
              if (eachChoice.choice_value.length > 40) {
                return (
                    <div key={index} className={'row'}>
                      <div
                          className={'col-1 d-flex justify-content-center'}>
                        <i className={'fa fa-trash-alt text-danger'}
                           onClick={() => removeChoice(eachChoice)}></i>
                      </div>
                      <div className={'col-11'}>
                        <label
                            className={'form-check-label text-wrap vp-word-break'}>
                          <span>{eachChoice.choice_value.substring(0,
                              41)}</span>
                          <span
                              className={'text-danger'}>{eachChoice.choice_value.substring(
                              41)}</span>
                        </label>
                      </div>
                    </div>
                );
              }
              return (
                  <div key={index} className={'row'}>
                    <div
                        className={'col-1 d-flex justify-content-end'}>
                      <i className={'fa fa-trash-alt text-danger'}
                         onClick={() => removeChoice(eachChoice)}></i>
                    </div>
                    <div className={'col-11 d-flex justify-content-start'}>
                      <label
                          className={'form-check-label text-wrap vp-word-break'}>
                        {eachChoice.choice_value}
                      </label>
                    </div>
                  </div>
              );
            })
          }
        </div>
      </div>

      <div className={'row m-2'}>
        <div className={' col-4'}>
          <label htmlFor={' vp-order'}>Order</label>
        </div>
        <div className={' col-8'}>
          <select className={' form-control'} id={' vp-order'}
                  name={' vp-order'}
                  onChange={() => editOrder()}
                  value={fieldData.order}>
            <option value={' alphabetical'}>
              Display choices in Alphabetical order
            </option>
          </select>
        </div>
      </div>

      <div className={'row m-2 d-flex justify-content-center'}>
        <button className={' btn btn-success'}
                onClick={() => saveFieldData(postData, fieldData)}
        >
          Save Changes
        </button>
        <button className={' ml-2 btn btn-warning'}
                onClick={() => clearFormFieldData()}>
          Clear
        </button>
        <Link className={' ml-2 btn btn-danger'} to={'/home'}>
          Cancel
        </Link>
      </div>

    </div>
;

const stateMapper = (state) => {
  return {
    fieldData: state.field.fieldData
  };
};

const dispatchMapper = (dispatch) => {
  return {
    clearFormFieldData: () => {
      dispatch(clearFieldData());
    },
    editLabel: (fieldLabel) => {
      dispatch(updateLabel(fieldLabel));
    },
    editRequiredValidation: (isChecked) => {
      //DO SOMETHING
      dispatch(updateRequiredFieldData(isChecked));
    },
    editDefaultValue: (defaultValue, postChanges) => {
      if (postChanges) {
        if (defaultValue !== "") {
          dispatch(updateChoicesWithDefaultValue(defaultValue.trim()));
        }
      } else {
        dispatch(updateDefaultValue(defaultValue));
      }
    },
    editChoices: (choice) => {
      let choiceToAdd = {
        "choice_value": choice
      };
      dispatch(updateChoices(choiceToAdd));
    },
    removeChoice: (choice) => {
      dispatch(deleteChoice(choice));
    },
    editOrder: () => {
      //DO NOTHING
    },
    postData: (fieldData) => {
      FieldDataService.postFieldData(fieldData).then(status =>
          console.log("Field Data which was posted:", {fieldData})
      )
    }
  };
};

export default connect(stateMapper, dispatchMapper)(
    MultipleChoiceBuilderComponent);