import React from "react";
import PropTypes from "prop-types";
import { GridTileIcon as GridTileIconM } from '@rmwc/grid-list';
import '@material/grid-list/dist/mdc.grid-list.css';

function GridTileIcon(props) {
  return (
      <GridTileIconM {...props} />
  );
}

GridTileIcon.propTypes = {
    icon: PropTypes.string,
    iconOptions: PropTypes.object
};

export { GridTileIcon as default };