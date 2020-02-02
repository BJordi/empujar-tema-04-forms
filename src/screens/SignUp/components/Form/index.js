import React from 'react';

import './styles.scss';

const alMenosUnaMayuscula = /^(?=.*[A-Z])/;

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
    const { email, password, confirmPassword } = this.state;
    if (!email || !password || !confirmPassword) alert('Todos los campos son requeridos');
    else if (password !== confirmPassword) alert('Las passwords no coinciden');
    else if (!alMenosUnaMayuscula.test(password)) alert('La password debe incluir al menos una mayúscula');
    else {
      console.log('email: ' + this.state.email);
      console.log('password: ' + this.state.password);
      console.log('confirmPassword: ' + this.state.confirmPassword);
    }
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
