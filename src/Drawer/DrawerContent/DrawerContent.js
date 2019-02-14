import React from "react";
import PropTypes from "prop-types";
import { DrawerContent as DrawerContentM } from '@rmwc/drawer';
import '@material/drawer/dist/mdc.drawer.css';

function DrawerContent(props) {
  return (
      <DrawerContentM {...props}>
        {props.children}
      </DrawerContentM>
  );
}

DrawerContent.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
};

export { DrawerContent as default };