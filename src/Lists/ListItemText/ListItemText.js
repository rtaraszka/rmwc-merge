import React from "react";
import PropTypes from "prop-types";
import { ListItemText as ListItemTextM } from '@rmwc/list';
import '@material/list/dist/mdc.list.css';

function ListItemText(props) {
  return (
      <ListItemTextM {...props}>
        {props.children}
      </ListItemTextM>
  );
}

ListItemText.propTypes = {
    children: PropTypes.node
};

export { ListItemText as default };
