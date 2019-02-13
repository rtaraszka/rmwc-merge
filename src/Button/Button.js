import React from "react";
import PropTypes from "prop-types";
import { Button as ButtonM } from '@rmwc/button';
import '@material/button/dist/mdc.button.css';

function Button(props) {
  return (
      <ButtonM {...props} onClick={props.onClick}>
        {props.children}
      </ButtonM>
  );
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    icon: PropTypes.string,
    trailingIcon: PropTypes.string,
    dense: PropTypes.bool,
    raised: PropTypes.bool,
    unelevated: PropTypes.bool,
    outlined: PropTypes.bool,
    disabled: PropTypes.bool,
    ripple: PropTypes.bool,
    accent: PropTypes.bool,
    primary: PropTypes.bool,
    className: PropTypes.string,
};

export { Button as default };
