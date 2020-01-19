import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/module';

const CreateModule = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    serialnumber: '',
    imei: '',
    macaddress: ''
  });

  const {
    name,
    serialnumber,
    imei,
    macaddress
  } = formData;

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
    createProfile(formData, history);
  }

  return (
    <Fragment>
      <div className="createYourModule">
        {/* <h2 className="large text-primary my-n-2"> */}

        <form
          className="form"
          onSubmit={e => onSubmit(e)}>
          <h2 className="createModule" >
            Create Your Module
      </h2>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onChange(e)} />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Serial Number"
              name="serialnumber"
              value={serialnumber}
              onChange={e => onChange(e)} />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="IMEI"
              name="imei"
              value={imei}
              onChange={e => onChange(e)} />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="MAC Address"
              name="macaddress"
              value={macaddress}
              onChange={e => onChange(e)} />
          </div>

          <div className="form-group sign-in">
            <Link className="my-1" to="/dashboard2">

              <input
                type="submit"
                className="btn btn-primary bg-radient"
                value="Go back" />


              <input
                type="submit"
                className="btn btn-primary bg-radient"
                value="Accept" />


            </Link>


          </div>
        </form>
      </div>

    </Fragment>
  );
}

CreateModule.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(
  null,
  { createProfile }
)(withRouter(CreateModule));