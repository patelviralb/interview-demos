import React from 'react'

import {Link} from "react-router-dom";
import './formBuilderStyle.css';
import FieldBuilder from './fieldBuilder'
import FieldPreview from "./fieldPreview/fieldPreviewComponent";

const FormBuilderComponent = () =>
    <div className={'container-fluid'}>
      <div className={'d-flex justify-content-end mt-1'}>
        <Link className={'btn btn-primary'} to={'/home'}>
          Home
        </Link>
      </div>
      <div className={'row m-2 no-gutter'}>
        <div
            className={'col-lg-6 col-md-12 border border-dark rounded no-gutter vp-form-builder-row-height'}>
          <FieldBuilder/>
        </div>
        <div
            className={'col-lg-6 col-md-12 border border-dark rounded no-gutter vp-form-builder-row-height'}>
          <FieldPreview/>
        </div>
      </div>
    </div>;

export default FormBuilderComponent