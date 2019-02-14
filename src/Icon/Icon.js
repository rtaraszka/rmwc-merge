import React from "react";
import PropTypes from "prop-types";
import { Icon as IconM } from '@rmwc/icon';
import '@rmwc/icon/icon.css';

function Icon(props) {
  return (
      <IconM {...props} style={props.style} />
  );
}

Icon.propTypes = {
    icon: PropTypes.string,
    iconOptions: PropTypes.object,
    style: PropTypes.object
};

export { Icon as default };
