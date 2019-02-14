import React from "react";
import PropTypes from "prop-types";
import { SelectHelperText as SelectHelperTextM } from '@rmwc/checkbox';
import '@material/select/dist/mdc.select.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';

function SelectHelperText(props) {
  return (
      <SelectHelperTextM {...props}>
        {props.children}
      </SelectHelperTextM>
  );
}

SelectHelperText.propTypes = {
    children: PropTypes.node
};

export { SelectHelperText as default };
