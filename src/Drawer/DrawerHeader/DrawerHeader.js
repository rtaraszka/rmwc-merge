import React from "react";
import PropTypes from "prop-types";
import { DrawerHeader as DrawerHeaderM } from '@rmwc/drawer';
import '@material/drawer/dist/mdc.drawer.css';

function DrawerHeader(props) {
  return (
      <DrawerHeaderM {...props}>
        {props.children}
      </DrawerHeaderM>
  );
}

DrawerHeader.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
};

export { DrawerHeader as default };