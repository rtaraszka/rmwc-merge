import React from "react";
import PropTypes from "prop-types";
import { TextFieldHelperText as TextFieldHelperTextM } from '@rmwc/textfield';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';

function TextFieldHelperText(props) {
  return (
      <TextFieldHelperTextM {...props} onChange={props.onChange} />
  );
}

TextFieldHelperText.propTypes = {
    children: PropTypes.node,
    persistent: PropTypes.bool,
    validationMsg: PropTypes.bool,
};

export { TextFieldHelperText as default };
