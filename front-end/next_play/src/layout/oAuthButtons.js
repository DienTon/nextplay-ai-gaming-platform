import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import React from 'react';
const OAuthButtons = () => {
  const handleSuccess = (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
        useOneTap
      />
    </div>
  );
};

export default OAuthButtons;