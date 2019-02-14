import React from "react";
import PropTypes from "prop-types";
import { Select as SelectM } from '@rmwc/select';
import '@material/select/dist/mdc.select.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';

function Select(props) {
  return (
      <SelectM {...props} onChange={props.onChange} />
  );
}

Select.propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.object,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    outlined: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

export { Select as default };
