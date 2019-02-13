import React from "react";
import PropTypes from "prop-types";
import { ChipSet as ChipSetM } from '@rmwc/chip';
import '@material/chips/dist/mdc.chips.css';

function ChipSet(props) {
  return (
      <ChipSetM {...props}>
        {props.children}
      </ChipSetM>
  );
}

ChipSet.propTypes = {
    children: PropTypes.node,
    choice: PropTypes.bool,
    filter: PropTypes.bool
};

export { ChipSet as default };
