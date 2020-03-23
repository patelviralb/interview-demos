import React from 'react'

import Navbar from './navbar';
import {Link} from "react-router-dom";
import './formBuilderStyle.css';

const FormBuilderComponent = () =>
    <div className={'container-fluid'}>
      <div className={'d-flex justify-content-end mt-1'}>
        <Link className={'btn btn-primary'} to={'/home'}>
          Home
        </Link>
      </div>
      <div className={'row m-2 no-gutter'}>
        <div className={'col-lg-6 col-md-12 border border-dark rounded no-gutter vp-form-builder-row-height'}>
          <div className={'row'}>
            <div className={'col-12 bg-secondary'}>
              <label className={'text-white'}>Field Builder</label>
            </div>
          </div>
        </div>
        <div className={'col-lg-6 col-md-12 border border-dark rounded no-gutter vp-form-builder-row-height'}>
          <div className={'row'}>
            <div className={'col-12 bg-secondary'}>
              <label className={'text-white'}>Preview</label>
            </div>
          </div>
        </div>
      </div>
    </div>;

export default FormBuilderComponent