import React from "react";
import PropTypes from "prop-types";
import { GridTilePrimary as GridTilePrimaryM } from '@rmwc/grid-list';
import '@material/grid-list/dist/mdc.grid-list.css';

function GridTilePrimary(props) {
  return (
      <GridTilePrimaryM {...props}>
        {props.children}
      </GridTilePrimaryM>
  );
}

GridTilePrimary.propTypes = {
    children: PropTypes.node
};

export { GridTilePrimary as default };