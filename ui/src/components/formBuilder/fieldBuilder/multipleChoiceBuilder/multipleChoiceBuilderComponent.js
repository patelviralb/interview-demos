import React, {Component} from 'react';
import {connect} from "react-redux";
import {
  clearFieldData,
  updateLabel,
  updateDefaultValue,
  updateChoicesWithDefaultValue
} from "../../../../redux/actions/fieldsActions";
import {Link} from "react-router-dom";

const renderDefaultValue = (fieldData) => {
  let defaultValues = "";
  if (fieldData.choices.length > 0) {
    fieldData.choices.map(
        eachChoice => defaultValues += eachChoice.choice_value + '\n');
  }
  return defaultValues.trim();
};

class MultipleChoiceBuilderComponent extends Component {
  componentDidMount() {
    document.getElementById('vp-choices').value = renderDefaultValue(
        this.props.fieldData);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.fieldData !== this.fieldData) {
      document.getElementById('vp-choices').value = renderDefaultValue(
          this.props.fieldData);
    }
  }

  render() {
    return (
        <div className={'border border-warning rounded mt-2 mb-4'}>

          <div className={'row m-2'}>
            <div className={'col-4'}>
              <label htmlFor={'vp-field-label'}>Label</label>
            </div>
            <div className={'col-8'}>
              <input className={'form-control'} id={'vp-field-label'}
                     name={'vp-field-label'}
                     value={this.props.fieldData.label}
                     onChange={(event) =>
                         this.props.editLabel(event.target.value)}
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
                  this.props.fieldData.required
                  &&
                  <input className={'form-check-input'} type={'checkbox'}
                         id={'vp-required-check'}
                         name={'vp-required-check'}
                         checked={true}
                         onChange={(event) =>
                             this.props.editRequiredValidation(
                                 event.target.checked)}
                  />
                }
                {
                  !this.props.fieldData.required
                  &&
                  <input className={'form-check-input'} type={'checkbox'}
                         id={'vp-required-check'}
                         name={'vp-required-check'}
                         onChange={(event) =>
                             this.props.editRequiredValidation(
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
              {/*<input className={'form-control'} id={'vp-default-value'}
                     name={'vp-default-value'}
                     onChange={(event) =>
                         this.props.editDefaultValue(event.target.value)}
                     onfocusout={(event) =>
                         this.props.editDefaultValue(event.target.value)}
                     value={this.props.fieldData.default_value}/>*/}
              <input className={'form-control'} id={'vp-default-value'}
                     name={'vp-default-value'}
                     onBlur={(event) =>
                         this.props.editDefaultValue(event.target.value, true)}
                     onChange={(event) =>
                         this.props.editDefaultValue(event.target.value, false)}
                     value={this.props.fieldData.default_value}/>
            </div>
          </div>

          <div className={'row m-2'}>
            <div className={'col-4'}>
              <label htmlFor={'vp-choices'}>Choices</label>
            </div>
            <div className={'col-8'}>
          <textarea className={'form-control'} id={'vp-choices'} rows={'4'}
                    name={'vp-choices'}
                    onChange={(event) => {
                      if (event.target.value.charAt(
                          event.target.value.length - 1) === '\n') {
                        this.props.editChoices(event.target.value)
                      }
                    }}
          >
          </textarea>
            </div>
          </div>

          <div className={'row m-2'}>
            <div className={'col-4'}>
              <label htmlFor={'vp-order'}>Order</label>
            </div>
            <div className={'col-8'}>
              <select className={'form-control'} id={'vp-order'}
                      name={'vp-order'}
                      onChange={() => this.props.editOrder()}
                      value={this.props.fieldData.order}>
                <option value={'alphabetical'}>
                  Display choices in Alphabetical order
                </option>
              </select>
            </div>
          </div>

          <div className={'row m-2 d-flex justify-content-center'}>
            <button className={'btn btn-success'}>
              Save Changes
            </button>
            <button className={'ml-2 btn btn-warning'}
                    onClick={() => this.props.clearFormFieldData()}>
              Clear
            </button>
            <Link className={'ml-2 btn btn-danger'} to={'/home'}>
              Cancel
            </Link>
          </div>

        </div>
    );
  }
}

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
      console.log("DEBUG: Checked", isChecked);
    },
    editDefaultValue: (defaultValue, postChanges) => {
      if (postChanges) {
        if(defaultValue !== "") {
          dispatch(updateChoicesWithDefaultValue(defaultValue));
        }
      } else {
        dispatch(updateDefaultValue(defaultValue));
      }
    },
    editChoices: (choices) => {
      let choicesArray = choices.split('\n');
      let choicesLength = choicesArray.length;
      console.log('DEBUG: editChoice', choicesArray[choicesLength - 2]);
    },
    editOrder: () => {
      //DO NOTHING
    }
  };
};

export default connect(stateMapper, dispatchMapper)(
    MultipleChoiceBuilderComponent);