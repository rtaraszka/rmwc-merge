import React from "react";
import PropTypes from "prop-types";
import { DrawerSubtitle as DrawerSubtitleM } from '@rmwc/drawer';
import '@material/drawer/dist/mdc.drawer.css';

function DrawerSubtitle(props) {
  return (
      <DrawerSubtitleM {...props}>
        {props.children}
      </DrawerSubtitleM>
  );
}

DrawerSubtitle.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
};

export { DrawerSubtitle as default };