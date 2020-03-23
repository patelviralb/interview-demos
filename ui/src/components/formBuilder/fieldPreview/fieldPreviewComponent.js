import React from 'react';
import MultipleChoicePreview
  from "./multipleChoicePreview/multipleChoicePreviewComponent";

const FieldPreviewComponent = () =>
    <div>
      <div className={'row'}>
        <div className={'col-12 bg-secondary'}>
          <label className={'text-white'}>Preview</label>
        </div>
      </div>

      <div>
        <MultipleChoicePreview />
      </div>
    </div>;

export default FieldPreviewComponent;