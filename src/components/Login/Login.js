import React from 'react';

import Form from '../Form/Form';
import ReactLogo from '../../logo.svg';

import './Login.scss'

class Login extends React.Component {

  state = {
    user: 'brian.jordi@wolox.com.ar',
    pass: 'Brian123*'
  }
  
  handleInputChange = field => event => {
    this.setState({ [field]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('user: ' + this.state.user);
    console.log('pass: ' + this.state.pass);
  }

  renderForm = () => {
    return (
      <React.Fragment>
        <label className='label'>Usuario o e-mail</label>
        <input
          className='input'
          value={this.state.user}
          onChange={this.handleInputChange('user')}
        />
        <label className='label'>Contraseña</label>
        <input
          className='input'
          type='password'
          value={this.state.pass}
          onChange={this.handleInputChange('pass')}
        />
      </React.Fragment>
    );
  }

  renderButtons = () => {
    return (
      <React.Fragment>
        <button type='submit' className='button'>Ingresar</button>
      </React.Fragment>
    );
  }
  
  render() {
    return (
      <div className='login-container column center mt-200'>
        <img src={ReactLogo} alt='react logo' className='logo'/>
        <h1>¡Bienvenidos a Hack the Gap!</h1>
        <Form
          form={this.renderForm()}
          buttons={this.renderButtons()}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Login;
