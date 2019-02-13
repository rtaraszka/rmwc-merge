import React from "react";
import PropTypes from "prop-types";
import { CardActionButtons as CardActionButtonsM } from '@rmwc/card';

function CardActionButtons(props) {
  return (
      <CardActionButtonsM {...props}>
        {props.children}
      </CardActionButtonsM>
  );
}

CardActionButtons.propTypes = {
    children: PropTypes.node
};

export { CardActionButtons as default };
