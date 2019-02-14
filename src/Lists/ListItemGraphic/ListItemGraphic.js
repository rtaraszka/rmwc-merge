import React from "react";
import PropTypes from "prop-types";
import { ListItemGraphic as ListItemGraphicM } from '@rmwc/list';
import '@material/list/dist/mdc.list.css';

function ListItemGraphic(props) {
  return (
      <ListItemGraphicM {...props} />
  );
}

ListItemGraphic.propTypes = {
    icon: PropTypes.string,
    style: PropTypes.object
};

export { ListItemGraphic as default };
