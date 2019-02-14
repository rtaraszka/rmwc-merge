import React from "react";
import PropTypes from "prop-types";
import { TextField as TextFieldM } from '@rmwc/textfield';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';

function TextField(props) {
  return (
      <TextFieldM {...props} onChange={props.onChange} />
  );
}

TextField.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.node,
  type: PropTypes.string,
  fullwidth: PropTypes.bool,
  textarea: PropTypes.bool,
  rows: PropTypes.number,
  withLeadingIcon: PropTypes.node,
  withTrailingIcon: PropTypes.node,
  value: PropTypes.string,
  outlined: PropTypes.bool,
  dense: PropTypes.bool,
  invalid: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool
};

export { TextField as default };
