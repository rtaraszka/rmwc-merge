import React from "react";
import PropTypes from "prop-types";
import { SimpleMenuSurface as SimpleMenuSurfaceM } from '@rmwc/menu';
import '@material/menu/dist/mdc.menu.css';
import '@material/menu-surface/dist/mdc.menu-surface.css';
import '@material/list/dist/mdc.list.css';

function SimpleMenuSurface(props) {
  return (
      <SimpleMenuSurfaceM {...props}>
        {props.children}
      </SimpleMenuSurfaceM>
  );
}

SimpleMenuSurface.propTypes = {
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

export { SimpleMenuSurface as default };
