import React from 'react';

import Form from './components/Form';
import ReactLogo from '../../logo.svg';

import './styles.scss';

class SignUp extends React.Component {
  render() {
    return (
      <div className='column center mt-200'>
        <img src={ReactLogo} alt='react logo' className='logo'/>
        <h1>¡Bienvenidos a Hack the Gap!</h1>
        <Form />
      </div>
    );
  }
}

export default SignUp;
