import React from "react";
import PropTypes from "prop-types";
import { Ripple as RippleM } from '@rmwc/ripple';
import '@material/ripple/dist/mdc.ripple.css';

function Ripple(props) {
  return (
      <RippleM {...props} onClick={props.onClick} />
  );
}

Ripple.propTypes = {
    children: PropTypes.node,
    unbounded: PropTypes.bool,
    primary: PropTypes.bool,
    accent: PropTypes.bool,
    disabled: PropTypes.bool,
    surface: PropTypes.bool
};

export { Ripple as default };
