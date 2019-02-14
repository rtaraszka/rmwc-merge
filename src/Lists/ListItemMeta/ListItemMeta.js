import React from "react";
import PropTypes from "prop-types";
import { ListItemMeta as ListItemMetaM } from '@rmwc/list';
import '@material/list/dist/mdc.list.css';

function ListItemMeta(props) {
  return (
      <ListItemMetaM {...props} />
  );
}

ListItemMeta.propTypes = {
    icon: PropTypes.string,
    style: PropTypes.object
};

export { ListItemMeta as default };
