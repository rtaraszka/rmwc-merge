import React from "react";
import PropTypes from "prop-types";
import { DrawerTitle as DrawerTitleM } from '@rmwc/drawer';
import '@material/drawer/dist/mdc.drawer.css';

function DrawerTitle(props) {
  return (
      <DrawerTitleM {...props}>
        {props.children}
      </DrawerTitleM>
  );
}

DrawerTitle.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
};

export { DrawerTitle as default };