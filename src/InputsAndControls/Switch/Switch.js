import React from "react";
import PropTypes from "prop-types";
import { Switch as SwitchM } from '@rmwc/switch';
import '@material/switch/dist/mdc.switch.css';
import '@material/form-field/dist/mdc.form-field.css';

function Switch(props) {
  return (
      <SwitchM {...props} onChange={props.onChange} />
  );
}

Switch.propTypes = {
    onChange: PropTypes.func,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    name: PropTypes.bool,
    label: PropTypes.string,
    children: PropTypes.string
};

export { Switch as default };
