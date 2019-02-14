import React from "react";
import PropTypes from "prop-types";
import { ListItemSecondaryText as ListItemSecondaryTextM } from '@rmwc/list';
import '@material/list/dist/mdc.list.css';

function ListItemSecondaryText(props) {
  return (
      <ListItemSecondaryTextM {...props}>
        {props.children}
      </ListItemSecondaryTextM>
  );
}

ListItemSecondaryText.propTypes = {
    children: PropTypes.node,
    icon: PropTypes.string,
    style: PropTypes.object
};

export { ListItemSecondaryText as default };
