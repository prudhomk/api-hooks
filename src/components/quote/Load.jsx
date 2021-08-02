import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) => (
  <div>
    <button onClick={onClick}>GIMME A QUOTE</button>
  </div>
);

Load.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Load;
