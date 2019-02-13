import PropTypes from "prop-types";
import React from "react";
import { IconButton as IconButtonM } from '@rmwc/icon-button';
import '@material/icon-button/dist/mdc.icon-button.css';

function IconButton(props) {
  return (
      <IconButtonM {...props} onClick={props.onClick} />
  );
}

IconButton.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.string,
    iconOptions: PropTypes.object,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    onIcon: PropTypes.node,
    onIconOptions: PropTypes.object,
};

export { IconButton as default };