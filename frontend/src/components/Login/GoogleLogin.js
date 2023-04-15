import React from "react";
import ReactGoogleLogin from "react-google-login";
import './GoogleLogin.css';
export default function GoogleLogin(props) {
  const onSuccess = (resp) => {
    console.log('Google login success: ', resp);
    const { email } = resp.profileObj;
    console.log('email: ', email);
  };

  const onFailure = (error) => {
    console.log('google login failed : ', error);
  }
  return (
    <div className="google-login">
    <ReactGoogleLogin
      clientId="486275877167-clfkn3rklk1hslsbs7n6rnrenr7m29u2.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
    </div>
  );
}