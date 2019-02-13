import React from "react";
import PropTypes from "prop-types";
import { Chip as ChipM } from '@rmwc/chip';

function Chip(props) {
  return (
      <ChipM {...props} />
  );
}

Chip.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  leadingIcon: PropTypes.node,
  trailingIcon: PropTypes.node,
  id: PropTypes.node,
  checkmark: PropTypes.bool,
  children: PropTypes.node,
  onInteraction: PropTypes.func,
  onTrailingIconInteraction: PropTypes.func,
  onRemove: PropTypes.func
};

export { Chip as default };


