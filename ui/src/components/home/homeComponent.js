import React from 'react';
import {Link} from "react-router-dom";

const HomeComponent = () =>
    <div className={'d-flex align-items-center min-vh-100'}>
      <div className={'container text-center'}>
        <div className={'row'}>
          <div className={'col-lg-4'}></div>
          <div className={'col-lg-4 col-12'}>
            <Link className={'btn btn-success'} to={'/form-builder'}>
              Start Building Form
            </Link>
          </div>
          <div className={'col-lg-4'}></div>
        </div>
      </div>
    </div>;

export default HomeComponent;