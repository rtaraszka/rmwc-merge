import React from "react";
import PropTypes from "prop-types";
import { GridTileTitle as GridTileTitleM } from '@rmwc/grid-list';
import '@material/grid-list/dist/mdc.grid-list.css';

function GridTileTitle(props) {
  return (
      <GridTileTitleM {...props}>
        {props.children}
      </GridTileTitleM>
  );
}

GridTileTitle.propTypes = {
    children: PropTypes.node
};

export { GridTileTitle as default };