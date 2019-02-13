import React from "react";
import PropTypes from "prop-types";
import { CardPrimaryAction as CardPrimaryActionM } from '@rmwc/card';

function CardPrimaryAction(props) {
  return (
      <CardPrimaryActionM {...props}>
        {props.children}
      </CardPrimaryActionM>
  );
}

CardPrimaryAction.propTypes = {
    children: PropTypes.node,
};

export { CardPrimaryAction as default };
