import React from "react";
import PropTypes from "prop-types";
import { MenuItem as MenuItemM } from '@rmwc/menu';
import '@material/menu/dist/mdc.menu.css';
import '@material/menu-surface/dist/mdc.menu-surface.css';
import '@material/list/dist/mdc.list.css';

function MenuItem(props) {
  return (
      <MenuItemM {...props}>
        {props.children}
      </MenuItemM>
  );
}

MenuItem.propTypes = {
    children: PropTypes.node,
    selected: PropTypes.bool,
    activated: PropTypes.bool,
    disabled: PropTypes.bool,
    ripple: PropTypes.bool,
    tabIndex: PropTypes.number,
};

export { MenuItem as default };
