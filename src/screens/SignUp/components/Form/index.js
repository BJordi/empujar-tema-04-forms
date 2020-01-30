import React from 'react';

import './styles.scss'

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleInputChange = field => event => {
    this.setState({ [field]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('email: ' + this.state.email);
    console.log('password: ' + this.state.password);
    console.log('confirmPassword: ' + this.state.confirmPassword);
  }

  render() {
    return (
      <form className='form-container' onSubmit={this.handleSubmit}>
      <React.Fragment>
        <label className='label'>e-mail</label>
        <input
          className='input'
          value={this.state.email}
          onChange={this.handleInputChange('email')}
        />
        <label className='label'>Contraseña</label>
        <input
          className='input'
          type='password'
          value={this.state.password}
          onChange={this.handleInputChange('password')}
        />
        <label className='label'>Confirma contraseña</label>
        <input
          className='input'
          type='password'
          value={this.state.confirmPassword}
          onChange={this.handleInputChange('confirmPassword')}
        />
      </React.Fragment>
        <button type='submit' className='button'>Registrar</button>
      </form>
    );
  }
}

export default SignUp;
