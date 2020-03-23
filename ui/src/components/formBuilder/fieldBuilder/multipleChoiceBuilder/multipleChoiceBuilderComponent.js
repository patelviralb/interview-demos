import React from 'react';

const MultipleChoiceBuilderComponent = () =>
    <div className={'border border-warning rounded mt-2 mb-4'}>

      <div className={'row m-2'}>
        <div className={'col-4'}>
          <label htmlFor={'vp-field-label'}>Label</label>
        </div>
        <div className={'col-8'}>
          <input className={'form-control'} id={'vp-field-label'}/>
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
            <input className={'form-check-input'} type={'checkbox'}
                   id={'vp-required-check'} value={'required'}/>
            <label className={'form-check-label'} htmlFor={'vp-required-check'}>
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
          <input className={'form-control'} id={'vp-default-value'}/>
        </div>
      </div>

      <div className={'row m-2'}>
        <div className={'col-4'}>
          <label htmlFor={'vp-choices'}>Choices</label>
        </div>
        <div className={'col-8'}>
          <textarea className={'form-control'} id={'vp-choices'} rows={'4'}>
          </textarea>
        </div>
      </div>

      <div className={'row m-2'}>
        <div className={'col-4'}>
          <label htmlFor={'vp-order'}>Order</label>
        </div>
        <div className={'col-8'}>
          <select className={'form-control'} id={'vp-order'}
                  value={'alphabetical'}>
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
        <button className={'ml-2 btn btn-danger'}>
          Cancel
        </button>
      </div>

    </div>
;

export default MultipleChoiceBuilderComponent;