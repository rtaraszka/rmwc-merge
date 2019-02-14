import React from "react";
import PropTypes from "prop-types";
import { Radio as RadioM } from '@rmwc/radio';
import '@material/radio/dist/mdc.radio.css';
import '@material/form-field/dist/mdc.form-field.css';

function Radio(props) {
  return (
      <RadioM {...props} onChange={props.onChange} />
  );
}

Radio.propTypes = {
    onChange: PropTypes.func,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    name: PropTypes.bool,
    value: PropTypes.bool,
    label: PropTypes.string
};

export { Radio as default };
