import React from "react";
import PropTypes from "prop-types";
import { Drawer as DrawerM } from '@rmwc/drawer';
import '@material/drawer/dist/mdc.drawer.css';

function Drawer(props) {
  return (
      <DrawerM {...props}>
        {props.children}
      </DrawerM>
  );
}

Drawer.propTypes = {
    children: PropTypes.node,
    open: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    dismissible: PropTypes.bool,
    modal: PropTypes.bool,
    style: PropTypes.object
};

export { Drawer as default };