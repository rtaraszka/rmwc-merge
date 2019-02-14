import React from "react";
import PropTypes from "prop-types";
import { GridTileSecondary as GridTileSecondaryM } from '@rmwc/grid-list';
import '@material/grid-list/dist/mdc.grid-list.css';

function GridTileSecondary(props) {
  return (
      <GridTileSecondaryM {...props} onClick={props.onClick}>
        {props.children}
      </GridTileSecondaryM>
  );
}

GridTileSecondary.propTypes = {
    children: PropTypes.node
};

export { GridTileSecondary as default };