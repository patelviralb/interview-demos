import React from 'react';
import MultipleChoiceBuilder
    from "./multipleChoiceBuilder/multipleChoiceBuilderComponent";

const FieldBuilderComponent = () =>
    <div>
      <div className={'row'}>
        <div className={'col-12 bg-secondary'}>
          <label className={'text-white'}>Field Builder</label>
        </div>
      </div>
      <div>
        {/*<div className="alert alert-warning d-flex justify-content-center mt-2"
             role="alert">
          Start adding fields from here.
        </div>*/}
        <div>
            <MultipleChoiceBuilder />
        </div>
        <div className={'d-flex justify-content-center'}>
          <button className={'btn btn-secondary'} disabled={true}>
            <i className={'fa fa-plus'}></i>
          </button>
        </div>
      </div>
    </div>;

export default FieldBuilderComponent;