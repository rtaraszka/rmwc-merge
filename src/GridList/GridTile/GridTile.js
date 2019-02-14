import React from "react";
import PropTypes from "prop-types";
import { GridTile as GridTileM } from '@rmwc/grid-list';
import '@material/grid-list/dist/mdc.grid-list.css';

function GridTile(props) {
  return (
      <GridTileM {...props} onClick={props.onClick}>
        {props.children}
      </GridTileM>
  );
}

GridTile.propTypes = {
    children: PropTypes.node
};

export { GridTile as default };