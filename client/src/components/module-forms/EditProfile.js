import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getProfileById } from '../../actions/module';

const EditProfile = ({
  match: { params: { id } },
  module: { profile, loading },
  createProfile,
  getProfileById,
  history
}) => {
  const [formData, setFormData] = useState({
    name: "",
    serialnumber: "",
    imei: "",
    macaddress: ""
  });

  useEffect(() => {
    getProfileById(id);
    console.log(profile);
    setFormData({
      name: loading || !profile.name ? "" : profile.name,
      serialnumber: loading || !profile.serialnumber ? "" : profile.serialnumber,
      imei: loading || !profile.imei ? "" : profile.imei,
      macaddress: loading || !profile.macaddress ? "" : profile.macaddress,
    })
  }, [loading, getProfileById])

  const {
    name,
    serialnumber,
    imei,
    macaddress
  } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
     
        
        <form
          // className="editProfile form input"
          className="form"
          onSubmit={e => onSubmit(e)}>
            <h1 className="large text-primary my-n-2">
          Edit Your Module
      </h1>
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
            <Link className="my-1" to="/dashboard">
              <input
                type="submit"
                className="btn btn-primary bg-radient"
                value="Go back" />
            </Link>
            <input
              type="submit"
              className="btn btn-primary bg-radient"
              value="Accept" />
          </div>
        </form>
    

    </Fragment>
  );
}

// EditProfile.propTypes = {
//   createProfile: PropTypes.func.isRequired
// };

const mapStateToProps = state => ({
  module: state.module
});

export default connect(
  mapStateToProps,
  { createProfile, getProfileById }
)(withRouter(EditProfile));