import React from "react";
import PropTypes from "prop-types";
import { Fab as FabM } from '@rmwc/fab';
import  '@material/fab/dist/mdc.fab.css';

function Fab(props) {
  return (
      <FabM {...props} onClick={props.onClick} />
  );
}

Fab.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.node,
    icon: PropTypes.string,
    iconOptions: PropTypes.object,
    mini: PropTypes.bool,
    exited: PropTypes.bool,
    ripple: PropTypes.bool,
};

export { Fab as default };
