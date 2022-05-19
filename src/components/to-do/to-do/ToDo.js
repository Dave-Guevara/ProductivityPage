import React from 'react'
import PropTypes from 'prop-types';

export const ToDo = ({ content, styles }) => {
  return (
    <>
        <div>
            <input type="checkbox" />
            <label>{content}</label>
        </div>
    </>
  )
}

ToDo.propTypes =  {
    content: PropTypes.string.isRequired,
    styles: PropTypes.string
};

ToDo.defaultProps =  {
    content: '',
    styles: ''
};
