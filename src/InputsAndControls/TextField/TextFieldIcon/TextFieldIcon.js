import React from "react";
import PropTypes from "prop-types";
import { TextFieldIcon as TextFieldIconM } from '@rmwc/textfield';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';

function TextFieldIcon(props) {
  return (
      <TextFieldIconM {...props} onClick={props.onClick} />
  );
}

TextFieldIcon.propTypes = {
    icon: PropTypes.string,
    iconOptions: PropTypes.object,
    onClick: PropTypes.func 
};

export { TextFieldIcon as default };
