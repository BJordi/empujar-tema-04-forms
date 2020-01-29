import React from 'react';

import Form from './components/Form/Form';
import ReactLogo from '../../logo.svg';

import './Login.scss';

class Login extends React.Component {
  render() {
    return (
      <div className='login-container column center mt-200'>
        <img src={ReactLogo} alt='react logo' className='logo'/>
        <h1>¡Bienvenidos a Hack the Gap!</h1>
        <Form />
      </div>
    );
  }
}

export default Login;
