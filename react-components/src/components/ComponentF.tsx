import React from 'react';
import PropTypes from 'prop-types';

ComponentF.propType = {
  name: PropTypes.string,
  
};

function ComponentF({ name }) {
  return (
    <div>
      {name}
      
    </div>
  );
}

export default ComponentF;
