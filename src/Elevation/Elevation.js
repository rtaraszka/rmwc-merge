import React from "react";
import PropTypes from "prop-types";
import { Elevation as ElevationM } from '@rmwc/elevation';
import '@material/elevation/dist/mdc.elevation.css';

function Elevation(props) {
  return (
      <ElevationM {...props}>
        {props.children}
      </ElevationM>
  );
}

Elevation.propTypes = {
    children: PropTypes.node,
    z: PropTypes.number,
    transition: PropTypes.bool,
    style: PropTypes.object,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    onClick: PropTypes.func
};

export { Elevation as default };
