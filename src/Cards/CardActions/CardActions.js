import React from "react";
import PropTypes from "prop-types";
import { CardActions as CardActionsM } from '@rmwc/card';

function CardActions(props) {
  return (
      <CardActionsM {...props}>
        {props.children}
      </CardActionsM>
  );
}

CardActions.propTypes = {
    fullBleed: PropTypes.bool,
    children: PropTypes.node
};

export { CardActions as default };
