import React from 'react';
import { node, func } from 'prop-types';

import './Form.scss'

class Form extends React.Component {
  render() {
    const { form, buttons, handleSubmit } = this.props
    return (
      <form className='form-container' onSubmit={handleSubmit}>
        {form}
        {buttons}
      </form>
    );
  }
};

Form.defaultProps = {
  form: null,
  buttons: null,
  handleSubmit: () => {}
}

Form.propTypes = {
  form: node,
  buttons: node,
  handleSubmit: func
}

export default Form;
