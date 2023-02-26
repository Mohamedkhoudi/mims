import React from "react";
import PropTypes from 'prop-types';
// import ProfileBlock from './ProfileBlock';

const Profile = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Name : {props.list.Fullname}</h1>
      <h1>Bio : {props.list.Bio}</h1>
      <h1>Profession : {props.list.Profession}</h1>
      <div>{props.children}</div>
      <button onClick={() => props.alerta(props.list)}>Push</button>
      {/* <h2>{test}</h2> */}
    </div>
  );
};
Profile.propTypes={
  children: PropTypes.string
}
export default Profile;
