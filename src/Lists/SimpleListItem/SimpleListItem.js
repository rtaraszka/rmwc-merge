import React from "react";
import PropTypes from "prop-types";
import { SimpleListItem as SimpleListItemM } from '@rmwc/list';
import '@material/list/dist/mdc.list.css';

function SimpleListItem(props) {
  return (
      <SimpleListItemM {...props}>
        {props.children}
      </SimpleListItemM>
  );
}

SimpleListItem.propTypes = {
    children: PropTypes.node,
    text: PropTypes.node,
    secondaryText: PropTypes.node,
    graphic: PropTypes.node,
    meta: PropTypes.node,
    selected: PropTypes.bool,
    activated: PropTypes.bool,
    disabled: PropTypes.bool,
    ripple: PropTypes.bool
};

export { SimpleListItem as default };
