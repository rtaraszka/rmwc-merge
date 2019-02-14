import React from "react";
import PropTypes from "prop-types";
import { SimpleMenu as SimpleMenuM } from '@rmwc/menu';
import '@material/menu/dist/mdc.menu.css';
import '@material/menu-surface/dist/mdc.menu-surface.css';
import '@material/list/dist/mdc.list.css';

function SimpleMenu(props) {
  return (
      <SimpleMenuM {...props}>
        {props.children}
      </SimpleMenuM>
  );
}

SimpleMenu.propTypes = {
    children: PropTypes.node,
    handle: PropTypes.node,
    open: PropTypes.bool,
    fixed: PropTypes.bool,
    anchorCorner: PropTypes.oneOf(['bottomEnd', 'bottomLeft', 'bottomRight', 'bottomStart', 'topEnd', 'topLeft', 'topRight', 'topStart']),
    onSelect: PropTypes.func,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    rootProps: PropTypes.object
};

export { SimpleMenu as default };
