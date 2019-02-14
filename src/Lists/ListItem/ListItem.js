import React from "react";
import PropTypes from "prop-types";
import { ListItem as ListItemM } from '@rmwc/list';
import '@material/list/dist/mdc.list.css';

function ListItem(props) {
  return (
      <ListItemM {...props} onClick={props.onClick}>
        {props.children}
      </ListItemM>
  );
}

ListItem.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    activated: PropTypes.bool,
    disabled: PropTypes.bool,
    ripple: PropTypes.bool,
    tabIndex: PropTypes.number
};

export { ListItem as default };
