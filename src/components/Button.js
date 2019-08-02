import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { text, icon } = props;
  return (
    <button type='button' className='button'>
      {(text, icon)}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string.isRequired
};

Button.defaultProps = {
  text: 'Text'
};

export default Button;
