import React from "react";
import PropTypes from "prop-types";
import { ListItemPrimaryText as ListItemPrimaryTextM } from '@rmwc/list';
import '@material/list/dist/mdc.list.css';

function ListItemPrimaryText(props) {
  return (
      <ListItemPrimaryTextM {...props}>
        {props.children}
      </ListItemPrimaryTextM>
  );
}

ListItemPrimaryText.propTypes = {
    children: PropTypes.node,
    icon: PropTypes.string,
    style: PropTypes.object
};

export { ListItemPrimaryText as default };
