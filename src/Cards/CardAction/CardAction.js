import React from "react";
import PropTypes from "prop-types";
import { CardAction as CardActionM } from '@rmwc/card';

function CardAction(props) {
  return (
      <CardActionM {...props}>
        {props.children}
      </CardActionM>
  );
}

CardAction.propTypes = {
    children: PropTypes.node,
    dense: PropTypes.bool,
    raised: PropTypes.bool,
    unelevated: PropTypes.bool,
    outlined: PropTypes.bool,
    disabled: PropTypes.bool,
    ripple: PropTypes.bool,
    className: PropTypes.string,
    icon: PropTypes.string,
    iconOptions: PropTypes.object,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    onIcon: PropTypes.node,
    onIconOptions: PropTypes.object
};

export { CardAction as default };
