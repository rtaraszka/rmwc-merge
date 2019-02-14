import React from "react";
import PropTypes from "prop-types";
import { GridTilePrimaryContent as GridTilePrimaryContentM } from '@rmwc/grid-list';
import '@material/grid-list/dist/mdc.grid-list.css';

function GridTilePrimaryContent(props) {
  return (
      <GridTilePrimaryContentM {...props}>
        {props.children}
      </GridTilePrimaryContentM>
  );
}

GridTilePrimaryContent.propTypes = {
    children: PropTypes.node
};

export { GridTilePrimaryContent as default };