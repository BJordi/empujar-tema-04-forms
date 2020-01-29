import React from 'react';

import './Form.scss'

class Form extends React.Component {
  state = {
    user: '',
    pass: ''
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('¡Ingresamos!')
  }

  render() {
    return (
      <form className='form-container' onSubmit={this.handleSubmit}>
        <label className='label' htmlFor='user-id'>Usuario o e-mail</label>
        <input
          id='user-id'
          name='user'
          className='input'
          value={this.state.user}
          onChange={this.handleInput}
        />
        <label className='label' htmlFor='pass-id'>Contraseña</label>
        <input
          id='pass-id'
          name='pass'
          className='input'
          type='password'
          value={this.state.pass}
          onChange={this.handleInput}
        />
        <button type='submit' className='button'>Ingresar</button>
      </form>
    );
  }
};

export default Form;
